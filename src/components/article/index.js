import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import PropTypes from 'prop-types'

import './index.scss'

export default class Atarticle extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
  }

  render () {
    const rootClassName = ['at-article']

    return (
      <View className={rootClassName}>
        <View className='at-article__h1'>这是一级标题这是一级标题</View>
        <View className='at-article__info'>2017-05-07&nbsp;&nbsp;&nbsp;这是作者</View>
        <View className='at-article__content'>
          <View className='at-article__section'>
            <View className='at-article__h2'>这是二级标题</View>
            <View className='at-article__h3'>这是三级标题</View>
            <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ</View>
            <View className='at-article__p'>这是文本段落。这是文本段落。</View>
            <Image className='at-article__img' src='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg' mode='widthFix' />
          </View>

          <View className='at-article__section'>
            <View className='at-article__h2'>这是二级标题</View>
            <View className='at-article__h3'>这是三级标题</View>
            <View className='at-article__p'>这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ</View>
            <Image className='at-article__img' src='https://img30.360buyimg.com/sku/jfs/t19660/324/841553494/117886/ad2742c1/5aab8d20Ne56ae3bf.jpg' mode='widthFix' />
          </View>
        </View>
      </View>
    )
  }
}

Atarticle.defaultProps = {
  size: 'normal',
  circle: false,
  image: '',
}

Atarticle.propTypes = {
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  circle: PropTypes.bool,
  image: PropTypes.string,
}
