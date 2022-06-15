import { MouseEvent, ComponentClass } from 'react'

import AtComponent from './base'

export interface AtSwitchProps extends AtComponent {
  /**
   * 标签名
   */
  // title?: string
  /**
   * 选中时的背景颜色 $color-brand
   * @default #ff4d13
   */
  color?: string
  /**
   * 是否显示开启
   * @default false
   */
  checked?: boolean
  /**
   * 是否禁止点击
   * @default false
   */
  disabled?: boolean
  /**
   * 背景颜色 $color-border-heavie
   * @default #e0e0e0
   * @supported rn，其他端使用类改样式
   */
  backgroundColor?: string
  /**
   * 切换动画的时长
   * @default 200
   * @supported rn，其他端使用类改样式
   */
  duration?: number
  /**
   * 宽度
   * @default 51
   * @supported rn，其他端使用类改样式
   */
  switchWidth?: number
  /**
   * 内边距
   * @default 2
   * @supported rn，其他端使用类改样式
   */
  switchPadding?: number
  /**
   * 按钮的宽度
   * @default 27
   * @supported rn，其他端使用类改样式
   */
  buttonWidth?: number
  /**
   * 按钮的颜色
   * @default #fff
   * @supported rn，其他端使用类改样式
   */
  buttonColor?: string
  /**
   * 是否显示下划线边框
   * @default false
   */
  // border?: boolean
  /**
   * 输入框值改变时触发的事件
   */
  onChange?: (value: boolean) => void
}

declare const AtSwitch: ComponentClass<AtSwitchProps>

export default AtSwitch
