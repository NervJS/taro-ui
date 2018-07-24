import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtNoticebar from '../../../components/noticebar/index'

import './index.scss'

export default class NoticebarPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Noticebar Page'
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  // onButtonClick() {
  //   alert('点击了！')
  // }

  render() {
    // let {icons} = this.state
    return (
      <View className='page'>
        <View className='example'>
          <AtNoticebar close single moreUrl="https://taro.aotu.io/">这是 NoticeBar 通告栏。带关闭按钮、查看更多链接、单行</AtNoticebar>
        </View> 
        <View className='example'> 
          <AtNoticebar close single>这是 NoticeBar 通告栏。带关闭按钮、单行</AtNoticebar>
        </View> 
        <View className='example'> 
          <AtNoticebar close>这是 NoticeBar 通告栏。这是 NoticeBar 通告栏。这是 NoticeBar 通告栏。这是 NoticeBar 通告栏。这是 NoticeBar 通告栏。带关闭按钮、多行</AtNoticebar>
        </View> 

        <View className='example'> 
          <AtNoticebar>这是 NoticeBar 通告栏。单行</AtNoticebar>
        </View>
        <View className='example'> 
          <AtNoticebar icon="icon-notice">这是 NoticeBar 通告栏。单行、带 icon</AtNoticebar>
        </View> 

        
      </View>
    )
  }
}
