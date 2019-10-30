import { MouseEvent, ComponentClass } from 'react'
import { CommonEventFunction } from '@tarojs/components/types/common'

import AtComponent from './base'

export interface AtButtonProps extends AtComponent{
  size?: 'normal' | 'small'

  type?: 'primary' | 'secondary'

  circle?: boolean

  full?: boolean

  loading?: boolean

  disabled?: boolean

  className?: string | Array<string>

  customStyle?: object | string

  onClick?: CommonEventFunction

  // start Button props
  formType?: 'submit' | 'reset'
  openType?: 'contact' | 'share' | 'getUserInfo' | 'getPhoneNumber' | 'launchApp' | 'openSetting' | 'feedback' | 'getRealnameAuthInfo'
  lang?: string
  sessionFrom?: string
  sendMessageTitle?: string,
  sendMessagePath?: string,
  sendMessageImg?: string,
  showMessageCard?: boolean,
  appParameter?: string,
  onGetUserInfo?: CommonEventFunction
  onContact?: CommonEventFunction
  onGetPhoneNumber?: CommonEventFunction
  onError?: CommonEventFunction
  onOpenSetting?: CommonEventFunction
  // end Button props
}

declare const AtButton: ComponentClass<AtButtonProps>

export default AtButton
