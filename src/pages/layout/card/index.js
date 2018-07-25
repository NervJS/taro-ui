import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtCard from '../../../components/card/index'

import './index.scss'

export default class CardPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Card Page'
  }

  render () {
    return (
      <View className='card__page'>
        <View className='example'>
          <View className='example__header'>
            <Text className='example__header-title'>基本案例</Text>
          </View>
          <View className='example__body'>
            <AtCard icon='emoji' title='这是个标题' extra='文本' note='小Tips'>
              这也是内容区 你傻做啥东兴
            </AtCard>
          </View>
        </View>
      </View>
    )
  }
}
