import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction, CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtSearchBarProps extends AtComponent {
  value: string

  placeholder?: string

  maxLength?: number

  fixed?: boolean

  focus?: boolean

  disabled?: boolean

  showActionButton?: boolean

  actionName?: string

  onChange: (value: string, event: CommonEvent) => void

  onFocus?: CommonEventFunction

  onBlur?: CommonEventFunction

  onConfirm?: CommonEventFunction

  onActionClick?: CommonEventFunction
}

declare const AtSearchBar: ComponentClass<AtSearchBarProps>

export default AtSearchBar
