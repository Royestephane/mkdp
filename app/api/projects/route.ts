import { allProjects } from 'contentlayer/generated';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  
  const page = Number(searchParams.get('page')) || 1;
  const limit = Number(searchParams.get('limit')) || 10;
  const sort = searchParams.get('sort') || 'year-desc';

  // Sort projects
  let sortedProjects = [...allProjects];
  switch (sort) {
    case 'year-desc':
      sortedProjects.sort((a, b) => b.year - a.year);
      break;
    case 'year-asc':
      sortedProjects.sort((a, b) => a.year - b.year);
      break;
    case 'title':
      sortedProjects.sort((a, b) => a.title.localeCompare(b.title));
      break;
  }

  // Paginate
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProjects = sortedProjects.slice(start, end);

  return NextResponse.json({
    projects: paginatedProjects.map((p) => ({
      title: p.title,
      slug: p.slug,
      location: p.location,
      year: p.year,
      status: p.status,
      program: p.program,
      size: p.size,
      tags: p.tags,
      cover: p.cover,
    })),
    pagination: {
      page,
      limit,
      total: sortedProjects.length,
      totalPages: Math.ceil(sortedProjects.length / limit),
    },
  });
}

export const runtime = 'edge'; 