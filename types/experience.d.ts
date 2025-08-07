import { ReactNode } from "react";

export type ExperienceEntryType = {
  date: string;
  role: string;
  companyUrl: string;
  company: string;
  icon: ReactNode;
  description?: string;
  roles: string[];
  skills: string[];
};
