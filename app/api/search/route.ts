import { allProjects } from 'contentlayer/generated';
import { searchProjects } from '@/lib/search';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  const query = searchParams.get('query') || '';
  const tags = searchParams.getAll('tag');
  const status = searchParams.get('status') || undefined;
  const yearMin = searchParams.get('yearMin') ? Number(searchParams.get('yearMin')) : undefined;
  const yearMax = searchParams.get('yearMax') ? Number(searchParams.get('yearMax')) : undefined;

  const filteredProjects = searchProjects(allProjects, {
    query,
    tags: tags.length > 0 ? tags : undefined,
    status,
    yearMin,
    yearMax,
  });

  return NextResponse.json({
    projects: filteredProjects.map((p) => ({
      title: p.title,
      slug: p.slug,
      location: p.location,
      year: p.year,
      status: p.status,
      tags: p.tags,
      cover: p.cover,
    })),
    total: filteredProjects.length,
  });
}

export const runtime = 'edge'; 