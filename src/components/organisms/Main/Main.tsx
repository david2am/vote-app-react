import './_main.sass'
import CardProps from '../Card/card.props'
import { Card } from '../../organisms'

import { useQuery } from 'urql'
import { CharactersQuery } from '../../../graphql'


const Main = () => {
  const [result] = useQuery({ query: CharactersQuery })

  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>;
  if (error) return <h2>Oh no... error {error.message}</h2>;

  return (
    <ul
      role="menubar"
      className="cardList"
      aria-label="list of characters to vote"
    >
      {data.data.map((character: CardProps) => (
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