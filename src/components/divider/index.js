import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'
import * as React from 'nervjs'

export default class AtDivider extends AtComponent {
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
      lineColor,
    } = this.props

    const rootStyle = {
      height: height ? `${Taro.pxTransform(height)}` : ''
    }

    const fontStyle = {
      'color': fontColor,
      'font-size': fontSize ? `${Taro.pxTransform(fontSize)}` : ''
    }

    const lineStyle = {
      'background-color': lineColor
    }

    return (
      <View
        className={classNames('at-divider', className)}
        style={this.mergeStyle(rootStyle, customStyle)}
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
  lineColor: '',
}

AtDivider.propTypes = {
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
  lineColor: PropTypes.string,
}
