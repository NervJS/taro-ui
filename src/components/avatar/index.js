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


export default class AtAvatar extends Taro.Component {
  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  onClick() {
  }

  render(){
    let {
      size,
      circle,
      image,
    } = this.props
    let rootClassName = ['at-avatar']
    let sizeClass = SIZE_CLASS[size] || ''
    let circleClass = circle? 'at-avatar--circle': ''

    rootClassName.push(`at-avatar--${sizeClass}`, circleClass)
    rootClassName = rootClassName.filter(str => str != '')
console.log('=====', this.props.children)

    let {children} = this.props
    let letter;
    if (typeof children == 'string') {
      letter = children[0]
    }
    return (
      <View className={rootClassName}>
        {letter ? <Text className="at-avatar__text">{letter}</Text>: <Image className="at-avatar__img" src={image} />}
        
      </View>
    )
  }
}

AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  image: '',
}

AtAvatar.propTypes = {
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  circle: PropTypes.bool,
  image: PropTypes.string,
};
