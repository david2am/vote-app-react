import { createClient } from 'urql'

const url = {
  local: {
    SERVER: 'http://localhost:4000/graphql',
    MSW: 'http://localhost:3000/graphql'
  }
}

const client = createClient({
  url: url.local.SERVER,
  fetchOptions: () => ( { headers: {} } )
})

export { client }