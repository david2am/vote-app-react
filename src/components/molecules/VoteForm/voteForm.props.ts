export default interface Props {
  onSubmit: (...args: unknown[]) => void,
  className: string,
  label: string
}