import { Home, FolderOpen } from "lucide-react"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import GlassSurface from "./GlassSurface"
import { DockItem } from "./DockItem"
import { isPageId, type DockItemConfig, type PageId } from "@/types"

const DOCK_ITEMS: DockItemConfig[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: FolderOpen },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/haidernawaz99",
  },
]

interface DockProps {
  activePage: PageId
  onNavigate: (page: PageId) => void
  isMobile: boolean
}

export function Dock({ activePage, onNavigate, isMobile }: DockProps) {
  const handleItemClick = (item: DockItemConfig) => {
    if (item.id === "linkedin" && item.url) {
      window.open(item.url, "_blank", "noopener,noreferrer")
      return
    }
    if (isPageId(item.id)) {
      onNavigate(item.id)
    }
  }

  return (
    <nav
      className="fixed bottom-(--dock-pb) left-1/2 z-50 h-(--dock-h) w-auto -translate-x-1/2"
      aria-label="Main navigation"
    >
      <GlassSurface
        width="100%"
        height="100%"
        borderRadius={28}
        backgroundOpacity={0.15}
        distortionScale={-120}
        className="h-full! px-2"
      >
        <div className="flex h-full items-center gap-2 px-2">
          {DOCK_ITEMS.map((item) => (
            <DockItem
              key={item.id}
              item={item}
              isActive={isPageId(item.id) && item.id === activePage}
              showLabel
              onClick={() => handleItemClick(item)}
            />
          ))}
        </div>
      </GlassSurface>
    </nav>
  )
}
