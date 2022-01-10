/* eslint-disable @typescript-eslint/ban-ts-ignore */
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Button, Text } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtButtonProps, AtButtonState } from '../../../types/button'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small'
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary'
}

export default class AtButton extends React.Component<
  AtButtonProps,
  AtButtonState
> {
  public static defaultProps: AtButtonProps
  public static propTypes: InferProps<AtButtonProps>

  public constructor(props: AtButtonProps) {
    super(props)
    this.state = {
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY
    }
  }

  private onClick(event: CommonEvent): void {
    this.props.onClick && this.props.onClick(event)
  }

  public render(): JSX.Element {
    const {
      size = 'normal',
      type = '',
      circle,
      full,
      loading,
      disabled,
      customStyle
    } = this.props
    const rootClassName = ['at-button']
    const classObject = {
      'at-button--disabled': disabled,
      [`at-button--${type}`]: TYPE_CLASS[type],
      [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-button--circle': circle,
      'at-button--full': full
    }

    return (
      <Button
        disabled={disabled}
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
        // @ts-ignore
        hoverStyle={{
          opacity: 0.6
        }}
        loading={loading}
        type={type !== 'primary' ? 'default' : 'primary'}
        size={size === 'normal' ? 'default' : 'mini'}
        onClick={this.onClick.bind(this)}
      >
        {type === 'secondary' && this.props.children ? (
          <Text
            className={`at-button--secondary--text at-button--${size}--text`}
          >
            {this.props.children}
          </Text>
        ) : (
          this.props.children
        )}
      </Button>
    )
  }
}

AtButton.defaultProps = {
  size: 'normal',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  // Button props
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: ''
}

AtButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', '']),
  circle: PropTypes.bool,
  full: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  formType: PropTypes.oneOf(['submit', 'reset', '']),
  openType: PropTypes.oneOf([
    'contact',
    'share',
    'getUserInfo',
    'getPhoneNumber',
    'launchApp',
    'openSetting',
    'feedback',
    'getRealnameAuthInfo',
    'getAuthorize',
    'contactShare',
    ''
  ]),
  lang: PropTypes.string,
  sessionFrom: PropTypes.string,
  sendMessageTitle: PropTypes.string,
  sendMessagePath: PropTypes.string,
  sendMessageImg: PropTypes.string,
  showMessageCard: PropTypes.bool,
  appParameter: PropTypes.string,
  onGetUserInfo: PropTypes.func,
  onContact: PropTypes.func,
  onGetPhoneNumber: PropTypes.func,
  onError: PropTypes.func,
  onOpenSetting: PropTypes.func
}
