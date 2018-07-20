import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtSwitch from '../../../components/switch/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Switch 使用示例'
  }
  constructor() {
    super(...arguments)
    this.state = {
      switchValue: false,
    }
  }
  handleSwitchChange(detail) {
    console.log(this.state.switchValue)
    this.setState({
      switchValue: detail.value
    })
  }
  render() {
    return (
      <View className='example__body'>
        <View className='item'>
          <AtSwitch title='开启中' checked onChange={this.handleSwitchChange.bind(this)} />
          <AtSwitch title='已关闭' />
        </View>
      </View>
    )
  }
}
