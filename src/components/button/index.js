
import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, Button, Form } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtLoading from '../loading/index'
import AtComponent from '../../common/component'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary',
}

export default class AtButton extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {
      isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
    }
  }

  onClick () {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(...arguments)
    }
  }

  onGetUserInfo () {
    this.props.onGetUserInfo && this.props.onGetUserInfo(...arguments)
  }

  onContact () {
    this.props.onContact && this.props.onContact(...arguments)
  }

  onGetPhoneNumber () {
    this.props.onGetPhoneNumber && this.props.onGetPhoneNumber(...arguments)
  }

  onError () {
    this.props.onError && this.props.onError(...arguments)
  }

  onOpenSetting () {
    this.props.onOpenSetting && this.props.onOpenSetting(...arguments)
  }

  onSumit () {
    if (this.state.isWEAPP || this.state.isWEB) {
      this.$scope.triggerEvent('submit', arguments[0].detail, {
        bubbles: true,
        composed: true,
      })
    }
  }

  onReset () {
    if (this.state.isWEAPP || this.state.isWEB) {
      this.$scope.triggerEvent('reset', arguments[0].detail, {
        bubbles: true,
        composed: true,
      })
    }
  }

  render () {
    const {
      size = 'normal',
      type = '',
      circle,
      full,
      loading,
      disabled,
      customStyle,
      formType,
      openType,
      lang,
      sessionFrom,
      sendMessageTitle,
      sendMessagePath,
      sendMessageImg,
      showMessageCard,
      appParameter,
    } = this.props
    const {
      isWEAPP,
      isALIPAY,
      isWEB,
    } = this.state
    const rootClassName = ['at-button']
    const classObject = {
      [`at-button--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-button--disabled': disabled,
      [`at-button--${type}`]: TYPE_CLASS[type],
      'at-button--circle': circle,
      'at-button--full': full,
    }
    const loadingColor = type === 'primary' ? '#fff' : ''
    const loadingSize = size === 'small' ? '30' : 0
    let component
    if (loading) {
      component = <View className='at-button__icon'><AtLoading color={loadingColor} size={loadingSize} /></View>
      rootClassName.push('at-button--icon')
    }

    const webButton = <Button className='at-button__wxbutton'
      lang={lang}
      type={formType === 'submit' || formType === 'reset' ? formType : 'button'}
    ></Button>

    const button = <Button className='at-button__wxbutton'
      formType={formType}
      openType={openType}
      lang={lang}
      sessionFrom={sessionFrom}
      sendMessageTitle={sendMessageTitle}
      sendMessagePath={sendMessagePath}
      sendMessageImg={sendMessageImg}
      showMessageCard={showMessageCard}
      appParameter={appParameter}
      onGetUserInfo={this.onGetUserInfo.bind(this)}
      onGetPhoneNumber={this.onGetPhoneNumber.bind(this)}
      onOpenSetting={this.onOpenSetting.bind(this)}
      onError={this.onError.bind(this)}
      onContact={this.onContact.bind(this)}
    >
    </Button>

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
        onClick={this.onClick.bind(this)}
      >
        {isWEB && !disabled && webButton}
        {isWEAPP && !disabled && <Form reportSubmit onSubmit={this.onSumit.bind(this)} onReset={this.onReset.bind(this)}>{button}</Form>}
        {isALIPAY && !disabled && button}
        {component}
        <View className='at-button__text'>{this.props.children}</View>
      </View>
    )
  }
}

AtButton.defaultProps = {
  size: 'normal',
  type: '',
  circle: false,
  full: false,
  loading: false,
  disabled: false,
  customStyle: {},
  onClick: () => {},
  // Button props
  formType: '',
  openType: '',
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
  onGetUserInfo: () => {},
  onContact: () => {},
  onGetPhoneNumber: () => {},
  onError: () => {},
  onOpenSetting: () => {},
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
  openType: PropTypes.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo', '']),
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
  onOpenSetting: PropTypes.func,
}
