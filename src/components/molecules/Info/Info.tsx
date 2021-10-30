import './_info.sass'
import Props from './info.props'

import thumb_up from '../../../assets/thumb_up.svg'
import thumb_down from '../../../assets/thumb_down.svg'


function isMorePositive (positive: number, negative: number): boolean {
  return positive > negative
}

const Info = ({
  name,
  description,
  category,
  lastUpdated,
  votes: { positive, negative }
}: Props) => {
  return (
    <section>
        <div className="card__title">
          
          <button
            className={`card__indicator ${ 
              isMorePositive(positive, negative) ?
              'card__indicator-positive' :
              'card__indicator-negative'
            }`}
          >
            <img
              src={ isMorePositive(positive, negative) ? thumb_up : thumb_down }
              alt="thumb indicator"
            />
          </button>
          <h2>{name}</h2>
        </div>
        <p className="card__description">
          {description}
        </p>
        <p className="card__note">
          {new Date(lastUpdated).toDateString()} in {category.toUpperCase()}
        </p>
      </section>
  )
}

export { Info }