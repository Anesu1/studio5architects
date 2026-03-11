import { type SchemaTypeDefinition } from 'sanity'

import { authorType } from './author'
import { categoryType } from './category'
import { postType } from './post'
import { projectType } from './project'
import { serviceType } from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, authorType, categoryType, projectType, serviceType],
}
