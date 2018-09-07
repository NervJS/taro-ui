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
  style?: string

  fixed?: boolean

  backgroundColor?: string

  current?: number

  iconSize?: number

  fontSize?: number

  color?: string

  selectedColor?: string

  tabList: TabItem[]

  onClick?: (index: number, event: BaseEvent) => void
}

declare const AtTabBar: ComponentClass<AtTabBarProps>

export default AtTabBar
