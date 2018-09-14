import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtSwitchProps extends AtComponent{
  style?: string

  title?: string

  color?: string

  checked?: boolean

  border?: boolean

  disabled?: boolean

  onChange?: (value: boolean) => void
}

declare const AtSwitch: ComponentClass<AtSwitchProps>

export default AtSwitch
