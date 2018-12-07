import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtMessage extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: ''
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: false,
      message: '',
      type: 'info',
      duration: 3000,
    }
    this._timer = null
  }

  bindMessageListener () {
    Taro.eventCenter.on('atMessage', (options = {}) => {
      options.isOpened = true
      this.setState(options, () => {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.setState({
            isOpened: false
          })
        }, this.state.duration)
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
      message,
      isOpened,
      type,
    } = this.state

    return (
      <View
        className={
          classNames({
            'at-message': true,
            'at-message--show': isOpened,
            'at-message--hidden': !isOpened
          }, `at-message--${type}`, className)}
        style={customStyle}
      >
        {message}
      </View>
    )
  }
}
