import Taro from "@tarojs/taro"
import { View, Image, Text } from "@tarojs/components"
import PropTypes from 'prop-types';

import './index.scss'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
}

// const TYPE_CLASS = {
//   primary: 'primary',
// }


export default class Atarticle extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  onClick() {
  }

  render(){
    let {
    } = this.props
    let rootClassName = ['at-article']
    let sizeClass = SIZE_CLASS[size] || ''
    let circleClass = circle? 'at-article--circle': ''

    rootClassName.push(`at-article--${sizeClass}`, circleClass)
    rootClassName = rootClassName.filter(str => str != '')
console.log('=====', this.props.children)

    let {children} = this.props
    let letter;
    if (typeof children == 'string') {
      letter = children[0]
    }
    return (
      <View className={rootClassName}>
        <View className="at-article__h1"></View>
        <View className="at-article__info">
          <Text className="at-article__info-date"></Text><Text className="at-article__info-author"></Text>
        </View>
        <View className="at-article__content">
          <View className="at-article__section">
            <View className="at-article__h2"></View>

            <View className="at-article__h3"></View>
            <View className="at-article__paragraph"></View>
            <Image className="at-article__image" src="" />

            <View className="at-article__h3"></View>
            <View className="at-article__paragraph"></View>
            <Image className="at-article__image" src="" />
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
};
