export interface ExperienceProps {
  title: string;
  organization: string;
  location?: string;
  startMonth: string;
  endMonth?: string;
  current?: boolean;
  description?: string;
  achievements?: string[];
  skills?: string[];
  role?: string;
  url?: string;
}

export interface ProjectProps {
  title: string;
  startMonth: string;
  endMonth?: string;
  techStack: string[];
  description: string;
  organization?: string;
  url?: string;
  image?: string;
}

export interface CertificationProps {
  title: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}
