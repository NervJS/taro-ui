
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../icon/index'

import './index.scss'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
  secondary: 'secondary',
}


export default class AtButton extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(...arguments)
    }
  }

  render () {
    const {
      size = 'normal',
      type = '',
      circle,
      loading,
      disabled,
    } = this.props
    let rootClassName = ['at-button']
    const sizeClass = SIZE_CLASS[size] || ''
    const disabledClass = disabled ? 'at-button--disabled' : ''
    const typeClass = TYPE_CLASS[type] ? `at-button--${type}` : ''
    const circleClass = circle ? 'at-button--circle' : ''

    rootClassName.push(`at-button--${sizeClass}`, typeClass, circleClass, disabledClass)
    rootClassName = rootClassName.filter(str => str !== '')

    let component
    if (loading) {
      component = <View className='at-button__icon'><AtIcon value='loading' size='20'></AtIcon></View>
      rootClassName.push('at-button--icon')
    }

    return (
      <View className={rootClassName} onClick={this.onClick.bind(this)}>
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
}

AtButton.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  circle: PropTypes.bool,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
}
