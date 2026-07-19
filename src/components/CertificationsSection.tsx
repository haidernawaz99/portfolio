import { Award } from 'lucide-react';
import type { Certification } from '@/types';

interface CertificationsSectionProps {
  certifications: Certification[];
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <section aria-labelledby="certifications-heading">
      <h2 id="certifications-heading" className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[var(--violet)] mb-5 pb-2 border-b border-[rgba(255,255,255,0.12)]">
        Key Achievements &amp; Certifications
      </h2>
      <ul className="list-none m-0 p-0 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {certifications.map((cert, index) => (
          <li key={`${cert.name}-${index}`} className="flex gap-3 items-start bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.12)] rounded-[14px] p-3.5">
            <div className="w-8 h-8 rounded-lg bg-[rgba(255,159,252,0.12)] border border-[rgba(255,159,252,0.2)] flex items-center justify-center text-[var(--pink)] shrink-0" aria-hidden="true">
              <Award size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline gap-2 mb-0.5">
                <h3 className="text-[0.82rem] font-semibold text-[rgba(255,255,255,0.95)] m-0 leading-[1.3]">{cert.name}</h3>
                <time className="text-[0.7rem] text-[rgba(255,255,255,0.4)] shrink-0">{cert.year}</time>
              </div>
              <p className="text-[0.73rem] text-[var(--pink)] m-0 mb-1">{cert.issuer}</p>
              <p className="text-[0.73rem] text-[rgba(255,255,255,0.4)] m-0 leading-[1.5]">{cert.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
