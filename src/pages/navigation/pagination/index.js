import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtPagination from '../../../components/pagination/index'

import './index.scss'

export default class PaginationPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Pagination Page'
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

        <View className='example'>
          <AtPagination icon total='50' pageSize='10' current='1'></AtPagination>
        </View>
      </View>
    )
  }
}
