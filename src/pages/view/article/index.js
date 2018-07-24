import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import AtArticle from '../../../components/article/index'

import './index.scss'

export default class ArticlePage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Article Page'
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  onClick() {
    // alert('点击了！')
    console.log(arguments)
  }

  render() {

    return (
      <View className='page'>

        <AtArticle></AtArticle>
      </View>
    )
  }
}
