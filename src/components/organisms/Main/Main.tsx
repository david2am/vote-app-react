import './_main.sass'
import CardProps from '../Card/card.props'
import { Card } from '../../organisms'

import { useQuery } from 'urql'
import { CharactersQuery } from '../../../graphql'

import { useContext } from 'react'
import { CharacterContext } from '../../../context/CharacterProvider'


const Main = () => {
  const { characterList, setCharacterList } = useContext(CharacterContext)
  const [{ data, fetching, error }] = useQuery({ query: CharactersQuery })

  if (fetching) return <p>Loading...</p>
  if (error) return <h2>Oh no... error {error.message}</h2>

  setCharacterList(data.data)

  return (
    <ul
      role="menubar"
      className="cardList"
      aria-label="list of characters to vote"
    >
      {characterList.map((character: CardProps) => (
        <li
          role="none"
          key={character.id}
          className="cardList__item"
        >
          <Card {...character} />
        </li>
      ))}
    </ul>
  )
}

export { Main }