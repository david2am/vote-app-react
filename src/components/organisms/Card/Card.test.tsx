import { Card } from './Card'
import Props from './card.props'
import { render, screen } from '@testing-library/react'

/* Test Cases
- it "Should be accesible"
- it "Should show 'thumb up' if positive feedback is more than negative"
- it "Should show 'thumb down' if negative feedback is more than positive"
*/

function CardFactory(data: Props) {
  render(
    <Card {...data} />
  )
  const title = screen.getByRole('heading', { level: 2 })
  const description = screen.getByText(data.description)
  const form = screen.getByRole('form')
  const picture = screen.getByRole('img', { name: 'celebrity picture' })
  const gaugebar = screen.getByRole('meter')

  return {
    title,
    description,
    form,
    picture,
    gaugebar
  }
}

const data: Props = {
  name: "Kanye West",
  description: "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
  category: "entertainment",
  picture: "kanye.png",
  lastUpdated: "2020-03-10T23:08:57.892Z",
  votes: {
      positive: 23,
      negative: 36
  }
}

describe('* Card tests', () => {
  it('Should be accessible', () => {
    const {
      title,
      description,
      form,
      picture,
      gaugebar
    } = CardFactory(data)

    expect(title).toBeTruthy()
    expect(description).toBeTruthy()
    expect(form).toBeTruthy()
    expect(picture).toBeTruthy()
    expect(gaugebar).toBeTruthy()
  })

})