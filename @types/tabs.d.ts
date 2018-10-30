import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtTabsProps extends AtComponent{
  tabDirection?: 'horizontal'|'vertical'

  height?: string

  current: number

  scroll?: boolean

  animated?: boolean

  swipeable?: boolean

  tabList: Array<{ title: string }>

  onClick: (index: number, event: BaseEvent) => void
}

declare const AtTabs: ComponentClass<AtTabsProps>

export default AtTabs
