import './_info.sass'
import Props from './info.props'

const Info = ({
  name,
  description,
  className
}: Props) => {
  return (
    <section className={`info ${className}`}>

      <h2 className="info__title"> {name} </h2>

      <p className="info__description"> {description} </p>

    </section>
  )
}

export { Info }