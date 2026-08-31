import { unstable_cache } from "next/cache";

export type Command = {
  name: string;
  description: string;
  syntax: string;
  category: string;
  context?: string;
};

type GitHubTree = {
  sha?: string;
  tree?: Array<{ path?: string; type?: string }>;
};

const repository = "melotheunbound/pocket-tool";
const branch = "main";
const commandRoot = "src/bot/commands/";

export const fallbackCommands: Command[] = [
  { name: "/avatar", description: "View a user's global or server avatar with direct format links.", syntax: "/avatar user: @member scope: Global", category: "Lookups", context: "Slash Command" },
  { name: "/banner", description: "View and download a user's profile banner.", syntax: "/banner user: @member", category: "Lookups", context: "Slash Command" },
  { name: "/debug", description: "View some information about Pocket Tool.", syntax: "/debug", category: "Essentials", context: "Slash Command" },
  { name: "/gif", description: "Turn an uploaded image into a GIF.", syntax: "/gif image: attachment", category: "Create & Media", context: "Slash Command" },
  { name: "/help", description: "Browse the commands currently available to you.", syntax: "/help", category: "Essentials", context: "Slash Command" },
  { name: "/invite", description: "View information about a Discord invite link.", syntax: "/invite link: discord.gg/…", category: "Lookups", context: "Slash Command" },
  { name: "/ping", description: "Check that Pocket Tool is online and responding.", syntax: "/ping", category: "Essentials", context: "Slash Command" },
  { name: "/role", description: "Inspect a role's age, position, colours and key permissions.", syntax: "/role role: @role", category: "Lookups", context: "Slash Command" },
  { name: "/timestamp", description: "Generate a Discord timestamp from natural language, with timezone and style controls.", syntax: "/timestamp time: in 10 minutes timezone: Europe/London style: Relative Time", category: "Language & Time", context: "Slash Command" },
  { name: "/timezone", description: "See the current time in any supported timezone.", syntax: "/timezone zone: America/New_York", category: "Language & Time", context: "Slash Command" },
  { name: "/translate", description: "Translate text between supported languages, with automatic source detection.", syntax: "/translate text: … from: Auto Detect to: Use my locale", category: "Language & Time", context: "Slash Command" },
  { name: "/tweet", description: "Display a rich X post preview and optionally translate its text.", syntax: "/tweet url: … language: Use my locale", category: "Language & Time", context: "Slash Command" },
  { name: "/tts", description: "Convert up to 500 characters into a native Discord voice message.", syntax: "/tts text: … voice: Neutral language: English", category: "Create & Media", context: "Slash Command" },
  { name: "/user", description: "View global or server-specific information about a user.", syntax: "/user user: @member scope: Guild", category: "Lookups", context: "Slash Command" },
  { name: "OCR", description: "Extract text from an image.", syntax: "Message menu -> Apps -> OCR", category: "Create & Media", context: "Message Context Command" },
  { name: "Quote This Message", description: "Create a custom quote card from a message, with type and visual controls.", syntax: "Message menu -> Apps -> Quote This Message", category: "Create & Media", context: "Message Context Command" },
  { name: "Speech to Text", description: "Transcribe audio attached to a message.", syntax: "Message menu -> Apps -> Speech to Text", category: "Create & Media", context: "Message Context Command" },
  { name: "Text to Speech", description: "Convert text into a native Discord voice message.", syntax: "Message menu -> Apps -> Text to Speech", category: "Create & Media", context: "Message Context Command" },
  { name: "Translate This Message", description: "Translate an existing message without copying it into a slash command.", syntax: "Message menu -> Apps -> Translate This Message", category: "Language & Time", context: "Message Context Command" },
  { name: "View User Profile", description: "Open the same profile lookup from a user context menu.", syntax: "User menu -> Apps -> View User Profile", category: "Lookups", context: "User Context Command" },
];

function readString(source: string, property: "name" | "description") {
  const match = source.match(new RegExp(`\\b${property}:\\s*(["'])(.*?)\\1`));
  if (!match?.[2]) return null;

  return match[2]
    .replaceAll("\\n", " ")
    .replaceAll("\\'", "'")
    .replaceAll('\\"', '"')
    .replaceAll("\\\\", "\\");
}

function fallbackFor(name: string) {
  const normalized = name.toLocaleLowerCase();
  return fallbackCommands.find((command) => command.name.replace(/^\//, "").toLocaleLowerCase() === normalized);
}

function commandFromSource(path: string, source: string): Command | null {
  if (source.includes("guilds:")) return null;

  const sourceName = readString(source, "name");
  if (!sourceName) return null;

  const chatInput = path.includes("/chatInput/");
  const userContext = path.includes("/userContext/");
  const previous = fallbackFor(sourceName);
  const name = chatInput ? `/${sourceName}` : sourceName;
  const context = chatInput ? "Slash Command" : userContext ? "User Context Command" : "Message Context Command";

  return {
    name,
    description: readString(source, "description") ?? previous?.description ?? "Available from the Discord context menu.",
    syntax: previous?.syntax ?? (chatInput ? name : `${userContext ? "User" : "Message"} menu -> Apps -> ${name}`),
    category: previous?.category ?? (chatInput ? "Other" : "Context Commands"),
    context,
  };
}

async function fetchCommandsFromBot(): Promise<Command[]> {
  const treeResponse = await fetch(`https://api.github.com/repos/${repository}/git/trees/${branch}?recursive=1`, {
    headers: {
      Accept: "application/vnd.github+json",
      "User-Agent": "pocket-tool-web",
    },
  });

  if (!treeResponse.ok) throw new Error(`Command tree request failed with ${treeResponse.status}`);
  const tree = await treeResponse.json() as GitHubTree;
  const sourceRef = tree.sha ?? branch;
  const paths = (tree.tree ?? [])
    .filter((entry) => entry.type === "blob" && entry.path?.startsWith(commandRoot) && entry.path.endsWith(".ts"))
    .map((entry) => entry.path as string);

  if (!paths.length) throw new Error("The bot command registry was empty");

  const sources = await Promise.all(paths.map(async (path) => {
    const response = await fetch(`https://raw.githubusercontent.com/${repository}/${sourceRef}/${path}`);
    if (!response.ok) throw new Error(`Command source request failed with ${response.status}`);
    return { path, source: await response.text() };
  }));

  const commands = sources
    .map(({ path, source }) => commandFromSource(path, source))
    .filter((command): command is Command => command !== null)
    .sort((a, b) => a.name.localeCompare(b.name));

  if (!commands.length) throw new Error("No public bot commands could be read");
  return commands;
}

const getCachedCommands = unstable_cache(
  async () => {
    try {
      return await fetchCommandsFromBot();
    } catch (error) {
      console.error("Unable to refresh the Pocket Tool command list:", error);
      return fallbackCommands;
    }
  },
  ["pocket-tool-command-reference-v1"],
  { revalidate: 86_400 },
);

export function getCommands() {
  return getCachedCommands();
}
