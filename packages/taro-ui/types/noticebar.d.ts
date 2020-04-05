import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtNoticeBarProps extends AtComponent {
  /**
   * 是否需要关闭按钮
   * @default false
   */
  close?: boolean
  /**
   * 内容是否单行
   * @default false
   */
  single?: boolean
  /**
   * 内容是否滚动（内容只能单行）
   * @default false
   */
  marquee?: boolean
  /**
   * 内容滚动速度 （默认速度100px/秒）
   * @default 100
   */
  speed?: number
  /**
   * “查看更多”链接文本
   * @default '查看详情'
   */
  moreText?: string
  /**
   * “查看更多”是否显示（内容只能单行）
   * @default false
   */
  showMore?: boolean
  /**
   * 内容前的 Icon 图标
   */
  icon?: string
  /**
   * 关闭时触发
   */
  onClose?: (event: CommonEvent) => void
  /**
   * 点击”查看更多“时触发
   */
  onGotoMore?: (event: CommonEvent) => void
}

export interface AtNoticeBarState {
  show: boolean
  animElemId: string
  animationData: object[]
  dura: number
  isWEAPP: boolean
  isALIPAY: boolean
  isWEB: boolean
}

declare const AtNoticeBar: ComponentClass<AtNoticeBarProps>

export default AtNoticeBar
