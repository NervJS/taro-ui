import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { pxTransform } from '@tarojs/taro'
import { AtIconProps } from '../../../types/icon'
import ICONS from './icons'

export default class AtIcon extends React.Component<AtIconProps> {
  public static defaultProps: AtIconProps
  public static propTypes: InferProps<AtIconProps>

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  componentDidMount() {
    // console.warn('RN暂不支持Icon')
  }

  public render(): JSX.Element | null {
    const { value, color, size, customStyle = {} } = this.props
    const fontSize = pxTransform(parseInt(String(size)) * 2)
    const style = {
      width: fontSize,
      height: fontSize,
      // tips: 字体转换的 svg 需要沿着 Y 轴旋转 180 度
      transform: [{ rotateY: '180deg' }],
    }

    return React.createElement(ICONS[value], {
      fill: color,
      style: Object.assign(style, customStyle),
    })
  }
}

AtIcon.defaultProps = {
  customStyle: {},
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24,
}

AtIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
}
