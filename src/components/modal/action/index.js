import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtModalButton from './button/index.js'

import './index.scss'

export default class AtModalFooter extends Taro.Component {
  static Button = AtModalButton

  render () {
    let { children } = this.props
    const { $$close } = this.props

    children = children.map(item => {
      item.props.$$close = $$close
      return item
    })

    return (
      <View className='at-modal-footer'>
        <View className='at-modal-footer__action'>{children}</View>
      </View>
    )
  }
}
