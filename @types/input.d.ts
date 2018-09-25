import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

declare type InputValue = string | number
declare type InputFunction = (value: string | number, event: BaseEvent) => void

import AtComponent from './base'

export interface AtInputProps extends AtComponent{
  style?: string

  name: string

  title?: string

  type?: string

  error?: boolean

  clear?: boolean

  border?: boolean

  disabled?: boolean

  maxlength?: number

  value?: InputValue

  placeholder?: string

  placeholderStyle?: string

  placeholderClass?: string

  editable?: boolean

  confirmType?: string

  cursor?: number

  selectionStart?: number

  selectionEnd?: number

  cursorSpacing?: number

  adjustPosition?: boolean

  backgroundColor?: string

  autoFocus?: boolean

  onBlur?: InputFunction

  onFocus?: InputFunction

  onChange?: InputFunction

  onConfirm?: InputFunction

  onClick?: InputFunction

  onErrorClick?: BaseEventFunction
}

declare const AtInput: ComponentClass<AtInputProps>

export default AtInput
