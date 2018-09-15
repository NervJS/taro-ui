
import Taro from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtLoading from '../loading/index'

import AtComponent from '../../common/component'
import './index.scss'

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
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      BUTTON_PROPS_FUNC: {
        ONGETUSERINFO: 'onGetUserInfo',
        ONGETPHONENUMBER: 'onGetPhoneNumber',
        ONCONTACT: 'onContact',
        ONERROR: 'onError',
        ONOPENSETTING: 'onOpenSetting'
      }
    }
  }

  onClick () {
    console.log(...arguments)
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(...arguments)
    }
  }

  onButtonCall () {
    const _arg = [...arguments]
    const type = _arg.shift()
    if (!type || this.props.disabled) return
    this.props[type] && this.props[type](..._arg)
  }

  render () {
    const {
      size = 'normal',
      type = '',
      circle,
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
      BUTTON_PROPS_FUNC,
    } = this.state
    let rootClassName = ['at-button']
    const sizeClass = SIZE_CLASS[size] || ''
    const disabledClass = disabled ? 'at-button--disabled' : ''
    const typeClass = TYPE_CLASS[type] ? `at-button--${type}` : ''
    const circleClass = circle ? 'at-button--circle' : ''

    rootClassName.push(`at-button--${sizeClass}`, typeClass, circleClass, disabledClass)
    rootClassName = rootClassName.filter(str => str !== '')
    const loadingColor = type === 'primary' ? '#fff' : '#6190E8'
    const loadingSize = size === 'small' ? '16' : '18'
    let component
    if (loading) {
      component = <View className='at-button__icon'><AtLoading color={loadingColor} size={loadingSize} /></View>
      rootClassName.push('at-button--icon')
    }
    return (
      <View
        className={this.getClassName(rootClassName, this.props.className)}
        style={customStyle}
        onClick={this.onClick.bind(this)}
      >
        {isWEAPP && !disabled && <Button className='at-button__wxbutton'
          formType={formType}
          openType={openType}
          lang={lang}
          sessionFrom={sessionFrom}
          sendMessageTitle={sendMessageTitle}
          sendMessagePath={sendMessagePath}
          sendMessageImg={sendMessageImg}
          showMessageCard={showMessageCard}
          appParameter={appParameter}
          onGetUserInfo={this.onButtonCall.bind(this, BUTTON_PROPS_FUNC.ONGETUSERINFO)}
          onGetPhoneNumber={this.onButtonCall.bind(this, BUTTON_PROPS_FUNC.ONGETPHONENUMBER)}
          onOpenSetting={this.onButtonCall.bind(this, BUTTON_PROPS_FUNC.ONOPENSETTING)}
          onError={this.onButtonCall.bind(this, BUTTON_PROPS_FUNC.ONERROR)}
          onContact={this.onButtonCall.bind(this, BUTTON_PROPS_FUNC.ONCONTACT)}
        >
        </Button>}
        {component}<View className='at-button__text'>{this.props.children}</View>
      </View>
    )
  }
}

AtButton.defaultProps = {
  size: 'normal',
  type: '',
  circle: false,
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
  type: PropTypes.oneOf(['primary', 'secondary']),
  circle: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),

  formType: PropTypes.oneOf(['submit', 'reset']),
  openType: PropTypes.oneOf(['contact', 'share', 'getUserInfo', 'getPhoneNumber', 'launchApp', 'openSetting', 'feedback', 'getRealnameAuthInfo']),
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
