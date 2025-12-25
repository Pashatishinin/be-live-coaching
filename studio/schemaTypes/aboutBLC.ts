import {defineField, defineType} from 'sanity'
import {BulbFilledIcon} from '@sanity/icons'

export const aboutBLC = defineType({
  name: 'aboutBLC',
  title: 'Про Be Live Coaching',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: BulbFilledIcon,
  fields: [
    defineField({
      name: 'guide_ua',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'desc',
          title: 'Description',
          type: 'array',
          validation: (Rule) => Rule.max(4).error('Можна додати не більше 4 описів'),
          of: [
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.max(450).error('Текст не може перевищувати 450 символів'),
            }),
          ],
        }),
      ],
      group: 'ua',
    }),

    defineField({
      name: 'guide_en',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),

        defineField({
          name: 'desc',
          title: 'Description',
          type: 'array',
          validation: (Rule) => Rule.max(4).error('Можна додати не більше 4 описів'),
          of: [
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.max(450).error('Текст не може перевищувати 450 символів'),
            }),
          ],
        }),
      ],
      group: 'en',
    }),
    defineField({
      name: 'guide_de',
      title: 'Description',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),

        defineField({
          name: 'desc',
          title: 'Description',
          type: 'array',
          validation: (Rule) => Rule.max(4).error('Можна додати не більше 4 описів'),
          of: [
            defineField({
              name: 'desc',
              title: 'Description',
              type: 'text',
              validation: (Rule) => Rule.max(450).error('Текст не може перевищувати 450 символів'),
            }),
          ],
        }),
      ],
      group: 'de',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Про Be Live Coaching',
      }
    },
  },
})
