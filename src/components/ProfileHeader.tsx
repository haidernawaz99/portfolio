import { Mail, MapPin, ExternalLink } from 'lucide-react';
import { LinkedinIcon } from './icons/LinkedinIcon';
import type { Profile } from '@/types';

interface ProfileHeaderProps {
  profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col gap-5">
      <div>
        <h1 className="text-[clamp(1.5rem,4vw,2.4rem)] font-bold tracking-tight text-[rgba(255,255,255,0.95)] drop-shadow-[0_2px_12px_rgba(167,139,250,0.25)] leading-[1.1] m-0">
          {profile.name}
        </h1>
        <p className="text-[0.78rem] sm:text-[0.85rem] text-[var(--violet)] font-medium mt-1.5 leading-relaxed">
          {profile.title}
        </p>

        <div className="flex flex-wrap gap-2.5 sm:gap-3.5 mt-1">
          <span className="flex items-center gap-1.5 text-[0.8rem] text-[rgba(255,255,255,0.65)]">
            <MapPin size={14} aria-hidden="true" />
            {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-1.5 text-[0.8rem] text-[rgba(255,255,255,0.65)] no-underline transition-colors duration-150 ease-in-out hover:text-[var(--violet)]"
            aria-label={`Send email to ${profile.email}`}
          >
            <Mail size={14} aria-hidden="true" />
            {profile.email}
          </a>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.8rem] text-[rgba(255,255,255,0.65)] no-underline transition-colors duration-150 ease-in-out hover:text-[var(--violet)]"
            aria-label="View LinkedIn profile"
          >
            <LinkedinIcon size={14} aria-hidden="true" />
            LinkedIn
            <ExternalLink size={11} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-[rgba(255,255,255,0.12)] to-transparent" aria-hidden="true" />

      <p className="text-[0.9rem] text-[rgba(255,255,255,0.65)] leading-[1.75] m-0">
        {profile.summary}
      </p>
    </header>
  );
}
