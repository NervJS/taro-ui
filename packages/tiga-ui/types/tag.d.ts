import React, { ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface TagInfo {
  name: string
  active: boolean
}

export interface AtTagProps extends AtComponent {
  /**
   * 大小尺寸
   * @default 'normal'
   */
  size?: 'normal' | 'small'
  /**
   * 标签名字
   */
  name?: string
  /**
   * 是否为选中态
   * @default false
   */
  active?: boolean
  /**
   * 是否为禁用态
   * @default false
   */
  disabled?: boolean
  /**
   * 点击标签时触发，返回标签名字和状态的对象
   */
  onClick?: (tagInfo: TagInfo, event: CommonEvent) => void
}

declare const AtTag: ComponentClass<AtTagProps>

export interface AtTagGroupProps extends AtComponent {
  /**
   * 大小尺寸
   * @default 'normal'
   */
  size?: 'normal' | 'small'
  /**
   * 标签组的适用场景
   * @default 'form'
   */
  type?: 'header' | 'form'
  /**
   * 是否为禁用态
   * @default false
   */
  disabled?: boolean
  /**
   * 标签组的适用场景
   * @default 'true'
   */
  isWrap?: boolean
  /**
   * 超出滚动
   * @default 'false' 默认换行
   */
  scrollX?: boolean
  /**
   * 标签组的适用场景
   * @default '[]'
   */
  data?: Array<{ name: string; active: boolean }>
  /**
   * 点击标签时触发，返回标签名字和状态的对象
   */
  onClick?: (tagInfo: TagInfo, event: CommonEvent) => void
}

export declare const AtTagGroup: ComponentClass<TagGroupProps>

export default AtTag
