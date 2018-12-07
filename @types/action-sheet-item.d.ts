import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtActionSheetItemProps extends AtComponent {

  onClick?: (event: BaseEventFunction) => void

}

declare const AtActionSheetItem: ComponentClass<AtActionSheetItemProps>

export default AtActionSheetItem
