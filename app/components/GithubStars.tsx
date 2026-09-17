export function GithubStars({ stars }: { stars: number | null }) {
  if (stars === null) return null;

  return (
    <span className="github-stars">
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.75l2.98 6.27 6.77.72-5.02 4.72 1.36 6.79L12 17.9l-6.09 3.35 1.36-6.79-5.02-4.72 6.77-.72L12 2.75Z" />
      </svg>
      {stars.toLocaleString()} stars
    </span>
  );
}
