import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

export default class AtForm extends Taro.Component {
  render () {
    return <View className='at-form' style={this.props.style}>
      {this.props.children}
    </View>
  }
}
