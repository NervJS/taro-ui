import { FC } from 'react'
import AtComponent from './base'
import {
  CommonEvent,
  CommonEventFunction,
  BaseEventOrig
} from '@tarojs/components/types/common'

import { InputProps } from '@tarojs/components/types/Input'

export declare type KeyboardHeightEventDetail = {
  /** 键盘高度 */
  height: number
  /** 持续时间 */
  duration: number
}
export interface AtInputItemProps extends InputProps, AtComponent {
  /**
   * 输入框当前值，用户需要通过 onChange 事件的 event.detail.value 来更新 value 值，必填
   */
  value?: string
  placeholder?: string
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 是否必填
   * @default false
   */
  required?: boolean
  /**
   * 最大长度
   */
  maxlength?: number
  /**
   * 标题的内容
   */
  title?: string
  /**
   * 标题右侧icon
   */
  prefix?: ReactDOM
  /**
   * 内容右侧icon 名称
   */
  iconName?: string
  /**
   * 内容右侧icon size
   */
  iconSize?: number
  /**
   * 内容右侧icon color
   */
  iconColor?: string
  /**
   * 内容右侧按钮文案
   */
  buttonTxt?: string
  /**
   * 内容右侧按钮状态
   */
  buttonDisabled?: boolean
  /**
   * 校验报错文案
   */
  validMessage?: string
  /**
   * 是否具有一键清除
   */
  clearable?: boolean
  /**
   * input变化
   */
  onChange?: (value: string, event?: CommonEvent) => void
  onBlur?: CommonEventFunction
  onFocus?: CommonEventFunction
  onKeyboardHeightChange?: (
    event?: BaseEventOrig<KeyboardHeightEventDetail>
  ) => void
  /**
   * 提供单一组件的检验
   */
  onRules?: CommonEventFunction
  /**
   * 自配置按钮点击事件
   */
  onClick?: CommonEventFunction
}
declare const AtInput: FC<AtInputItemProps>

export interface AtInputGroupProps extends AtComponent {
  /**
   * 是否为禁用态
   * @default false
   */
  disabled?: boolean

  /**
   * 渲染group的配置项
   * @default '[]'
   */
  data?: Array<{ value: string; label: string }>
  /**
   * 标题的内容
   */
  title?: string
  /**
   * 值变化时传递
   */
  onChange?: (value: Array) => void
}
export declare const AtInputGroup: FC<AtInputGroupProps>

export default AtInput
