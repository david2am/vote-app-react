import { Select } from './Select'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Props from './select.props'

/* Test Cases

*/
function selectConstructor (
  {

  }: Props): HTMLSelectElement {
  render(
    <Select/>
  )
  return screen.getByRole('select') as HTMLSelectElement
}

describe('* Select tests:', () => {

  it('', () => {

  })

})