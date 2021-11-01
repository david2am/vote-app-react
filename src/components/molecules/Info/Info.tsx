import './_info.sass'
import Props from './info.props'
import { useContext } from 'react'
import { ViewContext } from '../../../context'

const Info = ({
  name,
  description,
  className
}: Props) => {
  const { getViewModifier } = useContext(ViewContext)

  return (
    <section className={`info ${className} ${ getViewModifier('info') }`}>

      <h2 className={`info__title ${ getViewModifier('info__title') }`}> {name} </h2>

      <p className="info__description"> {description} </p>

    </section>
  )
}

export { Info }