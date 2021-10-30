import './_card.sass'
import Props from './card.props'
import { VoteForm, Info } from '../../molecules'
import { GaugeBar } from '../../atoms'

import { useMutation } from 'urql'
import { ADD_VOTATION_MUTATION } from '../../../graphql'

import { useContext } from 'react'
import { CharacterContext } from '../../../context/CharacterProvider'


const Card = ({
  id,
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes: { positive, negative }
}: Props) => {
  const { updateCharacterList } = useContext(CharacterContext)
  const [_, updateVote] = useMutation(ADD_VOTATION_MUTATION)

  const handleSendVote = async (vote: boolean): Promise<void> => {
    const { data } = await updateVote({ id, vote })
    if (data.addVotation.success) updateCharacterList(id, vote)
  }

  return (
    <div role="menuitem" className="card">
      <img
        src={picture}
        className="card__picture"
        alt="celebrity picture"
      />

      <Info
        name={name}
        description={description}
        category={category}
        lastUpdated={lastUpdated}
        votes={{ positive, negative }}
      />

      <VoteForm
        onSubmit={handleSendVote}
        className=""
        label="form vote"
      />

      <GaugeBar
        positive={positive}
        negative={negative}
      />
    </div>
  )
}

export { Card }