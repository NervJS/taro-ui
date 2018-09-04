import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction, BaseEvent } from '@tarojs/components/types/common'

export interface TabItem {
  max?: number
  dot?: boolean
  text?: string
  title: string
  iconType?: string
  selectedIconType?: string
}

export interface AtTabBarProps {
  fixed?: boolean

  backgroundColor?: string

  current?: number

  iconSize?: number

  fontSize?: number

  color?: string

  selectedColor?: string

  scroll?: boolean

  tabList: TabItem[]

  onClick?: (index: number, event: BaseEvent) => void
}

declare const AtTabBar: ComponentClass<AtTabBarProps>

export default AtTabBar
