import {defineField, defineType} from 'sanity'
import {BugIcon} from '@sanity/icons'

export const problems = defineType({
  name: 'problems', // Один тип
  title: 'Проблема',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: BugIcon,
  fields: [
    defineField({
      name: 'problem_content_ua',
      title: 'Зміст проблеми',
      type: 'object',
      group: 'ua',
      fields: [
        {name: 'title', type: 'string', title: 'Заголовок'},
        {name: 'desc', type: 'text', title: 'Текст'},
        {
          name: 'Icon',
          title: 'Іконка',
          type: 'reference',
          to: {type: 'icons'},
        },
      ],
    }),
    defineField({
      name: 'solution_content_ua',
      title: 'Вирішення проблеми',
      type: 'object',
      group: 'ua',
      fields: [
        {name: 'title', type: 'string', title: 'Заголовок'},
        {name: 'desc', type: 'text', title: 'Текст'},
        {
          name: 'Icon',
          title: 'Іконка',
          type: 'reference',
          to: {type: 'icons'},
        },
      ],
    }),
    defineField({
      name: 'problem_content_en',
      title: 'Зміст проблеми',
      type: 'object',
      group: 'en',
      fields: [
        {name: 'title', type: 'string', title: 'Заголовок'},
        {name: 'desc', type: 'text', title: 'Текст'},
        {
          name: 'Icon',
          title: 'Іконка',
          type: 'reference',
          to: {type: 'icons'},
        },
      ],
    }),
    defineField({
      name: 'solution_content_en',
      title: 'Вирішення проблеми',
      type: 'object',
      group: 'en',
      fields: [
        {name: 'title', type: 'string', title: 'Заголовок'},
        {name: 'desc', type: 'text', title: 'Текст'},
        {
          name: 'Icon',
          title: 'Іконка',
          type: 'reference',
          to: {type: 'icons'},
        },
      ],
    }),
    defineField({
      name: 'problem_content_de',
      title: 'Зміст проблеми',
      type: 'object',
      group: 'de',
      fields: [
        {name: 'title', type: 'string', title: 'Заголовок'},
        {name: 'desc', type: 'text', title: 'Текст'},
        {
          name: 'Icon',
          title: 'Іконка',
          type: 'reference',
          to: {type: 'icons'},
        },
      ],
    }),
    defineField({
      name: 'solution_content_de',
      title: 'Вирішення проблеми',
      type: 'object',
      group: 'de',
      fields: [
        {name: 'title', type: 'string', title: 'Заголовок'},
        {name: 'desc', type: 'text', title: 'Текст'},
        {
          name: 'Icon',
          title: 'Іконка',
          type: 'reference',
          to: {type: 'icons'},
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'problem_content_ua.title',
    },

    prepare(selection) {
      const {title} = selection
      return {
        title: title || 'Нова проблема (пусто)',
      }
    },
  },
})
