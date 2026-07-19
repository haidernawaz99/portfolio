import type React from "react"

// ─── Icon ────────────────────────────────────────────────────────────────────

/**
 * Minimal icon component interface compatible with both Lucide icons
 * and custom SVG icon components (e.g. LinkedinIcon).
 */
export type IconComponent = React.ComponentType<{
  size?: number | string
  color?: string
  className?: string
  "aria-hidden"?: boolean | "true" | "false"
}>

// ─── Profile ─────────────────────────────────────────────────────────────────

export interface Profile {
  name: string
  title: string
  location: string
  email: string
  linkedIn: string
  summary: string
}

// ─── Skills ──────────────────────────────────────────────────────────────────

export type SkillCategory =
  "language" | "framework" | "tool" | "database" | "cloud"

export interface Skill {
  name: string
  category: SkillCategory
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface Experience {
  company: string
  role: string
  location: string
  startDate: string
  endDate: string
  description?: string
  bullets: string[]
  url?: string
}

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  name: string
  techStack: string[]
  dateRange: string
  description: string
  bullets: string[]
  url?: string
  downloads?: string
}

// ─── Education ────────────────────────────────────────────────────────────────

export type GradeType = "cgpa" | "grade"

export interface Education {
  degree: string
  institution: string
  location: string
  dateRange: string
  grade: string
  gradeType: GradeType
  honour?: string
}

// ─── Certifications ───────────────────────────────────────────────────────────

export interface Certification {
  name: string
  issuer: string
  year: number
  description: string
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export type PageId = "home" | "projects"
export type DockItemId = PageId | "linkedin"

// Type guard to narrow DockItemId to PageId
export function isPageId(id: DockItemId): id is PageId {
  return id === "home" || id === "projects"
}

export interface DockItemConfig {
  id: DockItemId
  label: string
  icon: IconComponent
  url?: string
}
