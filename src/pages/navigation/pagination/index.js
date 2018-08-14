import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtPagination from '../../../components/pagination/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class PaginationPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  onPage (data) {
    console.log('pagination: ', data)
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Pagination 分页器'></DocsHeader>
        {/* E Header */}

        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtPagination total='50' pageSize='10' current='1' onPageChange={this.onPage.bind(this)}></AtPagination>
              </View>
            </View>
          </View>

          {/* 图标类型 */}
          <View className='panel'>
            <View className='panel__title'>图标类型</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtPagination icon total='50' pageSize='10' current='1'></AtPagination>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
