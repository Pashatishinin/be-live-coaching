import {defineField, defineType} from 'sanity'
import {RocketIcon} from '@sanity/icons'

export const howItWorks = defineType({
  name: 'howItWorks',
  title: 'Як це працює',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: RocketIcon,
  fields: [
    defineField({
      name: 'howItWorks_ua',
      title: 'Опис',
      type: 'array',
      group: 'ua',
      of: [
        defineField({
          name: 'desc',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),

    defineField({
      name: 'howItWorks_en',
      title: 'Опис',
      type: 'array',
      group: 'en',
      of: [
        defineField({
          name: 'desc',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'howItWorks_de',
      title: 'Опис',
      type: 'array',
      group: 'de',
      of: [
        defineField({
          name: 'desc',
          title: 'Description',
          type: 'text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      howItWorks: 'howItWorks_ua',
    },
    prepare(selection) {
      const {howItWorks} = selection
      return {
        title: howItWorks,
      }
    },
  },
})
