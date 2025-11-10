// JSON fallback for projects if Contentlayer is not available
// This can be replaced with a headless CMS like Sanity later

export interface ProjectData {
  title: string;
  slug: string;
  location: string;
  year: number;
  status: 'Built' | 'Under Construction' | 'Concept';
  program: string[];
  size: string;
  cover: {
    render: string;
    reality: string;
  };
  gallery: Array<{
    type: 'image' | 'video';
    src: string;
    alt?: string;
  }>;
  facts: {
    client?: string;
    collaborators?: string[];
    structural_system?: string;
    materials?: string[];
    awards?: string[];
  };
  map_image?: string;
  related?: string[];
  tags: string[];
  body?: string;
}

// This is a fallback - in production, projects come from Contentlayer MDX
export const fallbackProjects: ProjectData[] = []; 