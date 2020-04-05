import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtSegmentedControlProps extends AtComponent {
  /**
   * 当前选中的 tab 索引值，从 0 计数
   * @default 0
   */
  current: number
  /**
   * 背景颜色与选中标签字体的颜色
   * @default #fff
   */
  color?: string
  /**
   * 选中的标签背景色与边框颜色
   * @default #6190E8
   */
  selectedColor?: string
  /**
   * 字体大小，单位 h5 为 rem，小程序为 rem
   * @default 28
   */
  fontSize?: number
  /**
   * 是否禁止点击
   * @default false
   */
  disabled?: boolean
  /**
   * 选项数组，值是字符串，eg: ['标签页1', '标签页2']
   */
  values: string[]
  /**
   * 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化，onClick 函数必填
   */
  onClick: (index: number, event: CommonEvent) => void
}

declare const AtSegmentedControl: ComponentClass<AtSegmentedControlProps>

export default AtSegmentedControl
