import { graphql } from 'msw'

import { data } from './data'

export const handlers = [

  graphql.query('CHARACTER_QUERY', (_req, res, ctx) => res(
    ctx.data({ data })
  )),

  graphql.mutation('ADD_VOTATION_MUTATION', (_req, res, ctx) => res(
    ctx.data({
      data: {
        addVotation: { "success": true }
      }
    })
  ))

]