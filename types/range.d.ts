import { ComponentClass } from 'react'

import AtComponent from './base'

type RangeTuple = [number, number]

export interface AtRangeProps extends AtComponent {
  /**
   * 滑块样式
   */
  sliderStyle?: string | Object
  /**
   * 未选中部分滑动条的样式
   */
  railStyle?: string | Object
  /**
   * 选中部分滑动条的样式
   */
  trackStyle?: string | Object
  /**
   * 当前取值
   * @default [0, 0]
   */
  value?: RangeTuple
  /**
   * 最小值
   * @default 0
   */
  min?: number
  /**
   * 最大值
   * @default 100
   */
  max?: number
  /**
   * 滑块大小
   * @default 28
   */
  blockSize?: number
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 当 Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入。
   */
  onChange?: (value: RangeTuple) => void
  /**
   * 与 onTouchEnd 触发时机一致，把当前值作为参数传入。
   */
  onAfterChange?: (value: RangeTuple) => void
}

export interface AtRangeState {
  aX: number
  bX: number
  [sliderName: string]: number
}

declare const AtRange: ComponentClass<AtRangeProps>

export default AtRange
