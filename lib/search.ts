export interface ProjectSearchParams {
  query?: string;
  tags?: string[];
  status?: string;
  yearMin?: number;
  yearMax?: number;
}

export interface SearchableProject {
  title: string;
  location: string;
  tags: string[];
  status: string;
  year: number;
}

export function searchProjects<T extends SearchableProject>(
  projects: T[],
  params: ProjectSearchParams
): T[] {
  let filtered = projects;

  // Text search
  if (params.query && params.query.trim()) {
    const query = params.query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(query) ||
        p.location.toLowerCase().includes(query) ||
        p.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  }

  // Tag filter
  if (params.tags && params.tags.length > 0) {
    filtered = filtered.filter((p) =>
      params.tags!.some((tag) => p.tags.includes(tag))
    );
  }

  // Status filter
  if (params.status) {
    filtered = filtered.filter((p) => p.status === params.status);
  }

  // Year range filter
  if (params.yearMin !== undefined) {
    filtered = filtered.filter((p) => p.year >= params.yearMin!);
  }
  if (params.yearMax !== undefined) {
    filtered = filtered.filter((p) => p.year <= params.yearMax!);
  }

  return filtered;
} 