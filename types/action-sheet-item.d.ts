import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtActionSheetItemProps extends AtComponent {
  /**
   * 点击 Item 触发的事件
   */
  onClick?: CommonEventFunction
}

declare const AtActionSheetItem: ComponentClass<AtActionSheetItemProps>

export default AtActionSheetItem
