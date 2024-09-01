import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Post',
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'project_type',
      title: 'Project Type',
      type: 'string',
      description: 'Select the type of project',
      options: {
        list: [
          { title: 'Personal', value: 'personal' },
          { title: 'Client', value: 'client' },
          { title: 'Collaborate', value: 'collaborate' },
          { title: 'Other', value: 'other' },
        ],
      },
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
      name: 'iframe_status',
      title: 'Iframe Status',
      type: 'boolean',
      description: 'Does project has iframe? Switch ON for Yes, OFF for No'
    }),
    defineField({
      name: 'iframe_height',
      title: 'Iframe Height',
      type: 'number',
      description: 'Recommended 600'
    }),
    defineField({
      name: 'iframe_width',
      title: 'Iframe Width',
      type: 'number',
      description: 'Recommended 100 (%) . Dont add the %'
    }),
    defineField({
      name: 'iframe_url',
      title: 'Iframe URL',
      type: 'url',
    }),
    defineField({
      name: 'iframe_src',
      title: 'Iframe Src',
      type: 'string',
    }),

    // Story content
    defineField({
      name: 'published_at',
      title: 'Published at',
      type: 'datetime',
    }),

    defineField({
      name: 'stories',
      title: 'Stories',
      description: 'Article of the project',
      type: 'array',
      of: [
        defineType({
          name: 'story',
          title: 'Story',
          type: 'object',
          fields: [
            defineField({
              name: 'tab',
              title: 'Tab',
              type: 'string',
              description: 'Heading of story/article section. eg. Introduction, Conclusion',
            }),
            defineField({
              name: 'content',
              title: 'Content',
              type: 'blockContent',
              description: 'Type the content of your article/story'
            }),
          ],
        }),
      ],
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
