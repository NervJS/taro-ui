import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface TabItem {
  /**
   * 标题
   */
  title: string
}

export interface AtTabsProps extends AtComponent {
  /**
   * Tab 方向，请跟 AtTabPane 保持一致
   * @default 'horizontal'
   */
  tabDirection?: 'horizontal' | 'vertical'
  /**
   * Tab 高度，当 tabDirection='vertical' 时，需要设置；
   * 当 tabDirection='horizontal' 时，会自动根据内容撑开，请勿设置
   */
  height?: string
  /**
   * 当前选中的标签索引值，从 0 计数，开发者需要通过 onClick 事件来改变 current，从而切换 tab
   * @default 0
   */
  current: number
  /**
   * 是否滚动，当标签太多时，建议使用。否则会出现部分标签被隐藏
   * @default false
   */
  scroll?: boolean
  /**
   * 是否开启切换动画
   * @default true
   */
  animated?: boolean
  /**
   * 是否支持手势滑动切换内容页，当 tabDirection='vertical' 时，无论是否设置，都不支持手势滑动切换内容页
   * @default true
   */
  swipeable?: boolean
  /**
   * tab 列表
   */
  tabList: TabItem[]
  /**
   * 点击或滑动时触发事件
   */
  onClick: (index: number, event: CommonEvent) => void
}

export interface AtTabsState {
  _scrollLeft: number
  _scrollTop: number
  _scrollIntoView: string
}

declare const AtTabs: ComponentClass<AtTabsProps>

export default AtTabs
