import { ComponentClass } from 'react'
import {
  CommonEventFunction,
  CommonEvent
} from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtSearchBarProps extends AtComponent {
  /**
   * 输入框当前值
   * @type {string}
   * @description 必填，开发者需要通过 onChange 事件来更新 value 值
   */
  value: string
  /**
   * 输入框占位符
   * @type {string}
   */
  placeholder?: string
  /**
   * 最大输入长度
   * @type {number}
   * @default 140
   */
  maxLength?: number
  /**
   * 是否固定顶部
   * @type {boolean}
   * @default false
   */
  fixed?: boolean
  /**
   * 是否聚焦
   * @type {boolean}
   * @default false
   */
  focus?: boolean
  /**
   * 是否禁止输入
   * @type {boolean}
   * @default false
   */
  disabled?: boolean
  /**
   * 是否一直显示右侧按钮
   * @type {boolean}
   * @default false
   */
  showActionButton?: boolean
  /**
   * 右侧按钮文案
   * @type {string}
   * @default '搜索'
   */
  actionName?: string
  /**
   * 输入框输入类型
   * @description 可选择的值 'text', 'number', 'idcard', 'digit'
   * @type {('text'|'number'|'idcard'|'digit')}
   * @default 'text'
   */
  inputType?: 'text' | 'number' | 'idcard' | 'digit'
  /** 使用原生键盘
   * @default true
   * @supported alipay
   */
  enableNative?: boolean
  /**
   * 输入框值改变时触发的事件
   * @description 必填，开发者需要通过 onChange 事件来更新 value 值变化
   */
  onChange: (value: string, event: CommonEvent) => void
  /**
   * 输入框聚焦时触发
   * @description height 参数在基础库 1.9.90 起支持
   */
  onFocus?: CommonEventFunction
  /**
   * 输入框值失去焦点时触发的事件
   */
  onBlur?: CommonEventFunction
  /**
   * 点击清除按钮时触发事件
   * @description 若不传，则默认传空字符串调用 onChange 函数，Taro UI 2.0.3 起支持
   */
  onClear?: CommonEventFunction
  /**
   * 点击完成按钮时触发
   * @description H5 版中目前需借用 Form 组件的onSubmit事件来替代
   */
  onConfirm?: CommonEventFunction
  /**
   * 右侧按钮点击触发事件
   */
  onActionClick?: CommonEventFunction
}

export interface AtSearchBarState {
  isFocus: boolean
}

declare const AtSearchBar: ComponentClass<AtSearchBarProps>

export default AtSearchBar
