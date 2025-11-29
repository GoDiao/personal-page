import type { LucideIcon } from "lucide-react";

export interface Metric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  title: string;
  points: string[];
  metrics?: Metric[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  department: string;
  date: string;
  projects: Project[];
  tech?: string[];
}

export interface Achievement {
  title: string;
  rank: string;
  date: string;
  description: string;
  tags: string[];
}

export interface SkillCategory {
  category: string;
  icon: LucideIcon;
  items: string[];
}

export interface ResearchInterest {
  title: string;
  description: string;
  icon: LucideIcon;
}