import { Award } from "lucide-react"
import type { Certification } from "@/types"

interface CertificationsSectionProps {
  certifications: Certification[]
}

export function CertificationsSection({
  certifications,
}: CertificationsSectionProps) {
  return (
    <section aria-labelledby="certifications-heading">
      <h2
        id="certifications-heading"
        className="mb-5 border-b border-[rgba(255,255,255,0.12)] pb-2 text-[0.65rem] font-semibold tracking-[0.12em] text-[var(--violet)] uppercase"
      >
        Key Achievements &amp; Certifications
      </h2>
      <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <li
            key={`${cert.name}-${index}`}
            className="flex items-start gap-3 rounded-[14px] border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] p-3.5"
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[rgba(255,159,252,0.2)] bg-[rgba(255,159,252,0.12)] text-[var(--pink)]"
              aria-hidden="true"
            >
              <Award size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="mb-0.5 flex items-baseline justify-between gap-2">
                <h3 className="m-0 text-[0.82rem] leading-[1.3] font-semibold text-[rgba(255,255,255,0.95)]">
                  {cert.name}
                </h3>
                <time className="shrink-0 text-[0.7rem] text-[rgba(255,255,255,0.4)]">
                  {cert.year}
                </time>
              </div>
              <p className="m-0 mb-1 text-[0.73rem] text-[var(--pink)]">
                {cert.issuer}
              </p>
              <p className="m-0 text-[0.73rem] leading-[1.5] text-[rgba(255,255,255,0.4)]">
                {cert.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
