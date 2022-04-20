import PropTypes, { InferProps } from 'prop-types'
import { PureComponent, createElement } from 'react'
import { AtIconProps } from '../../../types/icon'
import ICONS from './icons'

export default class AtIcon extends PureComponent<AtIconProps> {
  public static defaultProps: AtIconProps
  public static propTypes: InferProps<AtIconProps>

  public render(): JSX.Element | null {
    const {
      value,
      color,
      size,
      className,
      customStyle = {},
      style = {},
      onClick
    } = this.props

    let inputStyle = style

    // 兼容 style 是数组情况
    if (Array.isArray(style)) {
      inputStyle = style.reduce((sty, obj) => Object.assign(sty, obj), {})
    }

    const fontSize = (customStyle as any).fontSize || inputStyle.fontSize

    const _fontSize = parseInt(String(size)) || fontSize

    const _style = Object.assign({}, inputStyle, customStyle, {
      width: _fontSize,
      height: _fontSize
      // tips: 字体转换的 svg 需要沿着 Y 轴旋转 180 度
      // transform: [{ rotateY: '180deg' }]
    })

    return createElement(ICONS[value] || ((): any => null), {
      // 非 RN 只需透传 className，RN 无效
      className,
      // 图标色值优先级
      fill: color || (customStyle as any).color || inputStyle.color || '',
      style: _style,
      width: _style.width,
      height: _style.height,
      onClick
    })
  }
}

AtIcon.defaultProps = {
  style: {},
  customStyle: {},
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 16
}

AtIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
}
