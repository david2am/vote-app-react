import { graphql } from 'msw'

export const handlers = [
  // first query
  graphql.query('query', null)
]