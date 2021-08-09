import { DataRepo } from "./DataRepo";
import { Profile, Project, IconText, Education, SectionItem } from "./Models";
import { data } from "./Data";

export class DataRepoImpl implements DataRepo {
  getHeading(): string {
    return data.heading;
  }

  getProfile(): Profile {
    return {
      bio: data.profile.bio,
      image: data.profile.image,
      contactLinks: data.profile.contactsLink.map((link) => ({
        url: link.url,
        icon: {
          image: link.image,
          isExternal: this.isIconExternal(link.iconColor),
          iconColor: link.iconColor,
        },
      })),
    };
  }

  getProjects(): Project[] {
    return data.projects.map((project) => ({
      projectName: project.title,
      description: project.brief,
      projectLink: project.repo,
      technologies: project.tech,
      features: project.features,
      images: project.images,
    }));
  }

  getSkills(): IconText[] {
    return data.skills.map((skill) => ({
      text: skill.skill,
      icon: {
        image: skill.icon,
        isExternal: this.isIconExternal(skill.color),
        iconColor: skill.color,
      },
    }));
  }

  getEducation(): Education[] {
    return data.education.map((education) => ({
      schoolName: education.title,
      period: education.period,
      details: education.details,
      image: education.image,
    }));
  }

  getSections(): SectionItem[] {
    return data.sections.map((section) => {
      const iconText = {
        text: section.section,
        icon: {
          image: section.icon,
          isExternal: false,
          iconColor: section.color,
        },
      };
      return { iconText: iconText, route: section.route };
    });
  }

  private isIconExternal(color?: string): Boolean {
    return color ? false : true;
  }
}
