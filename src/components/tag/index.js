import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import './index.scss'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}


export default class AtTag extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      active: this.props.active,
      // active: true,
    }
  }

  onClick () {
    if (!this.props.disabled) {
      const active = !this.state.active
      console.log('>>>', this.props.name, active)
      this.setState({
        active,
      })
      // debugger
      this.props.onClick({ name: this.props.name, active })
    }
  }

  render () {
    const {
      size = 'normal',
      type = '',
      circle = false,
      disabled = false,
    } = this.props
    let rootClassName = ['at-tag']
    const sizeClass = SIZE_CLASS[size] || ''
    const disabledClass = disabled ? 'at-tag--disabled' : ''
    const typeClass = TYPE_CLASS[type] ? `at-tag--${type}` : ''
    const activeClass = this.state.active ? 'at-tag--active' : ''
    const circleClass = circle ? 'at-tag--circle' : ''

    rootClassName.push(`at-tag--${sizeClass}`, typeClass, activeClass, circleClass, disabledClass)
    rootClassName = rootClassName.filter(str => str !== '')

    return (
      <View className={rootClassName} onClick={this.onClick.bind(this)}>
        {this.props.children}
      </View>
    )
  }
}

AtTag.defaultProps = {
  size: 'normal',
  type: '',
  name: '',
  circle: false,
  active: false,
  disabled: false,
}

AtTag.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['', 'primary']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
}
