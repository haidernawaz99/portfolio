import { lazy } from "react"
import { HomePage } from "@/components/HomePage"
import { useActivePage } from "@/hooks/useActivePage"
import { useIsMobile } from "@/hooks/useIsMobile"
import {
  profile,
  skills,
  experiences,
  education,
  certifications,
  projects,
} from "@/data"
import { Dock } from "./components/Dock"
import { ETHER_COLORS } from "./data/colors"

// LiquidEther resolution — lower on mobile for better performance
const ETHER_RESOLUTION_DESKTOP = 0.5
const ETHER_RESOLUTION_MOBILE = 0.3

// Lazy load the LiquidEther component to improve initial load performance
const LiquidEther = lazy(() => import("@/components/LiquidEther"))

// Lazy load the ProjectsPage component to improve initial load performance
const ProjectsPage = lazy(() => import("@/components/ProjectsPage"))

export function App() {
  const { activePage, setActivePage } = useActivePage("home")
  const isMobile = useIsMobile()

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Layer 1: Full-viewport animated background */}
      <div className="fixed inset-0 z-0" aria-hidden="true">
        <LiquidEther
          colors={ETHER_COLORS}
          resolution={0.3}
          autoResumeDelay={3000}
        />
      </div>

      {/* Layer 2: Page content */}
      <div className="relative z-10 h-full w-full">
        {activePage === "home" && (
          <HomePage
            key="home"
            profile={profile}
            skills={skills}
            experiences={experiences}
            education={education}
            certifications={certifications}
          />
        )}
        {activePage === "projects" && (
          <ProjectsPage key="projects" projects={projects} />
        )}
      </div>

      {/* Layer 3: Navigation dock */}
      <Dock
        activePage={activePage}
        onNavigate={setActivePage}
        isMobile={isMobile}
      />
    </div>
  )
}

export default App
