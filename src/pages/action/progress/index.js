import Taro from '@tarojs/taro'
import { View,Text } from '@tarojs/components'

import Progress from '../../../components/progress/index'

import './index.scss'

export default class ProgressPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor() {
    super(...arguments)
    this.atButton = ''
    this.state = {}
  }

  render() {
    return (
      <View className='progress__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>任意尺寸</Text>
          </View>
          <View className='example__body example__body--list'>
            <Progress size='50' />
            <Progress size='75' />
            <Progress size='100' />
          </View>
        </View>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>任意尺寸</Text>
          </View>
          <View className='example__body example__body--list'>
            <Progress size='50' />
            <Progress size='75' />
            <Progress size='100' />
          </View>
        </View>
      </View>
    )
  }
}
