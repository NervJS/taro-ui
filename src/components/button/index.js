import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

const SIZE_CLASS = {
  normal: 'normal',
  large: 'large',
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

  onClick (e) {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(e)
    }
  }

  render () {
    const {
      size = 'normal',
      type = '',
      icon = '',
      active = false,
      loading = false,
      disabled = false,
    } = this.props
    let rootClassName = ['at-button']
    const sizeClass = SIZE_CLASS[size] || ''
    const disabledClass = disabled ? 'at-button--disabled' : ''
    const typeClass = TYPE_CLASS[type] ? `at-button--${type}` : ''
    const activeClass = active ? 'at-button--active' : ''

    rootClassName.push(`at-button--${sizeClass}`, disabledClass, typeClass, activeClass)
    rootClassName = rootClassName.filter(str => str != '')
    // console.log(this.props, this.state)
    return (
      <View className={rootClassName} onClick={this.onClick.bind(this)}>
        {this.props.children}
      </View>
    )
  }
}
