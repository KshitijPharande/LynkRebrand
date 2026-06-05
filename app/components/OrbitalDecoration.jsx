export default function OrbitalDecoration({ className = "", size = 300, opacity = 0.08 }) {
  return (
    <svg
      className={`orbital-decoration ${className}`}
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
    >
      {/* Orbit ring 1 */}
      <ellipse
        cx="150"
        cy="150"
        rx="130"
        ry="55"
        transform="rotate(-25 150 150)"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Orbit ring 2 */}
      <ellipse
        cx="150"
        cy="150"
        rx="120"
        ry="50"
        transform="rotate(35 150 150)"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Sparkle at intersection */}
      <circle cx="200" cy="135" r="2.5" fill="currentColor" opacity="0.6" />
      <line x1="200" y1="129" x2="200" y2="141" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
      <line x1="194" y1="135" x2="206" y2="135" stroke="currentColor" strokeWidth="0.5" opacity="0.4" />
    </svg>
  );
}
