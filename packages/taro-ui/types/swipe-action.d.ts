import { ComponentClass } from 'react'
import {
  CommonEventFunction,
  CommonEvent
} from '@tarojs/components/types/common'

import AtComponent from './base'

export interface SwipeActionOption {
  /**
   * 选项名称
   */
  text: string
  /**
   * 选项样式
   */
  style?: object | string
  /**
   * 选项样式类名
   */
  className?: string
}

export interface AtSwipeActionProps extends AtComponent {
  /**
   * 是否开启
   * @default false
   */
  isOpened?: boolean
  /**
   * 是否禁止滑动
   * @default false
   */
  disabled?: boolean
  /**
   * 点击选项时，是否自动关闭
   * @default false
   */
  autoClose?: boolean
  /**
   * 展示的选项数组
   */
  options?: SwipeActionOption[]
  /**
   * 点击触发事件
   */
  onClick?: (item: SwipeActionOption, index: number, event: CommonEvent) => void
  /**
   * 完全打开时触发
   */
  onOpened?: CommonEventFunction
  /**
   * 完全关闭时触发
   */
  onClosed?: CommonEventFunction

  /**
   * 滑块最大滑动距离，一般是按钮个数乘以按钮宽度
   * @deprecated 已废弃，无需设置 maxDistance
   */
  maxDistance?: number

  /**
   * SwipeAction 组件宽度
   * @deprecated 已废弃，无需设置 areaWidth
   */
  areaWidth?: number
}

export interface AtSwipeActionState {
  componentId: string
  offsetSize: number
  _isOpened: boolean
  needAnimation: boolean
  eleWidth: number
  maxOffsetSize: number
}

export interface AtSwipeActionOptionsProps extends AtComponent {
  componentId: string
  options: SwipeActionOption[]
}

declare const AtSwipeAction: ComponentClass<AtSwipeActionProps>

export default AtSwipeAction
