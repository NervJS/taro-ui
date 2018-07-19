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
}


export default class AtButton extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {
      
    }
  }

  onClick() {
    console.log('ddasddas')
  }

  render(){
    let {
      size = 'normal',
      type = 'primary',
      icon = '',
      loading = false,
      disabled = false,
    } = this.props
    let rootClassName = ['at-button']
    let sizeClass = SIZE_CLASS[size] || ''
    let disabledClass = disabled? 'at-button--disabled': ''
    let typeClass = TYPE_CLASS[type]? `at-button--${type}`: ''

    rootClassName.push(`at-button--${sizeClass}`, disabledClass, typeClass)
    rootClassName = rootClassName.filter(str => str != '')
console.log(this.props, this.state)
    return (
      <View className={rootClassName} onClick={this.onClick}>
        测试按钮
      </View>
    )
  }
}
