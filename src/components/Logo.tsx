type LogoProps = {
  className?: string
  showWordmark?: boolean
}

// Mark: warden shield (ink follows currentColor) guarding a tool.
// Hammer geometry from lucide ("hammer", ISC license), which the site
// already uses for its icon set, so the mark and UI share one language.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M50 7 L86 19 V46 C86 68.5 71 86 50 93 C29 86 14 68.5 14 46 V19 Z"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <g
        transform="translate(31 26) scale(1.78)"
        stroke="#2a78f0"
        strokeWidth="2.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" />
        <path d="m18 15 4-4" />
        <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
      </g>
    </svg>
  )
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className="h-7 w-7 text-zinc-100" />
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
          Tool<span className="text-[#5b9bf5]">Warden</span>
        </span>
      )}
    </div>
  )
}
