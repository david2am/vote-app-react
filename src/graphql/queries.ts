const CHARACTER_QUERY = `
  query Query {
    allCharacters {
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
  }
`

export { CHARACTER_QUERY }