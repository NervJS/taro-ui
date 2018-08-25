import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

declare type InputValue = string | number
declare type InputFunction = (value: string | number, event: BaseEvent) => void

export interface AtInputProps {
  name: string

  title: string

  type: string

  error: boolean

  clear: boolean

  border: boolean

  disabled: boolean

  maxlength: number

  value: InputValue

  placeholder: string

  editable: boolean

  confirmType: string

  cursorSpacing: number

  backgroundColor: string

  autoFocus: boolean

  onBlur: InputFunction

  onFocus: InputFunction

  onChange: InputFunction

  onConfirm: InputFunction

  onErrorClick: BaseEventFunction
}

declare const AtInput: ComponentClass<AtInputProps>

export default AtInput
