import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtTextareaProps extends AtComponent{
  value: string

  maxLength?: string | number

  placeholder?: string

  placeholderClass?: string

  placeholderStyle?: string

  disabled?: boolean

  autoFocus?: boolean

  focus?: boolean

  showConfirmBar?: boolean

  selectionStart?: number

  selectionEnd?: number

  count?: boolean

  fixed?: boolean

  textOverflowForbidden?: boolean

  height?: string | number

  cursorSpacing?: number

  onChange: BaseEventFunction

  onFocus?: BaseEventFunction

  onBlur?: BaseEventFunction

  onConfirm?: BaseEventFunction

  onLinechange?: BaseEventFunction
}

declare const AtTextarea: ComponentClass<AtTextareaProps>

export default AtTextarea
