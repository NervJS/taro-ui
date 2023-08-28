import { ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent, { AtIconBaseProps } from './base'

export interface AtAccordionProps extends AtComponent {
  /**
   * 是否默认开启
   * @default false
   */
  open?: boolean
  /**
   * 标题
   */
  title?: string
  /**
   * 图标，仅支持 AtIcon 支持的类型，
   * object 属性有 value color size prefixClass
   */
  icon?: AtIconBaseProps
  /**
   * 是否开启动画
   * @default true
   * @since v2.0.0-beta.3
   */
  isAnimation?: boolean
  /**
   * 是否有头部下划线
   * @default true
   */
  hasBorder?: boolean
  /**
   * 描述信息
   */
  note?: string
  /**
   * 点击头部触发事件
   */
  onClick?: (open: boolean, event: CommonEvent) => void
}

export interface AtAccordionState {
  componentId?: string
  wrapperHeight: number
}

declare const AtAccordion: ComponentClass<AtAccordionProps>

export default AtAccordion
