import './_cardList.sass'

import { Card } from '..'
import { Select } from '../../atoms'

import { useQuery } from 'urql'
import { CHARACTER_QUERY } from '../../../graphql'

import { ChangeEvent, useContext, useEffect } from 'react'
import { CharacterContext, ViewContext } from '../../../context'

import { Character, View } from '../../../schema'

const list = [ { id: 1, value: 'list'}, { id: 2, value: 'grid' } ] // TODO: it should be fetched


const CardList = () => {
  // state

  // effects
  const { characterList, setCharacterList } = useContext(CharacterContext)
  const { setView, getViewModifier } = useContext(ViewContext)
  const [{ data, fetching, error }] = useQuery({ query: CHARACTER_QUERY })

  useEffect(() =>
    data && setCharacterList(data.allCharacters)
  , [data])

  // handlers
  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>): void => {
    const viewType = value === 'grid' ? View.grid : View.list
    setView(viewType)
  }

  if (fetching) return <p>Loading...</p>
  if (error) return <h2>Oh no... error {error.message}</h2>

  return (
    <>
      <div className="cardList__header">

        <h2 className="cardList__header__title"> Previous Rulings </h2>

        <Select
          label="Select between grid or list view"
          className="cardList__header__selector"
          onChange={handleSelect}
          optionList={list}
        />

      </div>

      <ul
        role="menubar"
        className={`cardList__list ${getViewModifier('cardList__list')}`}
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