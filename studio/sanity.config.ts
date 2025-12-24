import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'

export default defineConfig({
  name: 'default',
  title: 'be-live-coaching',

  projectId: 'x03vy68c',
  dataset: 'production',

  plugins: [structureTool({structure}), structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
