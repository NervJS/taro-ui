import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtComponent from '../../common/component'
import './index.scss'

const SIZE_CLASS = {
  normal: 'normal',
  small: 'small',
}

const TYPE_CLASS = {
  primary: 'primary',
}


export default class AtTag extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        active: nextProps.active,
      })
    }
  }
  
  onClick () {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick({ name: this.props.name, active: this.props.active })
    }
  }

  render () {
    const {
      size = 'normal',
      type = '',
      circle = false,
      disabled = false,
      active = false,
    } = this.props
    let rootClassName = ['at-tag']
    const sizeClass = SIZE_CLASS[size] || ''
    const disabledClass = disabled ? 'at-tag--disabled' : ''
    const typeClass = TYPE_CLASS[type] ? `at-tag--${type}` : ''
    const activeClass = active ? 'at-tag--active' : ''
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
  onClick: () => {},
}

AtTag.propTypes = {
  size: PropTypes.oneOf(['normal', 'small']),
  type: PropTypes.oneOf(['', 'primary']),
  name: PropTypes.string,
  circle: PropTypes.bool,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}
