const ADD_VOTATION_MUTATION = `
  mutation Mutation($id: Int!, $vote: Boolean!) {
    addVotation(id: $id, vote: $vote) {
      success
    }
  }
`

export { ADD_VOTATION_MUTATION }