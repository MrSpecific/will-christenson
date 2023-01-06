import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {media} from 'sanity-plugin-media'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Will Christenson',

  projectId: 'w2gkxxs8',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), media()],

  schema: {
    types: schemaTypes,
  },
})
