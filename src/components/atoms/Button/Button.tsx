import './_button.sass'
import Props from './button.props'
import { useContext } from 'react'
import { ViewContext } from '../../../context'

const Button = ({
  children = '',
  onClick,
  className = '',
  label = 'button label',
  type = 'button',
  disabled
}: Props): JSX.Element => {
  const { getViewModifier } = useContext(ViewContext)

  return (
    <button
      type={type}
      className={`btn ${className} ${getViewModifier('btn')}`}
      onClick={onClick}
      aria-label={label}
      disabled={!!disabled}
    >
      { children }
    </button>
  )
}

export { Button }