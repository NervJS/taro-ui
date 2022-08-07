import { ComponentClass } from 'react'

import AtComponent from './base'

export interface AtAvatarProps extends AtComponent {
  /**
   * 头像大小
   * @default 'normal'
   */
  size?: 'large' | 'normal' | 'small'
  /**
   * 头像是否圆形
   * @default false
   */
  circle?: boolean
  /**
   * 以文字形式展示头像
   */
  text?: string
  /**
   * 头像图片地址
   */
  image?: string
  /**
   * 参考微信[开放数据](https://developers.weixin.qq.com/miniprogram/dev/component/open-data.html)
   *
   * **注意：** openData 仅支持 type 为 userAvatarUrl
   */
  openData?: { type: 'userAvatarUrl' }
}

export interface AtAvatarState {
  isWEAPP: boolean
  _width?: number
}

declare const AtAvatar: ComponentClass<AtAvatarProps>

export default AtAvatar
