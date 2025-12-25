import {defineField, defineType} from 'sanity'
import {ImageIcon} from '@sanity/icons'

export const img = defineType({
  name: 'img',
  type: 'document',

  icon: ImageIcon,
  fields: [
    defineField({
      name: 'img_selected',
      type: 'image',
      options: {
        hotspot: true,
      },
      title: 'Картинка',
    }),
  ],
  preview: {
    select: {
      image: 'img_selected',
    },

    prepare(selection) {
      const {image} = selection
      return {
        title: 'Картинка',
        media: image,
      }
    },
  },
})
