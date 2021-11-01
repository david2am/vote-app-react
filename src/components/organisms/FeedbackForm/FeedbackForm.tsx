import { FormEvent } from 'react'
import './_feedbackForm.sass'

const FeedbackForm = () => {
  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <img src="" alt="background image" />

      <p>Is there anyone else you would want us to add?</p>

      <button type="submit">Submit a name</button>
    </form>
  )
}

export { FeedbackForm }