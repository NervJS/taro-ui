import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtCard from '../../../components/card/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class CardPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  handleClick = () => {
    console.log('Card handleClick')
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='Card 卡片' />

        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础卡片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtCard title='这是个标题' onClick={this.handleClick}>
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>带缩略图的卡片</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtCard
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>带小信息的卡片</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtCard
                  note='小Tips'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>完整的卡片</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtCard
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>通栏卡片</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtCard
                  isFull
                  note='小Tips'
                  extra='额外信息'
                  title='这是个标题'
                  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
                >
                  这也是内容区 可以随意定义功能 这也是内容区 可以随意定义功能
                  这也是内容区 可以随意定义功能
                </AtCard>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
