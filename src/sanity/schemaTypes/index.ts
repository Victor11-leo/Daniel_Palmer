import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import homePage from './pages/homePage'
import * as blocks from './blocks'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType, categoryType, postType, authorType,
    homePage,...Object.values(blocks)
  ],
}
