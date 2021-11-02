import './_main.sass'

import { InfoBanner, CardList , FeedbackForm, Footer } from '../../organisms'
import { CardListTitle } from '../../molecules'

const Main = () => {
  return (
    <>
      <InfoBanner />

      <CardListTitle />

      <CardList />

      <FeedbackForm />

      <Footer/>
    </>
  )
}

export { Main }