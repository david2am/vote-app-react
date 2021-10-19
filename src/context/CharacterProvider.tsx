import { createContext, ReactNode, useState } from 'react'
import { Character } from '../schema/character.props'

const CharacterContext = createContext({
  characterList: [] as Character[],
  updateCharacterList: ( id: number, vote: boolean ) => {},
  setCharacterList: (list: Character[]) => {}
})

interface Props {
  children: ReactNode
}

const CharacterProvider = ({ children }: Props): JSX.Element => {
  const [characterList, setCharacterList] = useState<Character[]>([])

  const updateCharacterList = ( id: number, vote: boolean ): void => {
    const copyList = [...characterList]

    const found = copyList.find((character) => character.id === id)

    if (!found) return

    if (vote) found.votes.positive++
    else found.votes.negative++

    setCharacterList(copyList)
  }

  return (
    <CharacterContext.Provider value={{ characterList, updateCharacterList, setCharacterList }}>
      {children}
    </CharacterContext.Provider>
  )
}

export { CharacterContext }
export default CharacterProvider
