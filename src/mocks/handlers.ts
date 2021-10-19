import { graphql } from 'msw'

import { data } from './data'

export const handlers = [

  graphql.query('charactersQuery', (req, res, ctx) => {
    return res(
      ctx.data({ data })
    )
  })

]