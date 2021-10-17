import { GaugeBar } from './GaugeBar'
import Props from './gaugaBar.props'
import { render } from '@testing-library/react'

/* Test Cases
- it "Should display the width in proportion of positive votes"
*/

function GaugeBarFactory({
  positive,
  negative
}: Props): HTMLMeterElement {
  const { getByRole } = render(
    <GaugeBar
      positive={positive}
      negative={negative}
    />
  )
  return getByRole('meter') as HTMLMeterElement
}

describe('* Gauge bar tests', () => {
  let gaugeBar: HTMLMeterElement
  const positive = 23
  const negative = 36

  beforeEach(() => {
    gaugeBar = GaugeBarFactory({
      positive,
      negative
    })
  })


  it('Should display the width in proportion of positive votes', () => {
    const expectedProportion = positive / (positive + negative)
    expect(gaugeBar.value).toBe(expectedProportion)
  })
})