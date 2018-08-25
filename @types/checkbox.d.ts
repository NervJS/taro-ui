import { MouseEvent, ComponentClass } from 'react'

export interface Option<T> {
  value: T
  label: string
  desc?: string
  disabled?: boolean
}

export interface AtCheckboxProps<T> {
  options: Array<Option<T>>

  selectedList: Array<T>

  onChange?: (selectedList: Array<T>) => void
}

declare const AtCheckbox: ComponentClass<AtCheckboxProps<any>>

export default AtCheckbox
