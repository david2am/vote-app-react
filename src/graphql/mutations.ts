const VoteMutation = `
  mutation ($id: ID!, $vote: Boolean) {
    VoteMutation (id: $id, vote: $vote) {
      id
      vote
    }
  }
`

export { VoteMutation }