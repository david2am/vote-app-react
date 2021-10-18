import './_card.sass'
import Props from './card.props'
import { VoteForm } from '../../molecules'
import { GaugeBar } from '../../atoms'
import thumb_up from '../../../assets/thumb_up.svg'
import thumb_down from '../../../assets/thumb_down.svg'

function isPositiveGreater (positive: number, negative: number): boolean {
  return positive > negative
}

const Card = ({
  name,
  description,
  category,
  picture,
  lastUpdated,
  votes: { positive, negative }
}: Props) => {
  return (
    <div className="card">
      <img
        src={picture}
        className="card__picture"
        alt="celebrity picture"
      />

      <section>
        <div className="card__title">
          <img
            src={ isPositiveGreater(positive, negative) ? thumb_up : thumb_down }
            className={`card__indicator ${ 
                isPositiveGreater(positive, negative) ?
                'card__indicator-positive' :
                'card__indicator-negative'
              }`}
            alt="thumb indicator"
          />
          <h2>{name}</h2>
        </div>
        <p className="card__description">
          {description}
        </p>
        <p className="card__note">
          {new Date(lastUpdated).toDateString()} in {category.toUpperCase()}
        </p>
      </section>

      <VoteForm
        onSubmit={() => console.log('submit')}
        className=""
        label="form vote"
      />

      <GaugeBar positive={positive} negative={negative} />
    </div>
  )
}

export { Card }