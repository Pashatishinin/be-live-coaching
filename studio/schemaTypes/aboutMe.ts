import {defineField, defineType} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const aboutMe = defineType({
  name: 'aboutMe',
  title: 'Про Мене',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: UserIcon,
  fields: [
    defineField({
      name: 'img_selected',
      type: 'image',
      options: {
        hotspot: true,
      },
      title: 'Картинка',
    }),
    defineField({
      name: 'title_ua',
      title: 'Заголовок',
      type: 'array',
      group: 'ua',
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
    defineField({
      name: 'title_en',
      title: 'Заголовок',
      type: 'array',
      group: 'en',
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
    defineField({
      name: 'title_de',
      title: 'Заголовок',
      type: 'array',
      group: 'de',
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
  preview: {
    select: {
      title: 'title_ua',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: 'Про Коуча',
      }
    },
  },
})
