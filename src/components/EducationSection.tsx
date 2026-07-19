import { GraduationCap, MapPin } from 'lucide-react';
import type { Education } from '@/types';

interface EducationSectionProps {
  education: Education[];
}

export function EducationSection({ education }: EducationSectionProps) {
  return (
    <section aria-labelledby="education-heading">
      <h2 id="education-heading" className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[var(--violet)] mb-5 pb-2 border-b border-[rgba(255,255,255,0.12)]">
        Education
      </h2>
      <ul className="list-none m-0 p-0 flex flex-col gap-4">
        {education.map((edu, index) => (
          <li key={`${edu.institution}-${index}`} className="flex gap-3.5 items-start">
            <div className="w-9 h-9 rounded-[10px] bg-[rgba(167,139,250,0.15)] border border-[rgba(167,139,250,0.25)] flex items-center justify-center text-[var(--violet)] shrink-0" aria-hidden="true">
              <GraduationCap size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3 flex-wrap">
                <div>
                  <h3 className="text-[0.95rem] font-semibold text-[rgba(255,255,255,0.95)] m-0 mb-[3px]">{edu.degree}</h3>
                  <p className="text-[0.82rem] text-[var(--violet)] m-0 mb-1">{edu.institution}</p>
                  <span className="inline-flex items-center gap-[3px] text-[0.73rem] text-[rgba(255,255,255,0.4)]">
                    <MapPin size={12} aria-hidden="true" />
                    {edu.location}
                  </span>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                  <time className="text-[0.73rem] text-[rgba(255,255,255,0.4)]">{edu.dateRange}</time>
                  <span
                    className="flex flex-col items-start sm:items-end text-[0.68rem] text-[rgba(255,255,255,0.4)] gap-[1px]"
                    aria-label={`${edu.gradeType === 'cgpa' ? 'CGPA' : 'Grade'}: ${edu.grade}`}
                  >
                    {edu.gradeType === 'cgpa' ? 'CGPA' : 'Grade'}
                    <strong className="text-[0.85rem] text-[rgba(255,255,255,0.95)] font-semibold">{edu.grade}</strong>
                  </span>
                  {edu.honour && (
                    <span className="text-[0.73rem] text-[#fde68a] font-semibold bg-[rgba(251,191,36,0.12)] border border-[rgba(251,191,36,0.25)] rounded-full px-2 py-0.5 mt-1">🏆 {edu.honour}</span>
                  )}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
