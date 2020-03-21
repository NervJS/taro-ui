import { ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import AtComponent from './base'

declare type OmitInputProps = Omit<
  InputProps,
  'className' | 'type' | 'onBlur' | 'onFocus' | 'onChange' | 'onConfirm'
>
declare type InputFunction<T extends string | number> = (
  value: T,
  event: CommonEvent
) => void

export interface AtInputProps extends AtComponent, OmitInputProps {
  /**
   * 输入框的唯一标识，有传入点击 title 会聚焦输入框
   */
  name: string
  /**
   * 输入框左侧标题，若传入为空，则不显示标题
   */
  title?: string
  /**
   * 输入框类型
   * @defalut 'text'
   */
  type?: 'text' | 'number' | 'password' | 'phone' | 'idcard' | 'digit'
  /**
   * 是否出现错误
   * @default false
   */
  error?: boolean
  /**
   * 是否显示清除按钮，需要传入 onChange 事件来改变 value
   * @default false
   */
  clear?: boolean
  /**
   * 是否显示下划线边框
   * @default true
   */
  border?: boolean
  /**
   * 是否禁止输入，禁止点击按钮
   * @default false
   */
  disabled?: boolean
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 指定 placeholder 的样式，只在小程序有效
   */
  placeholderStyle?: string
  /**
   * 指定 placeholder 的样式类，只在小程序有效
   */
  placeholderClass?: string
  /**
   * 是否可编辑
   * @default true
   */
  editable?: boolean
  /**
   * 键盘弹起时，是否自动上推页面
   * @default false
   */
  adjustPosition?: boolean
  /**
   * 是否自动聚焦
   * @default false
   */
  autoFocus?: boolean
  /**
   * 是否聚焦
   * @default false
   */
  focus?: boolean
  /**
   * 是否必填
   * @default false
   */
  required?: boolean
  /**
   * 输入框失去焦点时触发的事件，v2.0.3 版本可以获取 event 参数
   */
  onBlur?: InputFunction<string | number>
  /**
   * 输入框被选中时触发的事件，v2.0.3 版本可以获取 event 参数
   */
  onFocus?: InputFunction<string | number>
  /**
   * 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，onChange 函数必填。
   * 小程序中，如果想改变 value 的值，需要 return value 从而改变输入框的当前值, v2.0.3 版本可以获取 event 参数
   */
  onChange: InputFunction<string | number>
  /**
   * 点击完成按钮时触发，v2.0.3 版本可以获取 event 参数
   */
  onConfirm?: InputFunction<string | number>
  /**
   * 当 editable 为 false 时，点击组件触发的事件
   */
  onClick?: () => void
  /**
   * 点击错误按钮触发的事件
   */
  onErrorClick?: () => void
}

declare const AtInput: ComponentClass<AtInputProps>

export default AtInput
