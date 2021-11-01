import './_main.sass'

import { InfoBanner, CardList , FeedbackForm, Footer } from '../../organisms'

const Main = () => {
  return (
    <>
      <InfoBanner />

      <CardList />

      <FeedbackForm />

      <Footer/>
    </>
  )
}

export { Main }