import { ExternalLink, Download } from "lucide-react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  animationDelay?: number
}

export function ProjectCard({ project, animationDelay = 0 }: ProjectCardProps) {
  return (
    <li
      className="animate-[fadeSlideIn_400ms_ease_both]"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <div className="blur-card flex w-full flex-col gap-3 p-4.5 sm:p-7">
        {/* Header */}
        <div className="flex flex-col flex-wrap gap-2.5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-wrap items-center gap-2.5">
            <h3 className="m-0 text-[1.05rem] font-bold text-[rgba(255,255,255,0.95)]">
              {project.name}
            </h3>
            {project.downloads && (
              <span
                className="inline-flex items-center gap-1 rounded-full border border-[rgba(34,197,94,0.35)] bg-[rgba(34,197,94,0.15)] px-2 py-0.5 text-[0.7rem] font-semibold text-[#86efac]"
                aria-label={`${project.downloads} downloads`}
              >
                <Download size={12} aria-hidden="true" />
                {project.downloads} Downloads
              </span>
            )}
          </div>
          <time className="shrink-0 text-[0.73rem] text-[rgba(255,255,255,0.4)]">
            {project.dateRange}
          </time>
        </div>

        {/* Description */}
        <p className="m-0 text-[0.85rem] leading-[1.65] text-[rgba(255,255,255,0.65)]">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div
          className="flex flex-wrap gap-1.25"
          role="list"
          aria-label="Technologies used"
        >
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[rgba(82,39,255,0.3)] bg-[rgba(82,39,255,0.12)] px-2 py-0.5 text-[0.68rem] font-medium text-[#b4a8ff]"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bullets */}
        <ul className="bullet-list bullet-list--pink m-0 flex list-none flex-col gap-1 p-0">
          {project.bullets.map((bullet, i) => (
            <li
              key={i}
              className="text-[0.82rem] leading-[1.6] text-[rgba(255,255,255,0.65)]"
            >
              {bullet}
            </li>
          ))}
        </ul>

        {/* Link */}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:-translate-y-1px mt-1 inline-flex items-center gap-1.5 self-start rounded-full border border-[rgba(167,139,250,0.3)] bg-[rgba(167,139,250,0.08)] px-3.5 py-1.5 text-[0.8rem] font-semibold text-(--violet) no-underline transition-all duration-150 ease-in-out hover:border-[rgba(167,139,250,0.5)] hover:bg-[rgba(167,139,250,0.18)]"
            aria-label={`View ${project.name} — opens in new tab`}
          >
            View Project
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        )}
      </div>
    </li>
  )
}
