import './_gaugeBar.sass'
import Props from './gaugaBar.props'

function getPositiveProportion (positive: number, negative: number): number {
  return positive / (positive + negative)
}

const GaugeBar = (
  {
    positive,
    negative
  }: Props) => {

  return (
    <>
      <meter
        role="meter"
        value={getPositiveProportion(positive, negative)}
        aria-label={`Meter indicator with ${positive} positive votes and ${negative} negative votes`}
      />
    </>
  )
}

export { GaugeBar }