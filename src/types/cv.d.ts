export interface ExperienceItemProps {
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

export interface ProjectItemProps {
  title: string;
  startMonth: string;
  endMonth?: string;
  techStack: string[];
  description: string;
  organization?: string;
  url?: string;
  image?: string;
}

export interface CertificationItemProps {
  title: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}
