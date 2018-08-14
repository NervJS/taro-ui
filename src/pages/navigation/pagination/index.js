import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtPagination from '../../../components/pagination/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class PaginationPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  // onClose (e) {

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
          <View className='panel'>
            <View className='panel__title'>文本按钮 + 页码</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtPagination total='50' pageSize='10' current='1' onPageChange={this.onPage.bind(this)}></AtPagination>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>图标按钮 + 页码</View>
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
