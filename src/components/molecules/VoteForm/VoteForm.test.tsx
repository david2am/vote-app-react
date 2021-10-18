import { VoteForm } from './VoteForm'
import { render, cleanup, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Props from './voteForm.props'

/* Test Cases
  it "Should be accessible and have content inside of a form container"
  it "Should have as default: "thumbs up" as .primary, "thumbs down" as .secondary and "Vote now" disabled"
  it "Should have "thumbs up" button as .selected and "Vote now" enabled if "thumbs up" was pressed"
  it "Should change "Vote now" to \"Vote again\"""
  it "Should disappears other buttons if "Vote now" button was pressed"
*/

interface Buttons {
  positiveVoteButton: HTMLButtonElement;
  negativeVoteButton: HTMLButtonElement;
  submitVoteButton: HTMLButtonElement;
}

function VoteFormFactory(
    {
      onSubmit,
      className,
      label
    }: Props,
  ): Buttons {
    render(
      <VoteForm
        onSubmit={onSubmit}
        className={className}
        label={label}
      />
    )
    const positiveVoteButton = screen.getByRole('button', { name: 'positive vote' }) as HTMLButtonElement
    const negativeVoteButton = screen.getByRole('button', { name: 'negative vote' }) as HTMLButtonElement
    const submitVoteButton = screen.getByRole('button', { name: 'submit vote' }) as HTMLButtonElement

    return {
      positiveVoteButton,
      negativeVoteButton,
      submitVoteButton
    }
}

describe('* Form vote tests:', () => {
  const mockCallBack = jest.fn()

  afterEach(cleanup)

  it('Should be accessible and have content inside of a form container', () => {
    const { getByRole } = render(
      <VoteForm
        onSubmit={mockCallBack}
        className=''
        label=''
      />
    )
    const form = getByRole('form') as HTMLFormElement

    expect(form).toBeTruthy()
  })

  it('Should have initially: "thumbs up" as .primary, "thumbs down" as .secondary and "Vote now" disabled', () => {
    const {
      positiveVoteButton,
      negativeVoteButton,
      submitVoteButton
    } = VoteFormFactory({ onSubmit: mockCallBack, className: '', label: '' })

    expect(positiveVoteButton.classList.contains('primary')).toBe(true)
    expect(negativeVoteButton.classList.contains('secondary')).toBe(true)
    expect(submitVoteButton.disabled).toBe(true)
    expect(submitVoteButton.textContent).toBe('Vote now')
  })

  it('Should have "thumbs up" button as .selected and "Vote now" enabled if "thumbs up" was pressed', () => {
    const {
      positiveVoteButton,
      submitVoteButton
    } = VoteFormFactory({ onSubmit: mockCallBack, className: '', label: '' })

    expect(positiveVoteButton.classList.contains('selected')).toBe(false)
    expect(submitVoteButton.disabled).toBe(true)

    userEvent.click(positiveVoteButton)

    expect(positiveVoteButton.classList.contains('selected')).toBe(true)
    expect(submitVoteButton.disabled).toBe(false)
  })

  it('Should change "Vote now" to "Vote again"', () => {
    const {
      positiveVoteButton,
      submitVoteButton
    } = VoteFormFactory({ onSubmit: mockCallBack, className: '', label: '' })

    userEvent.click(positiveVoteButton)
    userEvent.click(submitVoteButton)

    expect(submitVoteButton.textContent).toBe('Vote again')
    expect(mockCallBack).toHaveBeenCalled()
  })

  it('Should disappears other buttons if "Vote now" button was pressed', () => {
    const {
      positiveVoteButton,
      submitVoteButton
    } = VoteFormFactory({ onSubmit: mockCallBack, className: '', label: '' })

    userEvent.click(positiveVoteButton)
    userEvent.click(submitVoteButton)

    expect(screen.queryByRole('button', { name: 'positive vote' })).toBe(null)
    expect(screen.queryByRole('button', { name: 'negative vote' })).toBe(null)
  })

})