export type Theme = 'dark' | 'light';

export type Language = 'pt' | 'en';

export type ProjectCategory = 'all' | 'fullstack' | 'frontend' | 'backend';

export interface LocalizedString {
  pt: string;
  en: string;
}

export interface LocalizedArray {
  pt: string[];
  en: string[];
}

export interface Project {
  id: string;
  title: LocalizedString;
  shortDescription: LocalizedString;
  fullDescription: LocalizedString;
  category: 'fullstack' | 'frontend' | 'backend';
  featured: boolean;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: LocalizedArray;
  stats?: {
    label: LocalizedString;
    value: string;
  }[];
}

export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'architecture';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: 'Advanced' | 'Senior' | 'Intermediate';
  icon: string;
  featured?: boolean;
  yearsOfExperience: number;
}

export interface ExperienceItem {
  id: string;
  period: LocalizedString;
  role: LocalizedString;
  company: string;
  location: LocalizedString;
  description: LocalizedString;
  achievements: LocalizedArray;
  technologies: string[];
  isCurrent?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface GeolocationResponse {
  country_code?: string;
  country?: string;
  city?: string;
}
