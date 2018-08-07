import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtArticle from '../../../components/article/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ArticlePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
    // alert('点击了！')
    console.log(arguments)
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Article 文章'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>示例</View>
            <View className='panel__content'>
              <AtArticle>
              </AtArticle>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
