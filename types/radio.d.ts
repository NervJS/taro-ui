import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from "@tarojs/components/types/common";

import AtComponent from './base'

export interface RadioOption<T> {
  /**
   * 选项标识符，必须保证唯一
   */
  value: T
  /**
   * 选项标题
   */
  label: string
  /**
   * 选项描述，显示在标题下方的文字
   */
  desc?: string
  /**
   * 是否禁止点击
   * @default false
   */
  disabled?: boolean
}

export interface AtRadioProps<T> extends AtComponent {
  /**
   * 输入框当前值，用户需要通过 onClick 事件来更新 value 值，必填
   */
  value: T
  /**
   * 选项列表
   */
  options: Array<RadioOption<T>>
  /**
   * 点击选项触发事件,开发者需要通过此事件来更新 value，onClick 函数必填
   */
  onClick: (vaule: T, event: CommonEvent) => void
}

declare const AtRadio: ComponentClass<AtRadioProps<any>>

export default AtRadio
