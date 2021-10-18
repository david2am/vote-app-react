export default interface Props {
  children?: any,
  onClick?: (...args: unknown[]) => void,
  className?: string,
  label: string,
  type?: 'button' | 'submit' | 'reset' | undefined,
  disabled?: boolean
}
