export type TabType = 'WORKS' | 'PROJECTS';

export type WorkCategory = 'ALL' | 'PEOPLE' | 'DOCUMENTARY';

export interface PhotoExif {
  camera?: string;
  lens?: string;
  filmStock?: string;
  location?: string;
  year?: string;
  format?: string;
}

export interface WorkItem {
  id: string;
  title: string;
  indexNumber: string;
  category: WorkCategory;
  imageUrl: string;
  fallbackUrl?: string;
  aspectRatio: string;
  year: string;
  location: string;
  client?: string;
  description?: string;
  exif?: PhotoExif;
  projectId?: string;
  hasBorder?: boolean;
}

export interface ProjectItem {
  id: string;
  indexNumber: string;
  title: string;
  subtitle?: string;
  coverImage?: string;
  year?: string;
  location?: string;
  client?: string;
  statement?: string;
  heyzineUrl?: string;
  photos?: {
    url: string;
    caption: string;
    aspectRatio?: string;
    exif?: string;
  }[];
  tags?: string[];
}

export interface ArtistProfile {
  name: string;
  title: string;
  bio: string;
  representation: {
    agency: string;
    city: string;
    email: string;
  };
  contact: {
    directEmail: string;
    phone: string;
    instagram: string;
    location: string;
  };
  selectedClients: string[];
  exhibitions: {
    year: string;
    title: string;
    venue: string;
    location: string;
  }[];
}
