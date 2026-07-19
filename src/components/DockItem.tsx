import type { DockItemConfig } from "@/types"

interface DockItemProps {
  item: DockItemConfig
  isActive: boolean
  showLabel: boolean
  onClick: () => void
}

export function DockItem({
  item,
  isActive,
  showLabel,
  onClick,
}: DockItemProps) {
  const Icon = item.icon

  return (
    <button
      id={`dock-item-${item.id}`}
      aria-label={item.label}
      aria-current={isActive ? "page" : undefined}
      onClick={onClick}
      className={`font-inherit relative flex min-h-[48px] min-w-[48px] cursor-pointer appearance-none flex-col items-center justify-center gap-2.5 rounded-[16px] border-none bg-transparent p-0 px-[14px] py-[6px] transition-transform duration-250 ease-[cubic-bezier(0.34,1.56,0.64,1)] sm:px-3 sm:py-2 ${isActive ? "text-[var(--violet)]" : "text-[rgba(255,255,255,0.65)]"} group hover:text-[rgba(255,255,255,0.95)] sm:hover:-translate-y-0.5 sm:hover:scale-[1.15]`}
      data-active={isActive}
    >
      <span className="relative flex items-center justify-center">
        <Icon size={22} aria-hidden="true" />
        {isActive && <span className="dock-indicator" aria-hidden="true" />}
      </span>
      {showLabel && (
        <span className="text-[0.62rem] leading-none font-medium tracking-[0.01em]">
          {item.label}
        </span>
      )}
      {!showLabel && (
        <span
          className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 hidden -translate-x-1/2 translate-y-1 rounded-lg border border-[rgba(255,255,255,0.12)] bg-[rgba(20,20,30,0.9)] px-2.5 py-1 text-[0.72rem] font-medium whitespace-nowrap text-[rgba(255,255,255,0.95)] opacity-0 backdrop-blur-md transition-all duration-150 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 sm:block"
          role="tooltip"
        >
          {item.label}
        </span>
      )}
    </button>
  )
}
