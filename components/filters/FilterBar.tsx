'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { SearchInput } from '@/components/filters/SearchInput';

interface FilterBarProps {
  availableTags: string[];
  availableStatuses: string[];
  availableYears: number[];
}

export function FilterBar({
  availableTags,
  availableStatuses,
  availableYears,
}: FilterBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get('query') || '';
  const selectedTags = searchParams.getAll('tag');
  const selectedStatus = searchParams.get('status') || '';

  const updateURL = (updates: Record<string, string | string[] | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      params.delete(key);
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.set(key, value);
        }
      }
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  const handleSearchChange = (value: string) => {
    updateURL({ query: value || null });
  };

  const toggleTag = (tag: string) => {
    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((t) => t !== tag)
      : [...selectedTags, tag];
    updateURL({ tag: newTags.length > 0 ? newTags : null });
  };

  const setStatus = (status: string) => {
    updateURL({ status: status === selectedStatus ? null : status });
  };

  const clearFilters = () => {
    router.push('/projects');
  };

  const hasActiveFilters = query || selectedTags.length > 0 || selectedStatus;

  return (
    <div className="space-y-6">
      {/* Search */}
      <SearchInput value={query} onChange={handleSearchChange} />

      {/* Filters */}
      <div className="space-y-4">
        {/* Tags */}
        {availableTags.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-charcoal/60 mb-2">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => (
                <Button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  variant={selectedTags.includes(tag) ? 'primary' : 'secondary'}
                  size="sm"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Status */}
        {availableStatuses.length > 0 && (
          <div>
            <h3 className="text-sm font-medium text-charcoal/60 mb-2">Status</h3>
            <div className="flex flex-wrap gap-2">
              {availableStatuses.map((status) => (
                <Button
                  key={status}
                  onClick={() => setStatus(status)}
                  variant={selectedStatus === status ? 'primary' : 'secondary'}
                  size="sm"
                >
                  {status}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div>
            <Button onClick={clearFilters} variant="ghost" size="sm">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
} 