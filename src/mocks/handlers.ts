import { graphql } from 'msw'

import { data } from './data'

export const handlers = [

  graphql.query('CharactersQuery', (_req, res, ctx) => res(
    ctx.data({ data })
  )),

  graphql.mutation('VoteMutation', (_req, res, ctx) => res(
    ctx.data({ success: true })
  ))

]