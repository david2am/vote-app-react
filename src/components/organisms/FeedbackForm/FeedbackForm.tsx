import { FormEvent } from 'react'
import { Button } from '../../atoms'
import './_feedbackForm.sass'

import background from '../../../assets/background.png'

const FeedbackForm = () => {

  // handlers
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()
  }

  return (
    <form
      className={`feedForm`}
      onSubmit={handleSubmit}
    >

      <img
        className="feedForm__img"
        src={background} alt="background image"
      />

      <div className="feedForm__content">
        <p className="feedForm__content__paragraph">Is there anyone else you would want us to add?</p>

        <Button
          className="btn__feedback feedForm__content__btn"
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