import './_gaugeBar.sass'
import Props from './gaugaBar.props'

import thumb_up from '../../../assets/thumb_up.svg'
import thumb_down from '../../../assets/thumb_down.svg'

function getPositiveProportion (positive: number, negative: number): number {
  return positive / (positive + negative)
}
function getPositivePercentage (positive: number, negative: number): number {
  return Math.round(100 * getPositiveProportion(positive, negative))
}

const GaugeBar = (
  {
    positive,
    negative
  }: Props) => {

  return (
    <div className="gaugebar">
      <p className="gaugebar__positive-votes">
        <img src={thumb_up} alt="thumb up logo" />
        {getPositivePercentage(positive, negative)}%
      </p>
      <meter
        role="meter"
        className="gaugebar__meter"
        value={getPositiveProportion(positive, negative)}
        aria-label={`Meter indicator with ${positive} positive votes and ${negative} negative votes`}
      />
      <p className="gaugebar__negative-votes">
        {100 - getPositivePercentage(positive, negative)}%
        <img src={thumb_down} alt="thumb down logo" />
      </p>
    </div>
  )
}

export { GaugeBar }