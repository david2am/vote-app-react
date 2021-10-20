import { Select } from './Select'
import { render, screen } from '@testing-library/react'
import Props from './select.props'

/* Test Cases
- it "Should be accessible"
*/
function SelectConstructor (
  {
    optionList,
    label
  }: Props): HTMLSelectElement {
  render(
    <Select optionList={optionList} label={label} />
  )
  return screen.getByRole('select') as HTMLSelectElement
}

describe('* Select tests:', () => {
  let select: HTMLSelectElement
  const optionList = [ { id: 1, value: 'List'}, { id: 2, value: 'Grid' } ]
  const label = 'Select between grid and list view'

  beforeEach(() => {
    select = SelectConstructor({ optionList, label })
  })

  it('Should be accessible', () => {
    expect(select).toBeTruthy()
  })

})