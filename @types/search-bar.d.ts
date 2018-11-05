import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtSearchBarProps extends AtComponent {
  value: string

  placeholder?: string

  maxlength?: number

  fixed?: boolean

  focus?: boolean

  disabled?: boolean

  showActionButton?: boolean

  actionName?: string

  onChange: (value: string, event: BaseEvent) => void

  onFocus?: BaseEventFunction

  onBlur?: BaseEventFunction

  onConfirm?: BaseEventFunction

  onActionClick?: BaseEventFunction
}

declare const AtSearchBar: ComponentClass<AtSearchBarProps>

export default AtSearchBar
