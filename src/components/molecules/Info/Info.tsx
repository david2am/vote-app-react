import './_info.sass'
import Props from './info.props'

const Info = ({
  name,
  description,
  category,
  lastUpdated
}: Props) => {
  return (
    <section className="info">
      <h2 className="info__title"> {name} </h2>

      <p className="info__description"> {description} </p>

      <p className="info__note"> {new Date(lastUpdated).toDateString()} in {category.toUpperCase()} </p>
    </section>
  )
}

export { Info }