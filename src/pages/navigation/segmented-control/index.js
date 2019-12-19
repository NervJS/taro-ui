import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtSegmentedControl } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      current1: 0,
      current2: 0,
    }
  }
  handleClick (num, value) {
    this.setState({
      [`current${num}`]: value
    })
  }
  render () {
    const { current1, current2 } = this.state
    const tabList1 = ['标签页1', '标签页2' ]
    const tabList2 = ['标签页1', '标签页2', '标签页3']

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Segmented Control 分段器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View>
                <AtSegmentedControl onClick={this.handleClick.bind(this, 1)} current={current1} values={tabList2} />
                <View className='tab-content'>标签 {current1 + 1} 的内容</View>
              </View>
            </View>
          </View>

          {/* 自定义 */}
          <View className='panel'>
            <View className='panel__title'>自定义颜色、字体大小</View>
            <View className='panel__content'>
              <View>
                <AtSegmentedControl onClick={this.handleClick.bind(this, 2)} selectedColor='#FF4949' fontSize='30' current={current2} values={tabList2} />
                <View className='tab-content'>标签 {current2 + 1} 的内容</View>
              </View>
            </View>
          </View>

          {/* 禁用 */}
          <View className='panel'>
            <View className='panel__title'>禁用</View>
            <View className='panel__content'>
              <AtSegmentedControl disabled values={tabList1} />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
