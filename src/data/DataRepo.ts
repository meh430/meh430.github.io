import { Education, IconText, Profile, Project, SectionItem } from "./Models";

export interface DataRepo {
  getHeading(): string;
  getProfile(): Profile;
  getProjects(): Project[];
  getSkills(): IconText[];
  getEducation(): Education[];
  getSections(): SectionItem[];
}
