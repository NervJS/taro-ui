
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtIcon from '../icon/index'

import './index.scss'

const SIZE_CLASS = {
  normal: 'normal',
  // large: 'large',
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
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(...arguments)
    }
  }

  render () {
    const {
      size = 'normal',
      type = '',
      icon = '',
      circle = false,
      active = false,
      loading = false,
      disabled = false,
    } = this.props
    let rootClassName = ['at-button']
    const sizeClass = SIZE_CLASS[size] || ''
    const disabledClass = disabled ? 'at-button--disabled' : ''
    const typeClass = TYPE_CLASS[type] ? `at-button--${type}` : ''
    const activeClass = active ? 'at-button--active' : ''
    const circleClass = circle ? 'at-button--circle' : ''

    rootClassName.push(`at-button--${sizeClass}`, typeClass, activeClass, circleClass, disabledClass)
    rootClassName = rootClassName.filter(str => str !== '')

    let component
    // const _style = {
    //   marginRight: '5px',
    // }
    if (icon) {
      component = <AtIcon value={icon} size='20'></AtIcon>
    } else if (loading) {
      component = <AtIcon value='clock' size='20'></AtIcon>
    }
    return (
      <View className={rootClassName} onClick={this.onClick.bind(this)}>
        {component}{this.props.children}
      </View>
    )
  }
}
