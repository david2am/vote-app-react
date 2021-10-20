import './_main.sass'
import CardProps from '../Card/card.props'
import { Card } from '../../organisms'
import { Select } from '../../atoms'

import { useQuery } from 'urql'
import { CharactersQuery } from '../../../graphql'

import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CharacterContext } from '../../../context/CharacterProvider'

const list = [ { id: 1, value: 'List'}, { id: 2, value: 'Grid' } ] // TODO: it should be fetched

function isGrid (className: string, isSelectVisible: boolean, selectValue: string): string {
  return isSelectVisible && selectValue === 'Grid' ? `${className}-grid` : `${className}-list`
}

const Main = () => {
  const [isSelectVisible, setIsSelectVisible] = useState<boolean>(true)
  const [selectValue, setSelectValue] = useState<string>('')

  const { characterList, setCharacterList } = useContext(CharacterContext)
  const [{ data, fetching, error }] = useQuery({ query: CharactersQuery })

  useEffect(() => {
    setIsSelectVisible(document.documentElement.clientWidth > 768)
  }, [])

  if (fetching) return <p>Loading...</p>
  if (error) return <h2>Oh no... error {error.message}</h2>

  setCharacterList(data.data)

  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>): void => {
    setSelectValue(value)
  }

  return (
    <>
      <div className="main__header">
        <h2 className="main__header__title">
          Previous Rulings
        </h2>
        { isSelectVisible &&
          <Select
            label="Select between grid and list view"
            className="main__header__selector"
            onChange={handleSelect}
            optionList={list}
          />
        }
      </div>
      <ul
        role="menubar"
        className={`main__cardList ${ isGrid('main__cardList', isSelectVisible, selectValue) }`}
        aria-label="list of characters to vote"
      >
        {characterList.map((character: CardProps) => (
          <li
            role="none"
            key={character.id}
            className={`main__cardList__item ${isGrid('main__cardList__item', isSelectVisible, selectValue)}`}
          >
            <Card {...character} />
          </li>
        ))}
      </ul>
    </>
  )
}

export { Main }