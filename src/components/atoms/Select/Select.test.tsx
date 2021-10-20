import { Select } from './Select'
import { cleanup, render, screen } from '@testing-library/react'
import Props from './select.props'

/* Test Cases
- it "Should be accessible"
*/
function SelectConstructor (
  {
    optionList,
    onChange,
    label
  }: Props): HTMLSelectElement {
  render(
    <Select optionList={optionList} onChange={onChange} label={label} />
  )
  return screen.getByRole('select') as HTMLSelectElement
}

describe('* Select tests:', () => {
  let select: HTMLSelectElement
  const optionList = [ { id: 1, value: 'List'}, { id: 2, value: 'Grid' } ]
  const label = 'Select between grid and list view'
  const onChange = jest.fn()

  beforeEach(() => {
    select = SelectConstructor({ optionList, label, onChange })
  })

  afterEach(cleanup)

  it('Should be accessible', () => {
    expect(select).toBeTruthy()
  })

})