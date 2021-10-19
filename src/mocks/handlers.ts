import { graphql } from 'msw'

import { data } from './data'

export const handlers = [

  graphql.query('CharactersQuery', (_req, res, ctx) => {
    return res(
      ctx.data({ data })
    )
  })

]