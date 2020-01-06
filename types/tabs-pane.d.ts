import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtTabsPaneProps extends AtComponent {
  /**
   * Tab 方向，请跟 AtTabs 保持一致
   * @default 'horizontal'
   */
  tabDirection?: 'horizontal' | 'vertical'
  /**
   * 当前选中的标签索引值，从 0 计数，请跟 AtTabs 保持一致
   * @default 0
   */
  current: number
  /**
   * tabPane 排序，从 0 计数
   * @default 0
   */
  index: number
}

declare const AtTabsPane: ComponentClass<AtTabsPaneProps>

export default AtTabsPane
