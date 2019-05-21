import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

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

  onChange: CommonEventFunction

  onFocus?: CommonEventFunction

  onBlur?: CommonEventFunction

  onConfirm?: CommonEventFunction

  onLinechange?: CommonEventFunction
}

declare const AtTextarea: ComponentClass<AtTextareaProps>

export default AtTextarea
