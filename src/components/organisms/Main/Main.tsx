import './_main.sass'
import CardProps from '../Card/card.props'
import { Card } from '../../organisms'
import { Select } from '../../atoms'

import { useQuery } from 'urql'
import { CHARACTER_QUERY } from '../../../graphql'

import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../../../context/CharacterProvider'

const list = [ { id: 1, value: 'List'}, { id: 2, value: 'Grid' } ] // TODO: it should be fetched

function getClassAndModifier (className: string, selectValue: string): string {
  const classModifier = selectValue === 'Grid' ? `${className}-grid` : `${className}-list`
  return `${className} ${classModifier}`
}

const Main = () => {
  // state
  const [selectValue, setSelectValue] = useState<string>('')

  // effects
  const { characterList, setCharacterList } = useContext(CharacterContext)
  const [{ data, fetching, error }] = useQuery({ query: CHARACTER_QUERY })

  useEffect(() =>
    data && setCharacterList(data.allCharacters)
  , [data])

  // handlers
  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>): void => {
    setSelectValue(value)
  }

  if (fetching) return <p>Loading...</p>
  if (error) return <h2>Oh no... error {error.message}</h2>

  return (
    <main>

      <div className="main__cardHeader">

        <h2 className="main__cardHeader__title"> Previous Rulings </h2>

        <Select
          label="Select between grid or list view"
          className="main__cardHeader__selector"
          onChange={handleSelect}
          optionList={list}
        />

      </div>

      <ul
        role="menubar"
        className={getClassAndModifier('main__cardList', selectValue)}
        aria-label="list of characters to vote"
      >
        {
          characterList.map((character: CardProps) => (
            <li
              role="none"
              key={character.id}
              className={getClassAndModifier('main__cardList__item', selectValue)}
            >
              <Card {...character} />
            </li>
          ))
        }
      </ul>
    </main>
  )
}

export { Main }