import {defineField, defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export const banner = defineType({
  name: 'banner',
  title: 'Баннер',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'banner_content_ua',
      title: 'Заголовок',
      type: 'object',
      group: 'ua',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        }),
        defineField({
          name: 'semiTitle',
          title: 'Підзаголовок',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'banner_content_en',
      title: 'Заголовок',
      type: 'object',
      group: 'en',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        }),
        defineField({
          name: 'semiTitle',
          title: 'Підзаголовок',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'banner_content_de',
      title: 'Заголовок',
      type: 'object',
      group: 'de',
      fields: [
        defineField({
          name: 'title',
          title: 'Заголовок',
          type: 'string',
        }),
        defineField({
          name: 'semiTitle',
          title: 'Підзаголовок',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'Icon',
      title: 'Іконка',
      type: 'reference',
      to: {type: 'icons'},
    }),
  ],
  preview: {
    select: {
      title: 'title_ua',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'Баннер',
      }
    },
  },
})
