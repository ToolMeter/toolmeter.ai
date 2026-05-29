type LogoProps = {
  className?: string
  showWordmark?: boolean
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo-mark.png"
      alt=""
      className={className}
      aria-hidden="true"
    />
  )
}

export function Logo({ className, showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className ?? ''}`}>
      <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg bg-white">
        <LogoMark className="h-full w-full object-contain p-1" />
      </span>
      {showWordmark && (
        <span className="text-[15px] font-semibold tracking-tight text-zinc-100">
          ToolMeter
        </span>
      )}
    </div>
  )
}
