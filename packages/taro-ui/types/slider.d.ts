import { ComponentClass } from 'react'
import AtComponent from './base'

declare type SliderFunction = (value: number) => void

export interface AtSliderProps extends AtComponent {
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
   * 步长，取值必须大于 0，并且可被 max - min 整除
   * @default 1
   */
  step?: number
  /**
   * 当前取值
   * @default 0
   */
  value?: number
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 已选择的颜色
   * @default #6190e8
   */
  activeColor?: string
  /**
   * 背景条的颜色
   * @default #e9e9e9
   */
  backgroundColor?: string
  /**
   * 滑块的大小，取值范围为 12-28
   * @default 28
   */
  blockSize?: number
  /**
   * 滑块的颜色
   * @default #ffffff
   */
  blockColor?: string
  /**
   * 是否显示当前的 Value
   * @default false
   */
  showValue?: boolean
  /**
   * 完成一次拖动后触发的事件
   */
  onChange?: SliderFunction
  /**
   * 拖动过程中触发的事件
   */
  onChanging?: SliderFunction
}

export interface AtSliderState {
  _value: number
}

declare const AtSlider: ComponentClass<AtSliderProps>

export default AtSlider
