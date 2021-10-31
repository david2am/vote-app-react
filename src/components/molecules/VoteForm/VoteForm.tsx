import './_voteForm.sass'
import Props from './voteForm.props'
import { Button } from '../../atoms'
import thumb_up from '../../../assets/thumb_up.svg'
import thumb_down from '../../../assets/thumb_down.svg'
import { FormEvent, useState } from 'react'

function capitalizeFirstLetter (str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const VoteForm = ({
    onSubmit,
    className,
    label,
    category,
    lastUpdated,
  }: Props) => {
  const [positiveSelected, setPositiveSelected] = useState<boolean>(false)
  const [negativeSelected, setNegativeSelected] = useState<boolean>(false)
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(true)
  const [submitClicked, setSubmitClicked] = useState<boolean>(false)

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()

    if (submitClicked) {
      setSubmitClicked(false)
      // set initial state
      setPositiveSelected(false)
      setNegativeSelected(false)
      setSubmitDisabled(true)
      return
    }
    setSubmitClicked(true)
    // callback execution
    onSubmit(positiveSelected)
  }

  const handlePositiveSelection = (): void => {
    setPositiveSelected(true)
    setNegativeSelected(false)
    setSubmitDisabled(false)
  }

  const handleNegativeSelection = (): void => {
    setPositiveSelected(false)
    setNegativeSelected(true)
    setSubmitDisabled(false)
  }

  return (
    <section className="vote">

      <p className="vote__advice">
        { submitClicked
          ? 'Thank you for your vote!'
          : `${ new Date(lastUpdated).toDateString()} in ${ capitalizeFirstLetter(category) }`
        }
      </p>

      <form
        onSubmit={handleSubmit}
        className={`vote__form ${className}`}
        aria-label={label}
      >
        { !submitClicked && (
          <>
            <Button
              onClick={handlePositiveSelection}
              className={`primary ${positiveSelected ? 'selected' : '' }`}
              label="positive vote"
              type="button"
            >
              <img src={thumb_up} alt="thumb up logo" />
            </Button>

            <Button
              onClick={handleNegativeSelection}
              className={`secondary ${negativeSelected ? 'selected' : '' }`}
              label="negative vote"
              type="button"
            >
              <img src={thumb_down} alt="thumb down logo" />
            </Button>
          </>
        )}

        <Button
          disabled={submitDisabled}
          label="submit vote"
          type="submit"
        >
          { submitClicked ? 'Vote Again' : 'Vote Now' }
        </Button>

      </form>

    </section>
  )
}

export { VoteForm }