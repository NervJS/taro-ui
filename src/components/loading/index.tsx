import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import { initTestEnv } from '../../common/utils'

initTestEnv()

interface AtLoadingProps {
  size?: string | number
  color?: string | number
}

export default class AtLoading extends AtComponent<AtLoadingProps> {
  public static defaultProps: AtLoadingProps
  public static propTypes: InferProps<AtLoadingProps>

  public render(): JSX.Element {
    const { color, size } = this.props
    const loadingSize = typeof size === 'string' ? size : String(size)
    const sizeStyle = {
      width: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : '',
      height: size ? `${Taro.pxTransform(parseInt(loadingSize))}` : ''
    }
    const colorStyle = {
      border: color ? `1px solid ${color}` : '',
      'border-color': color
        ? `${color} transparent transparent transparent`
        : ''
    }
    const ringStyle = Object.assign({}, colorStyle, sizeStyle)

    return (
      <View className='at-loading' style={sizeStyle}>
        <View className='at-loading__ring' style={ringStyle}></View>
        <View className='at-loading__ring' style={ringStyle}></View>
        <View className='at-loading__ring' style={ringStyle}></View>
      </View>
    )
  }
}

AtLoading.defaultProps = {
  size: 0,
  color: ''
}

AtLoading.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
