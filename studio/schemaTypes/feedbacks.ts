import {defineField, defineType} from 'sanity'
import {FeedbackIcon} from '@sanity/icons'

export const feedbacks = defineType({
  name: 'feedback',
  title: 'Відгуки',
  type: 'document',
  groups: [
    {name: 'ua', title: 'Українська'},
    {name: 'en', title: 'English'},
    {name: 'de', title: 'Deutsch'},
  ],
  icon: FeedbackIcon,
  fields: [
    defineField({
      name: 'feedback_ua',
      title: 'Запитання',
      type: 'object',
      group: 'ua',
      fields: [
        defineField({
          name: 'text',
          title: 'Текст',
          type: 'text',
        }),

        defineField({
          name: 'name',
          title: "Ім'я",
          type: 'string',
        }),
        defineField({
          name: 'job',
          title: 'Посада',
          type: 'string',
        }),
      ],
    }),

    defineField({
      name: 'feedback_en',
      title: 'Question',
      type: 'object',
      group: 'en',
      fields: [
        defineField({
          name: 'question',
          title: 'Question',
          type: 'string',
        }),

        defineField({
          name: 'answer',
          title: 'Answer',
          type: 'text',
        }),
      ],
    }),

    defineField({
      name: 'feedback_de',
      title: 'Frage',
      type: 'object',
      group: 'de',
      fields: [
        defineField({
          name: 'question',
          title: 'Frage',
          type: 'string',
        }),

        defineField({
          name: 'answer',
          title: 'Antwort',
          type: 'text',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      question: 'question_ua',
    },
    prepare(selection) {
      const {question} = selection
      return {
        title: question,
      }
    },
  },
})
