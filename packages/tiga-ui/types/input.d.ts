import { FC } from 'react'
import { BaseEventOrig, ITouchEvent } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import AtComponent from './base'

declare type OmitInputProps = Omit<
  InputProps,
  | 'className'
  | 'type'
  | 'onBlur'
  | 'onFocus'
  | 'onChange'
  | 'onConfirm'
  | 'onKeyboardHeightChange'
>

declare type InputFunction<T extends string | number, U = any, R = void> = (
  value: T,
  event?: BaseEventOrig<U>
) => R

declare type InputBaseEventDetail = {
  /** 输入值 */
  value: string | number
}

export declare type InputEventDetail = InputBaseEventDetail & {
  /** 光标位置 */
  cursor: number
  /** 键值 */
  keyCode: number
}

export declare type FocusEventDetail = InputBaseEventDetail & {
  /** 键盘高度 */
  height: number
}

export declare type BlurEventDetail = InputBaseEventDetail

export declare type ConfirmEventDetail = InputBaseEventDetail

export declare type KeyboardHeightEventDetail = {
  /** 键盘高度 */
  height: number
  /** 持续时间 */
  duration: number
}

export interface AtInputItemProps extends AtComponent {
  /**
   * input的值
   */
  prefix?: ReactDOM
  suffix?: ReactDOM
  name?: string
  value: any
  placeholder?: string
  autoSize?: boolean
  rules?: CommonEventFunction
  iconName?: string
  iconSize?: number
  /**
   * 指定 placeholder 的样式，只在小程序有效
   */
  placeholderStyle?: string
  /**
   * 指定 placeholder 的样式类，只在小程序有效
   */
  placeholderClass?: string
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
   * 标题的内容
   */
  title?: string
  /**
   * 标题右侧icon
   */
  titleIcon?: string
  /**
   * 内容右侧icon
   */
  buttonTxt?: string
  buttonDisabled?: boolean
  /**
   * 校验报错文案
   */
  validMessage?: string
  /**
   * 是否具有一键清除
   */
  clearable?: boolean
  classSuffix?: string
  customClass?: string
  /**
   * input变化
   */
  onChange?: CommonEventFunction
  /**
   * 元素被关闭之后触发的事件
   */
  onClick?: CommonEventFunction
  onBlur?: CommonEventFunction
  onFocus?: CommonEventFunction
  onKeyboardHeightChange?: CommonEventFunction
}
declare const AtInputItem: FC<AtInputItemProps>
export interface AtInputGroupProps extends AtComponent {
  /**
   * 大小尺寸
   * @default 'normal'
   */
  size?: 'normal' | 'small'
  /**
   * 是否为禁用态
   * @default false
   */
  disabled?: boolean

  /**
   * 标签组的适用场景
   * @default '[]'
   */
  value?: Array<{ value: string; label: string }>
  title?: string
  /**
   * 点击标签时触发，返回标签名字和状态的对象
   */
  onChange?: (value: any) => void
}
declare const AtInputGroup: FC<AtInputGroupProps>
export default AtInputItem
