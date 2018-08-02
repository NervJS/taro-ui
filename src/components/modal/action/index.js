import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class AtModalFooter extends Taro.Component {
  render () {
    return (
      <View className='at-modal-footer'>
        <View className='at-modal-footer__action at-modal-action'>
          {this.props.children}
        </View>
      </View>
    )
  }
}
