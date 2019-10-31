import Taro from '@tarojs/taro'
import { View, Image, Text, OpenData } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'
import { AtAvatarProps, AtAvatarState } from 'types/avatar'

const SIZE_CLASS = {
  large: 'large',
  normal: 'normal',
  small: 'small',
}

export default class AtAvatar extends AtComponent<AtAvatarProps, AtAvatarState> {
  public static defaultProps: AtAvatarProps
  public static propTypes: InferProps<AtAvatarProps>

  public constructor () {
    super(...arguments)
    this.state = {
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
    }
  }

  public render (): JSX.Element {
    const {
      size,
      circle,
      image,
      text,
      openData,
      customStyle,
    } = this.props
    const rootClassName = ['at-avatar']
    const iconSize = SIZE_CLASS[size ? size : 'normal']
    const classObject = {
      [`at-avatar--${iconSize}`]: iconSize,
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
  openData: undefined,
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
