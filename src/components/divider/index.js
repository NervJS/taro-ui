import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtDivider extends AtComponent {
  static defaultProps = {
    content: '',
    height: 112,
    fontColor: '#6190E8',
    fontSize: 32,
    lineColor: '#CCC',
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    content: PropTypes.string,
    height: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    fontColor: PropTypes.string,
    fontSize: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    lineColor: PropTypes.string
  }

  constructor () {
    super(...arguments)
    if (process.env.NODE_ENV === 'test') {
      Taro.initPxTransform({ designWidth: 750 })
    }
  }

  render () {
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
      height: `${Taro.pxTransform(height)}`
    }

    const fontStyle = {
      'color': fontColor,
      'font-size': `${Taro.pxTransform(fontSize)}`
    }

    const lineStyle = {
      'background-color': lineColor
    }

    return (
      <View
        className={classNames('at-divider', className)}
        style={this.mergeStyle(rootStyle, customStyle)}
      >
        <View
          className='at-divider__content'
          style={fontStyle}
        >
          {
            content === ''
              ? this.props.children
              : content
          }
        </View>
        <View className='at-divider__line' style={lineStyle}></View>
      </View>
    )
  }
}
