import { ComponentClass } from 'react'

import AtComponent from './base'

export interface CheckboxOption<T> {
  value: T
  label: string
  desc?: string
  disabled?: boolean
}

export interface AtCheckboxProps<T> extends AtComponent {
  options: Array<CheckboxOption<T>>

  border?: boolean

  selectedList: Array<T>

  onChange: (selectedList: Array<T>) => void
}

declare const AtCheckbox: ComponentClass<AtCheckboxProps<any>>

export default AtCheckbox
