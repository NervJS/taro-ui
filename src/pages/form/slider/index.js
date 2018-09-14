import Taro from '@tarojs/taro'
import { View, Slider } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class PageSlider extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  render () {
    const sliderColor = '#6190e8'

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Slider 滑动条'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>step=1</View>
                <Slider activeColor={sliderColor} step={1} value={50}></Slider>
              </View>
            </View>
          </View>

          {/* 显示当前 Value */}
          <View className='panel'>
            <View className='panel__title'>显示当前 Value</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>step=1</View>
                <Slider activeColor={sliderColor} step={1} value={50} showValue></Slider>
              </View>
            </View>
          </View>

          {/* 设置最大/最小值 */}
          <View className='panel'>
            <View className='panel__title'>设置最大/最小值</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>step=1, min=50, max=200</View>
                <Slider activeColor={sliderColor} step={1} value={100} min={50} max={200} showValue></Slider>
              </View>
            </View>
          </View>

          {/* 自定义样式 */}
          <View className='panel'>
            <View className='panel__title'>自定义样式</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>step=1, blockSize=24</View>
                <Slider step={1} value={50} activeColor='#4285F4' backgroundColor='#BDBDBD' blockColor='#4285F4' blockSize={24}></Slider>
              </View>
            </View>
          </View>

          {/* 禁用状态 */}
          <View className='panel'>
            <View className='panel__title'>禁用状态</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>step=1, blockSize=24</View>
                <Slider activeColor={sliderColor} step={1} value={50} disabled></Slider>
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
