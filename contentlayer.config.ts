import { defineDocumentType, makeSource } from 'contentlayer2/source-files';

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    location: {
      type: 'string',
      required: true,
    },
    year: {
      type: 'number',
      required: true,
    },
    status: {
      type: 'enum',
      options: ['Built', 'Under Construction', 'Concept'],
      required: true,
    },
    program: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
    size: {
      type: 'string',
      required: true,
    },
    cover: {
      type: 'json',
      required: true,
    },
    gallery: {
      type: 'json',
    },
    facts: {
      type: 'json',
    },
    map_image: {
      type: 'string',
    },
    related: {
      type: 'list',
      of: { type: 'string' },
    },
    tags: {
      type: 'list',
      of: { type: 'string' },
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/projects/${project.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project],
}); 