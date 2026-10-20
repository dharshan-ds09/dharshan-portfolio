export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: 'cybersecurity' | 'software' | 'tools';
  technologies: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  status: 'In Progress' | 'Completed' | 'Concept' | 'Placeholder';
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string; // e.g. "Proficient", "Familiar", "Exploring"
    badge?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  status: string;
  location: string;
  grade?: string;
  highlights: string[];
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: 'Completed' | 'In Progress' | 'Planned';
  date?: string;
  verificationUrl?: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  twitter?: string;
  email: string;
  tryhackme?: string;
  hackthebox?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    subRole: string;
    bio: string;
    aboutParagraphs: string[];
    location: string;
    availability: string;
    status: string;
    resumeFileName: string;
  };
  socials: SocialLinks;
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: SkillCategory[];
  projects: Project[];
}
