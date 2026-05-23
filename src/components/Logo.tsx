type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        r="16"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="1.5"
      />
      <path
        d="M 6.5 22 A 14 14 0 0 1 31.5 13"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M 20 20 L 29.5 12.8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2.6" fill="currentColor" />
    </svg>
  )
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <LogoMark className="h-7 w-7 text-blue-400" />
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
          ToolMeter
        </span>
      )}
    </div>
  )
}
