import './_cardList.sass'

import { Card } from '..'

import { useQuery } from 'urql'
import { CHARACTER_QUERY } from '../../../graphql'

import { useContext, useEffect } from 'react'
import { CharacterContext, ViewContext } from '../../../context'

import { Character } from '../../../schema'
import { CardListTitle } from '../../molecules'


const CardList = () => {

  // effects
  const { characterList, setCharacterList } = useContext(CharacterContext)
  const { getViewModifier } = useContext(ViewContext)
  const [{ data, fetching, error }] = useQuery({ query: CHARACTER_QUERY })

  useEffect(() =>
    data && setCharacterList(data.allCharacters)
  , [data])

  // markup
  if (fetching) return <p>Loading...</p>
  if (error) return <h2>Oh no... error {error.message}</h2>

  return (
    <>

      <CardListTitle />

      <ul
        role="menubar"
        className={`cardList ${ getViewModifier('cardList') }`}
        aria-label="list of characters to vote"
      >
        {
          characterList.map((
            {
              id,
              name,
              description,
              category,
              picture,
              lastUpdated,
              votes
            }: Character) => (
            <li
              role="none"
              key={id}
            >
              <Card
                className=""
                name={name}
                description={description}
                category={category}
                picture={picture}
                lastUpdated={lastUpdated}
                votes={votes}
                id={id}
              />
            </li>
          ))
        }
      </ul>
    </>
  )
}

export { CardList }