import './_header.sass'
import { Props } from './header.props'

import thumb_up from '../../../assets/thumb_up.svg'
import thumb_down from '../../../assets/thumb_down.svg'
import menu from '../../../assets/menu.png'

import { Info } from '../../molecules'
import { Button } from '../../atoms'

import { FormEvent, useState } from 'react'


const Header = (
  {
    name,
    picture,
    description
  }: Props) => {
  // state
  const [positiveVote, setPositiveVote] = useState<boolean>(false)

  // handlers
  const handlePositiveSelection = (): void => {
    setPositiveVote(true)
  }

  const handleNegativeSelection = (): void => {
    setPositiveVote(false)
  }

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault()
  }

  return (
    <header className="header">

      <div className="header__container">
        <img
          src={picture}
          alt={`${name} photo`}
          className="header__container__img"
        />
      </div>
      

      <div className="header__title">
        <h2 className="header__title__text">Rule of thumb.</h2>
        <img className="header__title__img" src={menu} alt="Menu icon" />
      </div>


      <div className="header__card">

        <p> What's your opinion on </p>

        <Info
          name={name}
          className="header__card__info"
          description={description}
        />

        <p> What's your veredict? </p>

        <form
          onSubmit={handleSubmit}
          className="header__card__form"
        >
          <Button
            onClick={handlePositiveSelection}
            className="btn--primary header__card__form__positive"
            label="positive vote"
            type="button"
          >
            <img src={thumb_up} alt="thumb up logo" />
          </Button>

          <Button
            onClick={handleNegativeSelection}
            className="btn--secondary header__card__form__negative"
            label="negative vote"
            type="button"
          >
            <img src={thumb_down} alt="thumb down logo" />
          </Button>

        </form>
      </div>
      
      <meter className="header__gaugebar"></meter>
    </header>
  )
}

export { Header }