import './_main.sass'

import { InfoBanner, CardList , FeedbackForm, Footer, Header } from '../../organisms'
import { CardListTitle } from '../../molecules'

import pope from '../../../assets/pope.png' // TODO: remove the next lines

const data = {
  name: 'Pope Francis',
  picture: pope,
  description: 'He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)'
}

const Main = () => {
  return (
    <>
      <Header
        name={data.name}
        picture={data.picture}
        description={data.description}
      />

      <InfoBanner />

      <CardListTitle />

      <CardList />

      <FeedbackForm />

      <Footer/>
    </>
  )
}

export { Main }