/* eslint-disable react/no-direct-mutation-state */
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTabs from '../../../components/tabs/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'tabs 标签页示例'
  }
  constructor () {
    super(...arguments)
    this.state = {
      current1: 0,
      current2: 0,
      current3: 0
    }
  }
  handleClick (stateName, value) {
    this.state[stateName] = value
    this.setState()
  }
  render () {
    const { current1, current2, current3 } = this.state
    const tabList1 = [{ title: '标签页1' }, { title: '标签页2' }]
    const tabList2 = [
      { title: '标签页1' },
      { title: '标签页2' },
      { title: '标签页3' },
      { title: '标签页4' },
      { title: '标签页5' },
      { title: '标签页6' },
      { title: '标签页7' }
    ]
    return (
      <View className='page'>
        <View className='doc-header'>
          <View className='doc-header__title'>Tabs 标签页</View>
        </View>
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <AtTabs current={current1} tabList={tabList1} onClick={this.handleClick.bind(this, 'current1')} />
              {
                current1 === 0
                  ? <View className='tab-content'>标签页一的内容</View>
                  : null
              }
              {
                current1 === 1
                  ? <View className='tab-content'>标签页二的内容</View>
                  : null
              }
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>滚动</View>
            <View className='panel__content'>
              <AtTabs scroll current={current2} tabList={tabList2} onClick={this.handleClick.bind(this, 'current2')} />
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>自定义颜色</View>
            <View className='panel__content'>
              <AtTabs scroll color='#f759ab' current={current3} tabList={tabList2} onClick={this.handleClick.bind(this, 'current3')} />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
