import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import isObject from 'lodash/isObject'
import AtComponent from '../../common/component'

export default class AtNavBar extends AtComponent {
  constructor () {
    super(...arguments)
    if (process.env.NODE_ENV === 'test') {
      Taro.initPxTransform({ designWidth: 750 })
    }
  }

  handleClickLeftView () {
    this.props.onClickLeftIcon(...arguments)
  }

  handleClickSt () {
    this.props.onClickRgIconSt(...arguments)
  }

  handleClickNd () {
    this.props.onClickRgIconNd(...arguments)
  }


  render () {
    const {
      customStyle,
      className,
      color,
      fixed,
      border,
      leftIconType,
      leftText,
      title,
      rightFirstIconType,
      rightSecondIconType
    } = this.props
    const linkStyle = { color }

    const defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'at-icon',
      value: '',
      color: '',
      size: 24,
    }

    const leftIconInfo = isObject(leftIconType) ?
      { ...defaultIconInfo, ...leftIconType } :
      { ...defaultIconInfo, value: leftIconType }
    const leftIconClass = classNames(leftIconInfo.prefixClass, {
      [`${leftIconInfo.prefixClass}-${leftIconInfo.value}`]: leftIconInfo.value
    }, leftIconInfo.className)

    const rightFirstIconInfo = isObject(rightFirstIconType) ?
      { ...defaultIconInfo, ...rightFirstIconType } :
      { ...defaultIconInfo, value: rightFirstIconType }
    const rightFirstIconClass = classNames(rightFirstIconInfo.prefixClass, {
      [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]: rightFirstIconInfo.value
    }, rightFirstIconInfo.className)

    const rightSecondIconInfo = isObject(rightSecondIconType) ?
      { ...defaultIconInfo, ...rightSecondIconType } :
      { ...defaultIconInfo, value: rightSecondIconType }
    const rightSecondIconClass = classNames(rightSecondIconInfo.prefixClass, {
      [`${rightSecondIconInfo.prefixClass}-${rightSecondIconInfo.value}`]: rightSecondIconInfo.value
    }, rightSecondIconInfo.className)

    return <View
      className={
        classNames({
          'at-nav-bar': true,
          'at-nav-bar--fixed': fixed,
          'at-nav-bar--no-border': !border
        }, className)
      }
      style={customStyle}
    >
      <View
        className='at-nav-bar__left-view'
        onClick={this.handleClickLeftView.bind(this)}
        style={linkStyle}
      >
        {leftIconType && <Text
          className={leftIconClass}
          style={this.mergeStyle(
            {
              color: leftIconInfo.color,
              fontSize: `${Taro.pxTransform(parseInt(leftIconInfo.size) * 2)}`
            },
            leftIconInfo.customStyle
          )}
        ></Text>}
        <Text className='at-nav-bar__text'>{leftText}</Text>
      </View>
      <View className='at-nav-bar__title'>{title || this.props.children}</View>
      <View className='at-nav-bar__right-view'>
        <View
          className={
            classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightSecondIconType
            })
          }
          style={linkStyle}
          onClick={this.handleClickNd.bind(this)}
        >
          {rightSecondIconType && <Text
            className={rightSecondIconClass}
            style={this.mergeStyle(
              {
                color: rightSecondIconInfo.color,
                fontSize: `${Taro.pxTransform(parseInt(rightSecondIconInfo.size) * 2)}`
              },
              rightSecondIconInfo.customStyle
            )}
          ></Text>}
        </View>
        <View
          className={
            classNames({
              'at-nav-bar__container': true,
              'at-nav-bar__container--hide': !rightFirstIconType
            })
          }
          style={linkStyle}
          onClick={this.handleClickSt.bind(this)}
        >
          {rightFirstIconType && <Text
            className={rightFirstIconClass}
            style={this.mergeStyle(
              {
                color: rightFirstIconInfo.color,
                fontSize: `${Taro.pxTransform(parseInt(rightFirstIconInfo.size) * 2)}`
              },
              rightFirstIconInfo.customStyle
            )}
          ></Text>}
        </View>
      </View>
    </View>
  }
}

AtNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIconType: '',
  leftText: '',
  title: '',
  rightFirstIconType: '',
  rightSecondIconType: '',
  onClickLeftIcon: () => { },
  onClickRgIconSt: () => { },
  onClickRgIconNd: () => { },
}

AtNavBar.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  fixed: PropTypes.bool,
  border: PropTypes.bool,
  color: PropTypes.string,
  leftIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  leftText: PropTypes.string,
  title: PropTypes.string,
  rightFirstIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  rightSecondIconType: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClickLeftIcon: PropTypes.func,
  onClickRgIconSt: PropTypes.func,
  onClickRgIconNd: PropTypes.func,
}
