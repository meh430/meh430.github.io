import React from "react";
import { DataRepo } from "./DataRepo";
import { QuoteRepo } from "./QuoteRepo";

export interface ImageItem {
  image: string;
}

export interface Icon extends ImageItem {
  isExternal: Boolean;
  iconColor?: string;
}

export interface ImageLink {
  url: string;
  icon: Icon;
}

export interface Profile extends ImageItem {
  bio: string;
  contactLinks: ImageLink[];
}

export interface Project {
  projectName: string;
  description: string;
  projectLink: string;
  technologies: string;
  features: string[];
  images: string[];
}

export interface IconText {
  text: string;
  icon: Icon;
}

export interface SectionItem {
  iconText: IconText;
  route: string;
}

export interface Education extends ImageItem {
  schoolName: string;
  period: string;
  details: string;
}

export interface Quote {
  author: string;
  quote: string;
}

export interface PropsItem {
  dataRepo: DataRepo;
  quoteRepo?: QuoteRepo;
  children?: React.ReactNode;
}
