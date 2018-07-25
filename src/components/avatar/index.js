import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import PropTypes from 'prop-types'

import './index.scss'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
}

export default class AtAvatar extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
  }

  render () {
    const {
      size,
      circle,
      image,
    } = this.props
    let rootClassName = ['at-avatar']
    const sizeClass = SIZE_CLASS[size] || ''
    const circleClass = circle ? 'at-avatar--circle' : ''

    rootClassName.push(`at-avatar--${sizeClass}`, circleClass)
    rootClassName = rootClassName.filter(str => str !== '')

    const { children } = this.props
    let letter
    if (typeof children === 'string') {
      letter = children[0]
    }
    return (
      <View className={rootClassName}>
        {letter ? <Text className='at-avatar__text'>{letter}</Text> : <Image className='at-avatar__img' src={image} />}

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
}
