import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtImagePicker from '../../../components/image-picker/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      files: [{
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki3.png',
      }]
    }
  }
  onChange (files) {
    this.setState({
      files
    })
  }

  onFail (mes) {
    console.log(mes)
  }

  onImageClick (index, file) {
    console.log(index, file)
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ImagePicker 图片选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtImagePicker
                  files={this.state.files}
                  onChange={this.onChange.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 多选图片 */}
          <View className='panel'>
            <View className='panel__title'>多选图片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtImagePicker
                  multiple
                  files={this.state.files}
                  onChange={this.onChange.bind(this)}
                  onFail={this.onFail.bind(this)}
                  onImageClick={this.onImageClick.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 自定义数量 */}
          <View className='panel'>
            <View className='panel__title'>自定义数量</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtImagePicker
                  multiple
                  length={3}
                  files={this.state.files}
                  onChange={this.onChange.bind(this)}
                />
              </View>
            </View>
          </View>

          {/* 多种图片预览模式 */}
          <View className='panel'>
            <View className='panel__title'>多种图片预览模式</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtImagePicker
                  mode='aspectFill'
                  multiple
                  files={this.state.files}
                  onChange={this.onChange.bind(this)}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
