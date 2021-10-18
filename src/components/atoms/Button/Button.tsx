import './_button.sass'
import Props from './button.props'

const Button = ({
  children = '',
  onClick,
  className = '',
  label = 'button label',
  type = 'button'
}: Props): JSX.Element => {

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={label}
    >
      { children }
    </button>
  )
}

export { Button }