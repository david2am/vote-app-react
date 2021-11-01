import './_cardListTitle.sass'

import { Select } from '../../atoms'
import { ChangeEvent, useContext } from 'react'
import { ViewContext } from '../../../context'
import { View } from '../../../schema'

const list = [ { id: 1, value: 'list'}, { id: 2, value: 'grid' } ] // TODO: it should be fetched

const CardListTitle = () => {

  const { setView } = useContext(ViewContext)

  // handlers
  const handleSelect = ({ target: { value } }: ChangeEvent<HTMLSelectElement>): void => {
    const viewType = value === 'grid' ? View.grid : View.list
    setView(viewType)
  }

  return (
    <div className="cardListTitle">

      <h2 className="cardListTitle__title"> Previous Rulings </h2>

      <Select
        label="Select between grid or list view"
        className="cardListTitle__selector"
        onChange={handleSelect}
        optionList={list}
      />

    </div>
  )
}

export { CardListTitle }