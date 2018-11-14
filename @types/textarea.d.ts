import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtTextareaProps extends AtComponent{
  style?: string

  value: string

  maxlength?: string

  placeholder?: string

  disabled?: boolean

  autoFocus?: boolean

  focus?: boolean

  showConfirmBar?: boolean

  selectionStart?: number

  selectionEnd?: number

  count?: boolean

  fixed?: boolean

  textOverflowForbidden?: boolean

  height?: number

  cursorSpacing?: number

  onChange: BaseEventFunction

  onFocus?: BaseEventFunction

  obBlur?: BaseEventFunction

  onConfirm?: BaseEventFunction

  onLinechange?: BaseEventFunction
}

declare const AtTextarea: ComponentClass<AtTextareaProps>

export default AtTextarea
