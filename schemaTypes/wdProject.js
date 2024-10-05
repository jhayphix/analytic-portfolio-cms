import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'wdProject',
  title: 'WebDev Project',
  type: 'document',
  fields: [
    // Title and text
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'project_types',
      title: 'Web Dev Project Types',
      type: 'array',
      of: [{type: 'reference', to: {type: 'wdProjectType'}}],
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    }),

    // Images and Graphics
    defineField({
      name: 'main_image',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'project_url',
      title: 'Project Url',
      type: 'string',
    }),

    // Story content
    defineField({
      name: 'published_at',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
