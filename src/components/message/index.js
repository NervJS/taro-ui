import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtMessage extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {
      _isOpened: false,
      _message: '',
      _type: 'info',
      _duration: 3000,
    }
    this._timer = null
  }

  bindMessageListener () {
    Taro.eventCenter.on('atMessage', (options = {}) => {
      const { message, type, duration } = options
      const newState = {
        _isOpened: true,
        _message: message,
        _type: type,
        _duration: duration || this.state._duration
      }
      this.setState(newState, () => {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.setState({
            _isOpened: false
          })
        }, this.state._duration)
      })
    })
    // 绑定函数
    Taro.atMessage = Taro.eventCenter.trigger.bind(Taro.eventCenter, 'atMessage')
  }

  componentDidShow () {
    this.bindMessageListener()
  }

  componentDidMount () {
    this.bindMessageListener()
  }

  componentDidHide () {
    Taro.eventCenter.off('atMessage')
  }

  componentWillUnmount () {
    Taro.eventCenter.off('atMessage')
  }

  render () {
    const {
      className,
      customStyle,
    } = this.props
    const {
      _message,
      _isOpened,
      _type,
    } = this.state
    const rootCls = classNames({
      'at-message': true,
      'at-message--show': _isOpened,
      'at-message--hidden': !_isOpened
    }, `at-message--${_type}`, className)

    return <View className={rootCls} style={customStyle}>
      {_message}
    </View>
  }
}

AtMessage.defaultProps = {
  customStyle: '',
  className: '',
}

AtMessage.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
}
