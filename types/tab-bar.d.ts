import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface TabItem {
  max?: number
  dot?: boolean
  text?: string
  title: string
  iconPrefixClass?: string
  iconType?: string
  selectedIconType?: string
  image?: string
  selectedImage?: string
}

export interface AtTabBarProps extends AtComponent{
  fixed?: boolean

  backgroundColor?: string

  current: number

  iconSize?: number

  fontSize?: number

  color?: string

  selectedColor?: string

  tabList: TabItem[]

  onClick: (index: number, event: CommonEvent) => void
}

declare const AtTabBar: ComponentClass<AtTabBarProps>

export default AtTabBar
