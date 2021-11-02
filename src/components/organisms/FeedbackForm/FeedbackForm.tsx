import { FormEvent } from 'react'
import { Button } from '../../atoms'
import './_feedbackForm.sass'

import background from '../../../assets/background.png'

const FeedbackForm = () => {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()
  }

  return (
    <form
      // className={`feedForm`}
      onSubmit={handleSubmit}
    >
      
      <div className="feedForm">
        <img
          className="feedForm__img"
          src={background} alt="background image"
        />

        <p className="feedForm__paragraph">Is there anyone else you would want us to add?</p>

        <Button
          className="feedForm__btn btn__feedback"
          label="Submit feedback"
          type="submit"
        >
          Submit a name
        </Button>
      </div>

      
    </form>
  )
}

export { FeedbackForm }