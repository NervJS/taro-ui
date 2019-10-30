import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtActionSheetItemProps extends AtComponent {

  onClick?: CommonEventFunction

}

declare const AtActionSheetItem: ComponentClass<AtActionSheetItemProps>

export default AtActionSheetItem
