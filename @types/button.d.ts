import { MouseEvent, ComponentClass } from 'react'
import { BaseEventFunction } from '@tarojs/components/types/common'

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

  onClick?: (event: BaseEventFunction) => void

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
  onGetUserInfo?: (event: BaseEventFunction) => void,
  onContact?: (event: BaseEventFunction) => void,
  onGetPhoneNumber?: (event: BaseEventFunction) => void,
  onError?: (event: BaseEventFunction) => void,
  onOpenSetting?: (event: BaseEventFunction) => void,
  // end Button props
}

declare const AtButton: ComponentClass<AtButtonProps>

export default AtButton
