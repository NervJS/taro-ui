import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"
import { AtIcon } from "../icon/index"

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
  constructor() {
    super(...arguments)
    this.state = {
      
    }
  }

  onClick() {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(...arguments)
    }
  }

  render(){
    let {
      size = 'normal',
      type = '',
      icon = '',
      circle = false,
      active = false,
      loading = false,
      disabled = false,
    } = this.props
    let rootClassName = ['at-button']
    let sizeClass = SIZE_CLASS[size] || ''
    let disabledClass = disabled? 'at-button--disabled': ''
    let typeClass = TYPE_CLASS[type]? `at-button--${type}`: ''
    let activeClass = active? 'at-button--active': ''
    let circleClass = circle? 'at-button--circle': ''
    // let loadingClass = loading? 'at-button--loading': ''
    // let iconClass = loading? 'at-button--icon': ''

    rootClassName.push(`at-button--${sizeClass}`, typeClass, activeClass, circleClass, disabledClass)
    rootClassName = rootClassName.filter(str => str != '')
    console.log('loading====', loading)
    return (
      <View className={rootClassName} onClick={this.onClick.bind(this)}>
        {loading && <AtIcon value="arrow-left"></AtIcon>}
        {icon && <AtIcon value={icon}></AtIcon>}
        {this.props.children}
      </View>
    )
  }
}
