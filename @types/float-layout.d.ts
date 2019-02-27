/* eslint-disable no-restricted-globals */
import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtFloatLayoutProps extends AtComponent {
  isOpened: boolean

  title?: string

  scrollY?: boolean

  scrollX?: boolean

  scrollTop?: number

  scrollLeft?: number

  upperThreshold?: number

  lowerThreshold?: number

  scrollWithAnimation?: boolean

  onClose?: CommonEventFunction

  onScroll?: CommonEventFunction

  onScrollToUpper?: CommonEventFunction

  onScrollToLower?: CommonEventFunction
}

declare const AtFloatLayout: ComponentClass<AtFloatLayoutProps>

export default AtFloatLayout
