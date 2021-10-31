import './_card.sass'
import Props from './card.props'
import { VoteForm, Info } from '../../molecules'
import { GaugeBar } from '../../atoms'

import { useMutation } from 'urql'
import { ADD_VOTATION_MUTATION } from '../../../graphql'

import { useContext } from 'react'
import { CharacterContext } from '../../../context'

import thumb_up from '../../../assets/thumb_up.svg'
import thumb_down from '../../../assets/thumb_down.svg'

function getIndicatorModifier (className: string, positive: number, negative: number): string {
  const modifier = positive > negative ? 'positive' : 'negative'
  return `${className}--${modifier}`
}

function getIndicatorSource (positive: number, negative: number): string {
  return positive > negative ? thumb_up : thumb_down
}


const Card = ({
  id,
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes: { positive, negative },
  className
}: Props) => {
  // effects
  const { updateCharacterList } = useContext(CharacterContext)
  const [_, updateVote] = useMutation(ADD_VOTATION_MUTATION)

  //handlers
  const handleSendVote = async (vote: boolean): Promise<void> => {
    const { data } = await updateVote({ id, vote })
    if (data.addVotation.success) updateCharacterList(id, vote)
  }

  // markup
  return (
    <div role="menuitem" className={`card ${className}`}>
      <img
        src={picture}
        className="card__picture"
        alt="celebrity picture"
      />

      <img
        className={`card__indicator ${ getIndicatorModifier('card__indicator', positive, negative) }` }
        src={ getIndicatorSource(positive, negative) }
        alt="thumb indicator"
      />

      <Info
        name={name}
        description={description}
        className="card__info"
      />

      <VoteForm
        onSubmit={handleSendVote}
        lastUpdated={lastUpdated}
        className="card__form"
        category={category}
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