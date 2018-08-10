/* eslint-disable react/no-direct-mutation-state */
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtTabs from '../../../components/tabs/index'
import AtTabsPane from '../../../components/tabs-pane/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      current1: 0,
      current2: 0,
      current3: 0,
      current4: 0
    }
  }
  handleClick (stateName, value) {
    this.state[stateName] = value
    this.setState()
  }
  render () {
    const { current1, current2, current3, current4 } = this.state
    const tabList1 = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    const tabList2 = [
      { title: '标签页1' },
      { title: '标签页2' },
      { title: '标签页3' },
      { title: '标签页4' },
      { title: '标签页5' },
      { title: '标签页6' },
      { title: '标签页7' },
      { title: '标签页8' },
      { title: '标签页9' }
    ]

    return (
      <View className='page'>
        <DocsHeader title='Tabs 标签页'></DocsHeader>

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>等宽标签栏</View>
            <View className='panel__content'>
              <AtTabs swipeable={false} current={current1} tabList={tabList1} onClick={this.handleClick.bind(this, 'current1')}>
                <AtTabsPane>
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>滚动标签栏</View>
            <View className='panel__content'>
              <AtTabs swipeable={false} scroll current={current2} tabList={tabList2} onClick={this.handleClick.bind(this, 'current2')}>
                <AtTabsPane>
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页四的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页五的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页六的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页七的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页八的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页九的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>滑动切换内容</View>
            <View className='panel__content'>
              <AtTabs current={current3} tabList={tabList1} onClick={this.handleClick.bind(this, 'current3')}>
                <AtTabsPane>
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                <AtTabsPane>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
              </AtTabs>
            </View>
          </View>
          <View className='panel'>
            <View className='panel__title'>禁止内容切换动画</View>
            <View className='panel__content'>
              <AtTabs current={current4} tabList={tabList1} onClick={this.handleClick.bind(this, 'current4')} />
              {current4 === 0
                ? <AtTabsPane>
                  <View className='tab-content'>标签页一的内容</View>
                </AtTabsPane>
                : null
              }
              {current4 === 1
                ? <AtTabsPane>
                  <View className='tab-content'>标签页二的内容</View>
                </AtTabsPane>
                : null
              }
              {current4 === 2
                ? <AtTabsPane>
                  <View className='tab-content'>标签页三的内容</View>
                </AtTabsPane>
                : null
              }
            </View>
          </View>
        </View>
      </View>
    )
  }
}
