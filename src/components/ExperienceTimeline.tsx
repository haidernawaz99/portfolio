import { MapPin, ExternalLink } from 'lucide-react';
import type { Experience } from '@/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[var(--violet)] mb-5 pb-2 border-b border-[rgba(255,255,255,0.12)]">
        Experience
      </h2>
      <ol className="m-0 p-0 flex flex-col list-none">
        {experiences.map((exp, index) => (
          <li key={`${exp.company}-${exp.role}-${index}`} className="grid grid-cols-[20px_1fr] gap-x-4 animate-[fadeSlideIn_400ms_ease_both]">
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center pt-1" aria-hidden="true">
              <div className="timeline-dot" />
              {index < experiences.length - 1 && (
                <div className="timeline-line" />
              )}
            </div>

            {/* Content */}
            <div className="pb-8">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-3 flex-wrap mb-2.5">
                <div>
                  <h3 className="text-base font-semibold text-[rgba(255,255,255,0.95)] m-0 mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-2.5 flex-wrap">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.85rem] text-[var(--violet)] no-underline inline-flex items-center gap-1 transition-opacity duration-150 ease-in-out hover:opacity-80"
                        aria-label={`Visit ${exp.company} website`}
                      >
                        {exp.company}
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-[0.85rem] text-[var(--violet)]">{exp.company}</span>
                    )}
                    <span className="inline-flex items-center gap-[3px] text-[0.75rem] text-[rgba(255,255,255,0.4)]">
                      <MapPin size={12} aria-hidden="true" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <time className="text-[0.75rem] text-[rgba(255,255,255,0.4)] whitespace-nowrap shrink-0">
                  {exp.startDate} – {exp.endDate}
                </time>
              </div>

              {exp.description && (
                <p className="text-[0.82rem] text-[rgba(255,255,255,0.65)] m-0 mb-2.5 italic">{exp.description}</p>
              )}

              <ul className="list-none p-0 m-0 flex flex-col gap-[5px] bullet-list">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="text-[0.83rem] text-[rgba(255,255,255,0.65)] leading-[1.6]">{bullet}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
