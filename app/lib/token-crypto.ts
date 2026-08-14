import { createCipheriv, createHash, randomBytes } from "node:crypto";
import { requireServerEnvironment } from "./server-config";

export type EncryptedValue = {
  algorithm: "aes-256-gcm";
  ciphertext: string;
  iv: string;
  tag: string;
};

function getEncryptionKey() {
  const secret = requireServerEnvironment("OAUTH_TOKEN_ENCRYPTION_KEY");
  const decoded = Buffer.from(secret, "base64");
  const normalized = secret.replace(/=+$/, "");
  const isBase64Key = decoded.length === 32 && decoded.toString("base64").replace(/=+$/, "") === normalized;

  if (isBase64Key) return decoded;
  if (Buffer.byteLength(secret, "utf8") < 32) {
    throw new Error("OAUTH_TOKEN_ENCRYPTION_KEY must contain at least 32 characters or be a base64-encoded 32-byte key");
  }

  return createHash("sha256").update(secret, "utf8").digest();
}

export function encryptToken(value: string): EncryptedValue {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", getEncryptionKey(), iv);
  const ciphertext = Buffer.concat([cipher.update(value, "utf8"), cipher.final()]);

  return {
    algorithm: "aes-256-gcm",
    ciphertext: ciphertext.toString("base64"),
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64"),
  };
}
