import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, Text } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import _isNil from 'lodash/isNil'
import _isEmpty from 'lodash/isEmpty'
import _inRange from 'lodash/inRange'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../common/component'
import AtSwipeActionOptions from './options/index'
import {
  delayGetClientRect,
  delayGetScrollOffset,
  uuid,
  isTest
} from '../../common/utils'

export default class AtSwipeAction extends AtComponent {
  constructor (props) {
    super(...arguments)

    const { isOpened } = props

    this.endValue = 0
    this.startX = null
    this.startY = null
    this.maxOffsetSize = 0

    this.domInfo = {}
    this.isMoving = false
    this.isTouching = false

    this.state = {
      componentId: isTest() ? 'tabs-AOTU2018' : uuid(),
      offsetSize: 0,
      _isOpened: isOpened
    }
  }

  getDomInfo () {
    this.domInfo = {}
    return Promise.all([
      delayGetClientRect({
        self: this,
        delayTime: 0,
        selectorStr: `#swipeAction-${this.state.componentId}`
      }),
      delayGetScrollOffset({ delayTime: 0 })
    ]).then(([rect, scrollOffset]) => {
      rect[0].top += scrollOffset[0].scrollTop
      rect[0].bottom += scrollOffset[0].scrollTop
      this.domInfo = rect[0]
    })
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    const { _isOpened } = this.state

    if (isOpened !== _isOpened) {
      this._reset(isOpened)
    }
  }

  _reset (isOpened) {
    this.isMoving = false
    this.isTouching = false

    if (isOpened) {
      this.endValue = -this.maxOffsetSize
      this.setState({
        _isOpened: true,
        offsetSize: -this.maxOffsetSize
      })
    } else {
      this.endValue = 0
      this.setState({
        offsetSize: 0,
        _isOpened: false
      })
    }
  }

  computeTransform = value => {
    if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
      return !_isNil(value) ? `translate3d(${value}px,0,0)` : null
    }
    return value ? `translate3d(${value}px,0,0)` : null
  }

  handleOpened = () => {
    if (_isFunction(this.props.onOpened) && !this.state._isOpened) {
      this.props.onOpened()
    }
  }

  handleClosed = () => {
    if (_isFunction(this.props.onClosed) && this.state._isOpened) {
      this.props.onClosed()
    }
  }

  handleTouchStart = e => {
    const { clientX, clientY } = e.touches[0]

    if (this.props.disabled) return

    this.getDomInfo()

    this.startX = clientX
    this.startY = clientY
    this.isTouching = true
  }

  handleTouchMove = e => {
    if (_isEmpty(this.domInfo)) {
      return
    }

    const { startX, startY } = this
    const { top, bottom, left, right } = this.domInfo
    const { clientX, clientY, pageX, pageY } = e.touches[0]

    const x = Math.abs(clientX - startX)
    const y = Math.abs(clientY - startY)

    const inDom = _inRange(pageX, left, right) && _inRange(pageY, top, bottom)

    if (!this.isMoving && inDom) {
      this.isMoving =
        y === 0 || x / y >= Math.tan((45 * Math.PI) / 180).toFixed(2)
    }

    if (this.isTouching && this.isMoving) {
      e.preventDefault()

      const offsetSize = clientX - this.startX
      const isRight = offsetSize > 0

      if (this.state.offsetSize === 0 && isRight) return

      const value = this.endValue + offsetSize
      this.setState({
        offsetSize: value >= 0 ? 0 : value
      })
    }
  }

  handleTouchEnd = () => {
    this.isTouching = false

    const { offsetSize } = this.state

    this.endValue = offsetSize

    const breakpoint = this.maxOffsetSize / 2
    const absOffsetSize = Math.abs(offsetSize)

    if (absOffsetSize > breakpoint) {
      this._reset(true)
      return this.handleOpened()
    }

    this._reset()
    this.handleClosed()
  }

  handleDomInfo = ({ width }) => {
    const { _isOpened } = this.state

    this.maxOffsetSize = width
    this._reset(_isOpened)
  }

  handleClick = (item, index, ...arg) => {
    const { onClick, autoClose } = this.props

    if (_isFunction(onClick)) {
      onClick(item, index, ...arg)
    }
    if (autoClose) {
      this._reset()
      this.handleClosed()
    }
  }

  render () {
    const { offsetSize, componentId } = this.state
    const { options } = this.props
    const rootClass = classNames('at-swipe-action', this.props.className)

    return (
      <View
        id={`swipeAction-${componentId}`}
        className={rootClass}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
      >
        <View
          className={classNames('at-swipe-action__content', {
            animtion: !this.isTouching
          })}
          style={{
            transform: this.computeTransform(offsetSize)
          }}
        >
          {this.props.children}
        </View>

        {Array.isArray(options) && options.length > 0 ? (
          <AtSwipeActionOptions
            options={options}
            componentId={componentId}
            onQueryedDom={this.handleDomInfo}
          >
            {options.map((item, key) => (
              <View
                key={`${item.text}-${key}`}
                style={item.style}
                onClick={this.handleClick.bind(this, item, key)}
                className={classNames(
                  'at-swipe-action__option',
                  item.className
                )}
              >
                <Text className='option__text'>{item.text}</Text>
              </View>
            ))}
          </AtSwipeActionOptions>
        ) : null}
      </View>
    )
  }
}

AtSwipeAction.defaultProps = {
  isTest: false,
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false
}

AtSwipeAction.propTypes = {
  isTest: PropTypes.bool,
  isOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  autoClose: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      style: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      className: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string,
        PropTypes.array
      ])
    })
  ),

  onClick: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
}
