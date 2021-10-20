import { ChangeEvent } from 'react'

export default interface Props {
  optionList: { value: string, id: number }[];
  className?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  label: string;
}