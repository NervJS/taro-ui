import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtDividerProps } from 'types/divider'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import { initTestEnv } from '../../common/utils'

initTestEnv()

export default class AtDivider extends AtComponent<AtDividerProps> {
  public static defaultProps: AtDividerProps
  public static propTypes: InferProps<AtDividerProps>

  public render(): JSX.Element {
    const {
      className,
      customStyle,
      content,
      height,
      fontColor,
      fontSize,
      lineColor
    } = this.props

    const rootStyle = {
      height: height ? `${Taro.pxTransform(Number(height))}` : ''
    }

    const fontStyle = {
      color: fontColor,
      'font-size': fontSize ? `${Taro.pxTransform(Number(fontSize))}` : ''
    }

    const lineStyle: React.CSSProperties = {
      backgroundColor: lineColor
    }

    return (
      <View
        className={classNames('at-divider', className)}
        style={this.mergeStyle(rootStyle, customStyle as object)}
      >
        <View className='at-divider__content' style={fontStyle}>
          {content === '' ? this.props.children : content}
        </View>
        <View className='at-divider__line' style={lineStyle}></View>
      </View>
    )
  }
}

AtDivider.defaultProps = {
  content: '',
  height: 0,
  fontColor: '',
  fontSize: 0,
  lineColor: ''
}

AtDivider.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  content: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontColor: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lineColor: PropTypes.string
}
