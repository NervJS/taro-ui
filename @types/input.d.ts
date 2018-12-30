import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

declare type InputProp = string | number
declare type InputFunction = (value: string | number, event: BaseEvent) => void

import AtComponent from './base'

export interface AtInputProps extends AtComponent{
  name: string

  title?: string

  type?: string

  error?: boolean

  clear?: boolean

  border?: boolean

  disabled?: boolean

  maxlength?: InputProp

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

  onClick?: InputFunction

  onErrorClick?: BaseEventFunction
}

declare const AtInput: ComponentClass<AtInputProps>

export default AtInput
