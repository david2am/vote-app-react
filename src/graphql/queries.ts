const CharactersQuery = `
  query CharactersQuery {
    id
    name
    description
    category
    picture
    lastUpdated
    votes {
      positive
      negative
    }
  }
`

export { CharactersQuery }