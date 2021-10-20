import './_select.sass'
import Props from './select.props'

const Select = (
  {
    optionList,
    className,
    onChange,
    label
  }: Props
) => {
  return (
    <select
      role="select"
      aria-label={label}
      className={className}
      onChange={onChange}
    >
      {optionList.map(({ id, value }) => (
        <option value={value} key={id} >{value}</option>
      ))}
    </select>
  )
}

export { Select }