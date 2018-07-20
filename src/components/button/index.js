import Taro from "@tarojs/taro"
import { View } from "@tarojs/components"

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
  constructor() {
    super(...arguments)
    this.state = {
      
    }
  }

  onClick(e) {
    if (!this.props.disabled) {
      this.props.onClick && this.props.onClick(e)
    }
  }

  render(){
    let {
      size = 'normal',
      type = '',
      icon = '',
      active = false,
      loading = false,
      disabled = false,
    } = this.props
    let rootClassName = ['at-button']
    let sizeClass = SIZE_CLASS[size] || ''
    let disabledClass = disabled? 'at-button--disabled': ''
    let typeClass = TYPE_CLASS[type]? `at-button--${type}`: ''
    let activeClass = active? 'at-button--active': ''

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
