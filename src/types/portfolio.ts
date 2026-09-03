export interface JourneyMilestone {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'education' | 'academic' | 'focus';
  iconName: string;
  tags: string[];
  active?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  levelTag: string; // e.g. "Core Language", "Modern Web", "Relational DB"
  description: string;
  relatedProjects: string[];
  category: 'programming' | 'web' | 'database' | 'tools';
  color: string;
  icon: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  featured: boolean;
  problem: string;
  solution: string;
  technologies: string[];
  howItWorks: string[];
  futureImprovements: string[];
  flowSteps?: { step: string; title: string; description: string; icon: string }[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface LearningItem {
  name: string;
  status: 'Building' | 'Practicing' | 'Exploring' | 'Learning';
  focus: string;
  color: string;
  icon: string;
}

export interface StrengthItem {
  name: string;
  badge: string;
  description: string;
  icon: string;
  isCore: boolean;
}

export interface CertificationItem {
  title: string;
  field: string;
  skills: string[];
  badgeColor: string;
  icon: string;
}
