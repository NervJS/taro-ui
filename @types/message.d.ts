import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtMessageProps extends AtComponent {

}

declare const AtMessage: ComponentClass<AtMessageProps>

export default AtMessage
