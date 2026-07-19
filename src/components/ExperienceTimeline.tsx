import { MapPin, ExternalLink } from "lucide-react"
import type { Experience } from "@/types"

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section aria-labelledby="experience-heading">
      <h2
        id="experience-heading"
        className="mb-5 border-b border-[rgba(255,255,255,0.12)] pb-2 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--violet)] uppercase"
      >
        Experience
      </h2>
      <ol className="m-0 flex list-none flex-col p-0">
        {experiences.map((exp, index) => (
          <li
            key={`${exp.company}-${exp.role}-${index}`}
            className="grid animate-[fadeSlideIn_400ms_ease_both] grid-cols-[20px_1fr] gap-x-4"
          >
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center pt-1" aria-hidden="true">
              <div className="timeline-dot" />
              {index < experiences.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <div className="mb-2.5 flex flex-col flex-wrap gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <div>
                  <h3 className="m-0 mb-1 text-base font-semibold text-[rgba(255,255,255,0.95)]">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[0.85rem] text-[var(--violet)] no-underline transition-opacity duration-150 ease-in-out hover:opacity-80"
                        aria-label={`Visit ${exp.company} website`}
                      >
                        {exp.company}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-[0.85rem] text-[var(--violet)]">
                        {exp.company}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-[3px] text-[0.75rem] text-[rgba(255,255,255,0.4)]">
                      <MapPin size={12} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <time className="shrink-0 text-[0.75rem] whitespace-nowrap text-[rgba(255,255,255,0.4)]">
                  {exp.startDate} – {exp.endDate}
                </time>
              </div>

              {exp.description && (
                <p className="m-0 mb-2.5 text-[0.82rem] text-[rgba(255,255,255,0.65)] italic">
                  {exp.description}
                </p>
              )}

              <ul className="bullet-list m-0 flex list-none flex-col gap-[5px] p-0">
                {exp.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-[0.83rem] leading-[1.6] text-[rgba(255,255,255,0.65)]"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
