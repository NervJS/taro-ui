import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, Image, Text, OpenData } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
}

export default class AtAvatar extends AtComponent {
  constructor () {
    super(...arguments)
    this.state = {
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
    }
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
    const rootClassName = ['at-avatar']

    const classObject = {
      [`at-avatar--${SIZE_CLASS[size]}`]: SIZE_CLASS[size],
      'at-avatar--circle': circle,
    }

    let letter = ''
    if (text) letter = text[0]

    let elem
    if (openData && openData.type === 'userAvatarUrl' && this.state.isWEAPP) {
      elem = (<OpenData type={openData.type}></OpenData>)
    } else if (image) {
      elem = (<Image className='at-avatar__img' src={image} />)
    } else {
      elem = (<Text className='at-avatar__text'>{letter}</Text>)
    }
    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
      >{elem}</View>
    )
  }
}

AtAvatar.defaultProps = {
  size: 'normal',
  circle: false,
  text: '',
  image: '',
  openData: {},
  customStyle: {},
  className: '',
}

AtAvatar.propTypes = {
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  circle: PropTypes.bool,
  text: PropTypes.string,
  image: PropTypes.string,
  openData: PropTypes.object,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
