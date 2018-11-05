import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtTabsPaneProps extends AtComponent{
  tabDirection?: 'horizontal' | 'vertical'

  current: number

  index: number
}

declare const AtTabsPane: ComponentClass<AtTabsPaneProps>

export default AtTabsPane
