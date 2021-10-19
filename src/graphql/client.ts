import { createClient } from 'urql'

const url = 'http://localhost:3000/graphql'

const client = createClient({
  url,
  fetchOptions: () => ( { headers: {} } )
})

export { client }