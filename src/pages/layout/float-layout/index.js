import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtFloatLayout from '../../../components/float-layout/index'
import AtButton from '../../../components/button/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class FloatLayoutPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened1: false,
      isOpened2: false
    }
  }

  handleClick = type => {
    this.setState({
      [`isOpened${type}`]: true
    })
  }

  render () {
    const { isOpened1, isOpened2 } = this.state

    return (
      <View className='page'>
        <DocsHeader title='Float Layout 浮动弹层' />

        <View className='doc-body'>
          {/* 基本用法 */}
          <View className='panel'>
            <View className='panel__title'>基本用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 1)}>
                  打开 Float Layout
                </AtButton>
              </View>
            </View>
          </View>

          {/* 最大高度 */}
          <View className='panel'>
            <View className='panel__title'>最大高度</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtButton onClick={this.handleClick.bind(this, 2)}>
                  打开 Float Layout
                </AtButton>
              </View>
            </View>
          </View>
        </View>

        <AtFloatLayout title='这是个标题' isOpened={isOpened1} onClose>
          <View className='content-wrapper'>
            这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
            随你怎么写
          </View>
        </AtFloatLayout>

        <AtFloatLayout title='这是个标题' isOpened={isOpened2}>
          <View className='content-wrapper' scroll-y>
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            《诗人继续沉默》收录了耶霍舒亚的十二个中短篇小说。它们以梦境一般的笔法塑造了一个个既敏感又迟钝的角色。故事有时在城市，有时在战场，有时在遥远的山村，有时完全囿于家庭，并总是从司空见惯中生出离奇。每个故事的主线带来不断加剧的紧张感，即使从表面上看，根本没有重要的事情发生：
            封笔的诗人与智力障碍的儿子一起生活；
            绝望的备胎照顾梦中情人与别人的孩子
            外派多年的父亲截取女儿追求者的信件 村民们每日仪式般等候火车经过
            指挥官拒绝命令他的部队上战场 渴睡的工人溜回家休息
            邻居当中有个永生不死的老头 …
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
            然而，在这些虚构的世界里，即便是细微的行动也会陷入瘫痪。
          </View>
        </AtFloatLayout>
      </View>
    )
  }
}
