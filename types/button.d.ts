import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtButtonProps extends AtComponent {
  /**
   * 按钮的大小
   */
  size?: 'normal' | 'small'
  /**
   * 按钮的类型
   */
  type?: 'primary' | 'secondary'
  /**
   * 设置按钮圆角
   * @default false
   */
  circle?: boolean
  /**
   * 是否通栏样式（即按钮宽度为屏幕宽度时的样式）
   * @default false
   */
  full?: boolean
  /**
   * 设置按钮的载入状态
   * @default false
   */
  loading?: boolean
  /**
   * 设置按钮为禁用态（不可点击）
   * @default false
   */
  disabled?: boolean
  /**
   * 点击按钮时触发
   */
  onClick?: CommonEventFunction

  // start Button props
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  formType?: 'submit' | 'reset'
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  openType?: 'contact' | 'share' | 'getUserInfo' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'feedback' | 'getRealnameAuthInfo' | 'getAuthorize'
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  lang?: string
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  sessionFrom?: string
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  sendMessageTitle?: string,
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  sendMessagePath?: string,
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  sendMessageImg?: string,
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  showMessageCard?: boolean,
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  appParameter?: string,
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  onGetUserInfo?: CommonEventFunction
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  onContact?: CommonEventFunction
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  onGetPhoneNumber?: CommonEventFunction
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  onError?: CommonEventFunction
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  onOpenSetting?: CommonEventFunction
  /**
   * 参考[微信button文档](https://developers.weixin.qq.com/miniprogram/dev/component/button.html)
   */
  // end Button props
}

export interface AtButtonState {
  isWEB: boolean
  isWEAPP: boolean
  isALIPAY: boolean
}

declare const AtButton: ComponentClass<AtButtonProps>

export default AtButton
