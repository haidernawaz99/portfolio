import { GraduationCap, MapPin } from "lucide-react"
import type { Education } from "@/types"

interface EducationSectionProps {
  education: Education[]
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section aria-labelledby="education-heading">
      <h2
        id="education-heading"
        className="mb-5 border-b border-[rgba(255,255,255,0.12)] pb-2 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--violet)] uppercase"
      >
        Education
      </h2>
      <ul className="m-0 flex list-none flex-col gap-4 p-0">
        {education.map((edu, index) => (
          <li
            key={`${edu.institution}-${index}`}
            className="flex items-start gap-3.5"
          >
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-[rgba(167,139,250,0.25)] bg-[rgba(167,139,250,0.15)] text-[var(--violet)]"
              aria-hidden="true"
            >
              <GraduationCap size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-col flex-wrap gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
                <div>
                  <h3 className="m-0 mb-[3px] text-[0.95rem] font-semibold text-[rgba(255,255,255,0.95)]">
                    {edu.degree}
                  </h3>
                  <p className="m-0 mb-1 text-[0.82rem] text-[var(--violet)]">
                    {edu.institution}
                  </p>
                  <span className="inline-flex items-center gap-[3px] text-[0.73rem] text-[rgba(255,255,255,0.4)]">
                    <MapPin size={12} aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>
                <div className="flex shrink-0 flex-col items-start gap-1 sm:items-end">
                  <time className="text-[0.73rem] text-[rgba(255,255,255,0.4)]">
                    {edu.dateRange}
                  </time>
                  <span
                    className="flex flex-col items-start gap-[1px] text-[0.68rem] text-[rgba(255,255,255,0.4)] sm:items-end"
                    aria-label={`${edu.gradeType === "cgpa" ? "CGPA" : "Grade"}: ${edu.grade}`}
                  >
                    {edu.gradeType === "cgpa" ? "CGPA" : "Grade"}
                    <strong className="text-[0.85rem] font-semibold text-[rgba(255,255,255,0.95)]">
                      {edu.grade}
                    </strong>
                  </span>
                  {edu.honour && (
                    <span className="mt-1 rounded-full border border-[rgba(251,191,36,0.25)] bg-[rgba(251,191,36,0.12)] px-2 py-0.5 text-[0.73rem] font-semibold text-[#fde68a]">
                      🏆 {edu.honour}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
