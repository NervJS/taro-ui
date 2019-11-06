import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtActionSheetProps extends AtComponent {
  /**
   * 是否展示元素
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 取消按钮的内容
   */
  cancelText?: string
  /**
   * 元素被关闭触发的事件
   */
  onClose?: CommonEventFunction
  /**
   * 点击了底部取消按钮触发的事件
   */
  onCancel?: CommonEventFunction
}

export interface AtActionSheetState {
  _isOpened: boolean
}

export interface AtActionSheetHeaderProps extends AtComponent {}

export interface AtActionSheetFooterProps extends AtComponent {
  onClick?: Function
}

export interface AtActionSheetBodyProps extends AtComponent {}

export interface AtActionSheetItemProps extends AtComponent {
  /**
   * 点击 Item 触发的事件
   */
  onClick?: CommonEventFunction
}

declare const AtActionSheetItem: ComponentClass<AtActionSheetItemProps>

declare const AtActionSheet: ComponentClass<AtActionSheetProps>

export default AtActionSheet

export { AtActionSheetItem }
