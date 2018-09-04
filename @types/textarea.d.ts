import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface AtTextareaProps {
  value?: string

  maxlength?: string

  placeholder?: string

  disabled?: boolean

  autoFocus?: boolean

  count?: number

  fixed?: boolean

  textOverflowForbidden?: boolean

  height?: number

  cursorSpacing?: number

  onChange?: BaseEventFunction

  onFocus?: BaseEventFunction

  obBlur?: BaseEventFunction

  onConfirm?: BaseEventFunction
}

declare const AtTextarea: ComponentClass<AtTextareaProps>

export default AtTextarea
