export function cn(...inputs: (string | undefined | null | false)[]) {
  return inputs.filter(Boolean).join(' ');
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function formatYear(year: number): string {
  return year.toString();
}

export function getUniqueYears(projects: Array<{ year: number }>): number[] {
  const years = projects.map((p) => p.year);
  return Array.from(new Set(years)).sort((a, b) => b - a);
}

export function getUniqueTags(projects: Array<{ tags: string[] }>): string[] {
  const tags = projects.flatMap((p) => p.tags);
  return Array.from(new Set(tags)).sort();
} 