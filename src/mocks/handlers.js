import { graphql } from 'msw'

const handlers = [
  // first query
  graphql.query('query', null)
]

export default handlers
