import Taro from '@tarojs/taro'
import { View, Slider } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class PageSlider extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Slider 滑动条'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 设置 Step */}
          <View className='panel'>
            <View className='panel__title'>设置 Step</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Slider step={1} value={50}></Slider>
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
