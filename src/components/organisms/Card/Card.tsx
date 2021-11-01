import './_card.sass'
import Props from './card.props'
import { VoteForm, Info } from '../../molecules'
import { GaugeBar } from '../../atoms'

import { useMutation } from 'urql'
import { ADD_VOTATION_MUTATION } from '../../../graphql'

import { useContext } from 'react'
import { CharacterContext, ViewContext } from '../../../context'

import thumb_up from '../../../assets/thumb_up.svg'
import thumb_down from '../../../assets/thumb_down.svg'

interface Votes {
  positive: number;
  negative: number;
}

function getIndicatorModifier (className: string, { positive, negative }: Votes): string {
  const modifier = positive > negative ? 'positive' : 'negative'
  return `${className}--${modifier}`
}

function getIndicatorSource ({ positive, negative }: Votes): string {
  return positive > negative ? thumb_up : thumb_down
}


const Card = ({
  id,
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes,
  className
}: Props) => {
  // effects
  const { updateCharacterList } = useContext(CharacterContext)
  const { getViewModifier } = useContext(ViewContext)
  const [_, updateVote] = useMutation(ADD_VOTATION_MUTATION)

  //handlers
  const handleSendVote = async (vote: boolean): Promise<void> => {
    const { data } = await updateVote({ id, vote })
    if (data.addVotation.success) updateCharacterList(id, vote)
  }

  // markup
  return (
    <div role="menuitem" className={`card ${className} ${ getViewModifier('card')} `}>
      
      <img
          src={picture}
          className={`card__picture ${ getViewModifier('card__picture') }`}
          alt="celebrity picture"
        />

      <img
        className={`card__indicator ${ getIndicatorModifier('card__indicator', votes) } ${ getViewModifier('card__indicator') }`}
        src={ getIndicatorSource(votes) }
        alt="thumb indicator"
      />

      <section className={`card__section ${ getViewModifier('card__section') }`}>
        <Info
          name={name}
          description={description}
          className="card__section__info"
        />

        <VoteForm
          onSubmit={handleSendVote}
          lastUpdated={lastUpdated}
          className="card__section__form"
          category={category}
          label="form vote"
        />
      </section>

      <GaugeBar
        positive={votes.positive}
        negative={votes.negative}
      />
    </div>
  )
}

export { Card }