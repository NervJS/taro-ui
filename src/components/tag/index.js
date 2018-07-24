import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import PropTypes from 'prop-types';

import './index.scss'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}


export default class AtTag extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      active: this.props.active,
    }
  }

  onClick() {
    if (!this.props.disabled) {
      let active = !this.state.active
      this.setState({
        active,
      })
      this.props.onClick(...arguments, {active})
    }
  }

  render(){
    let {
      size = 'normal',
      type = '',
      circle = false,
      // active = false,
      disabled = false,
    } = this.props
    let rootClassName = ['at-tag']
    let sizeClass = SIZE_CLASS[size] || ''
    let disabledClass = disabled? 'at-tag--disabled': ''
    let typeClass = TYPE_CLASS[type]? `at-tag--${type}`: ''
    let activeClass = this.state.active? 'at-tag--active': ''
    let circleClass = circle? 'at-tag--circle': ''
    // let loadingClass = loading? 'at-tag--loading': ''
    // let iconClass = loading? 'at-tag--icon': ''

    rootClassName.push(`at-tag--${sizeClass}`, typeClass, activeClass, circleClass, disabledClass)
    rootClassName = rootClassName.filter(str => str != '')

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
  circle: false,
  active: false,
  disabled: false,
}

AtTag.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['', 'primary']),
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
};
