import { ProjectCard } from "./ProjectCard"
import type { Project } from "@/types"

// Stagger delay in ms between each card entrance animation
const CARD_STAGGER_MS = 100

interface ProjectsPageProps {
  projects: Project[]
}

export function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <main
      id="projects-page"
      className="page h-full w-full"
      aria-label="Projects"
    >
      <div className="flex h-full w-full flex-col items-center overflow-x-hidden overflow-y-auto overscroll-contain px-4 pt-10 pb-[calc(var(--dock-h)+var(--dock-pb)+20px)] sm:px-6 sm:pt-10 sm:pb-[calc(var(--dock-h)+var(--dock-pb)+24px)]">
        <div className="mb-7 w-full max-w-180">
          <h1 className="m-0 mb-1.5 text-[clamp(1.8rem,5vw,2.8rem)] font-bold tracking-[-0.03em] text-[rgba(255,255,255,0.95)] drop-shadow-[0_2px_16px_rgba(167,139,250,0.3)]">
            Projects
          </h1>
          <p className="m-0 text-[0.9rem] text-[rgba(255,255,255,0.65)]">
            A selection of things I&apos;ve built.
          </p>
        </div>
        <ul className="m-0 flex w-full max-w-180 list-none flex-col gap-5 p-0">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.name}
              project={project}
              animationDelay={index * CARD_STAGGER_MS}
            />
          ))}
        </ul>
      </div>
    </main>
  )
}
