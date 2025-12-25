import {defineField, defineType} from 'sanity'
import {PresentationIcon} from '@sanity/icons'

export const hero = defineType({
  name: 'hero',
  title: 'Початкова секція',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
    {name: 'link', title: 'Посилання'},
  ],
  icon: PresentationIcon,
  fields: [
    defineField({
      name: 'title_ua',
      title: 'Заголовок',
      type: 'string',
      group: 'ua',
    }),
    defineField({
      name: 'title_en',
      title: 'Title',
      type: 'string',
      group: 'en',
    }),
    defineField({
      name: 'title_de',
      title: 'Titel',
      type: 'string',
      group: 'de',
    }),
    defineField({
      name: 'link',
      title: 'Посилання',
      type: 'object',
      group: 'link',
      fields: [
        {name: 'title_ua', type: 'string', title: 'Заголовок'},
        {name: 'title_en', type: 'string', title: 'Title'},
        {name: 'title_de', type: 'string', title: 'Titel'},
        {name: 'link', type: 'url', title: 'URL'},
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title_ua',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: title,
      }
    },
  },
})
