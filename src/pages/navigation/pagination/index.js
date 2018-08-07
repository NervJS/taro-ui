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

  //   const ENV = Taro.getEnv()
  //   let content
  //   if (typeof index !== 'number') {
  //     // content = '你点击了遮罩关闭'
  //     content = ''
  //   } else {
  //     content = `你点击了第 ${+index + 1} 个项目`
  //   }
  //   if (ENV === 'WEAPP') content && Taro.showModal({ content, showCancel: false })
  //   else if (ENV === 'WEB') content && alert(content)
  // }

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
                <AtPagination total='50' pageSize='10' current='1'></AtPagination>
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
