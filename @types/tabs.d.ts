import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface AtTabsProps {
  style?: string

  current?: number

  scroll?: boolean

  swipeable?: boolean

  tabList: Array<{ title: string }>

  onClick?: (index: number, event: BaseEvent) => void
}

declare const AtTabs: ComponentClass<AtTabsProps>

export default AtTabs
