import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction, CommonEvent } from '@tarojs/components/types/common'

declare type InputProp = string | number
declare type InputFunction<T extends string | number> = (value: T, event: CommonEvent) => void

import AtComponent from './base'

export interface AtInputProps extends AtComponent{
  name: string

  title?: string

  type?: string

  error?: boolean

  clear?: boolean

  border?: boolean

  disabled?: boolean

  maxLength?: InputProp

  value?: InputProp

  placeholder?: string

  placeholderStyle?: string

  placeholderClass?: string

  editable?: boolean

  confirmType?: string

  cursor?: InputProp

  selectionStart?: InputProp

  selectionEnd?: InputProp

  cursorSpacing?: InputProp

  adjustPosition?: boolean

  backgroundColor?: string

  autoFocus?: boolean

  focus?: boolean

  onBlur?: InputFunction

  onFocus?: InputFunction

  onChange: InputFunction

  onConfirm?: InputFunction

  onClick?: () => void

  onErrorClick?: () => void
}

declare const AtInput: ComponentClass<AtInputProps>

export default AtInput
