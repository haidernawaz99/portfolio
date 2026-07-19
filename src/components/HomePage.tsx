import { ProfileHeader } from "./ProfileHeader"
import { SkillsGrid } from "./SkillsGrid"
import { ExperienceTimeline } from "./ExperienceTimeline"
import { EducationSection } from "./EducationSection"
import { CertificationsSection } from "./CertificationsSection"
import type {
  Profile,
  Skill,
  Experience,
  Education,
  Certification,
} from "@/types"

interface HomePageProps {
  profile: Profile
  skills: Skill[]
  experiences: Experience[]
  education: Education[]
  certifications: Certification[]
}

export function HomePage({
  profile,
  skills,
  experiences,
  education,
  certifications,
}: HomePageProps) {
  return (
    <main
      id="home-page"
      className="page h-full w-full"
      aria-label="Home — Resume"
    >
      <div className="flex h-full w-full flex-col items-center overflow-x-hidden overflow-y-auto overscroll-contain px-4 pt-5 pb-[calc(var(--dock-h)+var(--dock-pb)+20px)] sm:px-6 sm:pt-8 sm:pb-[calc(var(--dock-h)+var(--dock-pb)+24px)]">
        <div className="blur-card flex w-full max-w-[720px] flex-col gap-7 p-6 text-[rgba(255,255,255,0.95)] sm:gap-10 sm:p-10">
          <ProfileHeader profile={profile} />
          <SkillsGrid skills={skills} />
          <ExperienceTimeline experiences={experiences} />
          <EducationSection education={education} />
          <CertificationsSection certifications={certifications} />
        </div>
      </div>
    </main>
  )
}
