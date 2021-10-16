import { Button } from './Button'
import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Props from './button.props'

/* Test Cases

it "Should be accessible"

it "Should call a function when it has been clicked"

it "Should have .primary, secondary, .selected or .submit classes"

*/

function ButtonFactory({
  children = '',
  onClick,
  className,
  label = 'button label',
  type
}: Props): HTMLButtonElement {
  const { getByRole } = render(
    <Button
      onClick={onClick}
      className={className}
      type={type}
      label={label}
    >
      {children}
    </Button>
  )
  return getByRole('button') as HTMLButtonElement
}

describe('* Button tests:', () => {
  let button: HTMLButtonElement
  const mockCallBack = jest.fn()

  beforeEach(() => {
    button = ButtonFactory({
      onClick: mockCallBack,
      className: 'primary secondary selected submit',
      label: 'Primary button',
      children: 'Some text'
    })
  })

  afterEach(cleanup)

  it('Should be accessible', () => {
    expect(button).toBeTruthy()
  })

  it('Should call a function when it has been clicked', () => {
    userEvent.click(button)
    expect(mockCallBack).toHaveBeenCalled()
  })

  it('Should have .primary, secondary, .selected or .submit classes', () => {
    expect(button.classList.contains('primary')).toBe(true)
    expect(button.classList.contains('selected')).toBe(true)
    expect(button.classList.contains('secondary')).toBe(true)
    expect(button.classList.contains('submit')).toBe(true)
  })

})