import type { Skill, SkillCategory } from '@/types';

interface SkillsGridProps {
  skills: Skill[];
}

const CATEGORY_LABELS: Record<SkillCategory, string> = {
  language: 'Languages',
  framework: 'Frameworks & Libraries',
  database: 'Databases',
  cloud: 'Cloud & DevOps',
  tool: 'Tools',
};

const CATEGORY_ORDER: SkillCategory[] = ['language', 'framework', 'database', 'cloud', 'tool'];

export function SkillsGrid({ skills }: SkillsGridProps) {
  const grouped = CATEGORY_ORDER.reduce<Record<SkillCategory, Skill[]>>(
    (acc, cat) => {
      acc[cat] = skills.filter((s) => s.category === cat);
      return acc;
    },
    { language: [], framework: [], database: [], cloud: [], tool: [] },
  );

  return (
    <section className="flex flex-col gap-4" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase text-[var(--violet)] mb-5 pb-2 border-b border-[rgba(255,255,255,0.12)]">
        Technologies &amp; Skills
      </h2>
      {CATEGORY_ORDER.map((category) => {
        const categorySkills = grouped[category];
        if (categorySkills.length === 0) return null;

        // Tailwind mappings for specific category colours
        const badgeClasses: Record<SkillCategory, string> = {
          language: 'bg-[rgba(82,39,255,0.15)] border-[rgba(82,39,255,0.4)] text-[#b4a8ff]',
          framework: 'bg-[rgba(255,159,252,0.1)] border-[rgba(255,159,252,0.35)] text-[#ffc8fd]',
          database: 'bg-[rgba(34,197,94,0.1)] border-[rgba(34,197,94,0.3)] text-[#86efac]',
          cloud: 'bg-[rgba(251,191,36,0.1)] border-[rgba(251,191,36,0.3)] text-[#fde68a]',
          tool: 'bg-[rgba(255,255,255,0.06)] border-[rgba(255,255,255,0.15)] text-[rgba(255,255,255,0.65)]',
        };

        return (
          <div key={category} className="flex flex-col gap-2">
            <h3 className="text-[0.72rem] text-[rgba(255,255,255,0.4)] font-medium tracking-[0.05em] m-0">
              {CATEGORY_LABELS[category]}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {categorySkills.map((skill) => (
                <span
                  key={skill.name}
                  className={`inline-flex items-center px-2.5 py-1 rounded-full text-[0.75rem] font-medium border transition-all duration-150 ease-in-out hover:-translate-y-[1px] hover:opacity-90 ${badgeClasses[category]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
