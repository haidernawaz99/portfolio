import { ProfileHeader } from './ProfileHeader';
import { SkillsGrid } from './SkillsGrid';
import { ExperienceTimeline } from './ExperienceTimeline';
import { EducationSection } from './EducationSection';
import { CertificationsSection } from './CertificationsSection';
import type { Profile, Skill, Experience, Education, Certification } from '@/types';

interface HomePageProps {
  profile: Profile;
  skills: Skill[];
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
}

export function HomePage({ profile, skills, experiences, education, certifications }: HomePageProps) {
  return (
    <main id="home-page" className="page w-full h-full" aria-label="Home — Resume">
      <div className="w-full h-full overflow-y-auto overflow-x-hidden overscroll-contain flex flex-col items-center pt-5 px-4 pb-[calc(var(--dock-h)+var(--dock-pb)+20px)] sm:pt-8 sm:px-6 sm:pb-[calc(var(--dock-h)+var(--dock-pb)+24px)]">
        <div className="blur-card w-full max-w-[720px] p-6 sm:p-10 flex flex-col gap-7 sm:gap-10 text-[rgba(255,255,255,0.95)]">
          <ProfileHeader profile={profile} />
          <SkillsGrid skills={skills} />
          <ExperienceTimeline experiences={experiences} />
          <EducationSection education={education} />
          <CertificationsSection certifications={certifications} />
        </div>
      </div>
    </main>
  );
}
