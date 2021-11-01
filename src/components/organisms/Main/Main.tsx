import './_main.sass'

import { Card } from '../../organisms'
import { Select } from '../../atoms'

import { useQuery } from 'urql'
import { CHARACTER_QUERY } from '../../../graphql'

import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { CharacterContext, ViewContext } from '../../../context'

import { Character, View } from '../../../schema'

const list = [ { id: 1, value: 'list'}, { id: 2, value: 'grid' } ] // TODO: it should be fetched


const Main = () => {
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
    <main>

      <section className="main__headBanner">
        <div className="main__headBanner__title">
          <p>Speak out. Be heard.</p>
          <h2>Be Counted</h2>
        </div>

        <p className="main__headBanner__paragraph">
          Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.
        </p>
      </section>

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
        className={`main__cardList ${getViewModifier('main__cardList')}`}
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

      <form>
        <img src="" alt="background image" />

        <p>Is there anyone else you would want us to add?</p>

        <button type="submit">Submit a name</button>
      </form>

    </main>
  )
}

export { Main }