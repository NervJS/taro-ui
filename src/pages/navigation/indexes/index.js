import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtIndexes from '../../../components/indexes/index'
import DocsHeader from '../../components/doc-header'
import mockData from './mock-data'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  onClick (item) {
    console.log(item)
  }

  render () {
    return (
      <View className='page' style='height: 100vh;'>
        {/* S Header */}
        <DocsHeader title='Indexes 索引选择器'></DocsHeader>
        {/* E Header */}
        {/* S Body */}
        <View className='doc-body' style='height: 100%;'>
          {/* 基础用法 */}
          <View className='panel' style='height: 100%;'>
            <View className='panel__title'>基础用法</View>
            <AtIndexes
              list={mockData}
              topKey='Top'
              onClick={this.onClick.bind(this)}
            >
              <View style='padding:20px;text-align:center;font-size: 18px;'>
                用户自定义内容
              </View>
            </AtIndexes>
          </View>
        </View>

        {/* E Body */}
      </View>
    )
  }
}
