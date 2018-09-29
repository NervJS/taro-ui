import Taro from '@tarojs/taro'
import { View, Image, Text, OpenData } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtComponent from '../../common/component'

import './index.scss'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
}

export default class AtAvatar extends AtComponent {
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
      text,
      openData,
      customStyle,
    } = this.props
    let rootClassName = ['at-avatar']
    const sizeClass = SIZE_CLASS[size] || ''
    const circleClass = circle ? 'at-avatar--circle' : ''

    rootClassName.push(`at-avatar--${sizeClass}`, circleClass)
    rootClassName = rootClassName.filter(str => str !== '')

    let letter = ''
    if (text) letter = text[0]

    let elem
    if (openData && openData.type === 'userAvatarUrl' && Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
      elem = (<OpenData type={openData.type}></OpenData>)
    } else if (image) {
      elem = (<Image className='at-avatar__img' src={image} />)
    } else {
      elem = (<Text className='at-avatar__text'>{letter}</Text>)
    }
    return (
      <View
        className={this.getClassName(rootClassName, this.props.className)}
        style={customStyle}
      >{elem}</View>
    )
  }
}

AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  image: '',
  openData: {},
  customStyle: {},
}

AtAvatar.propTypes = {
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  circle: PropTypes.bool,
  image: PropTypes.string,
  openData: PropTypes.object,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}
