import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../common/component'
import AtSwipeActionOptions from './options/index'

import './index.scss'

export default class AtSwipeAction extends AtComponent {
  constructor () {
    super(...arguments)

    this.startX = null
    this.maxOffsetSize = 0
    this.isTouching = false
    this.endValue = 0

    this.state = {
      offsetSize: 0,
      isOpened: false
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isClose } = nextProps
    const { isOpened } = this.state

    if (isClose && isOpened) {
      this.endValue = 0
      this.isTouching = false
      this.handleClosed()
      this.setState({
        isOpened: false,
        offsetSize: 0
      })
    }
  }

  handleTouchStart = e => {
    const { clientX } = e.touches[0]

    if (this.props.disabled) return

    this.startX = clientX
    this.isTouching = true
  }

  handleOpened = () => {
    if (_isFunction(this.props.onOpened) && !this.state.isOpened) {
      this.props.onOpened()
    }
  }

  handleClosed = () => {
    if (_isFunction(this.props.onClosed) && this.state.isOpened) {
      this.props.onClosed()
    }
  }

  handleTouchEnd = () => {
    this.isTouching = false

    const { offsetSize } = this.state

    this.endValue = offsetSize

    const breakpoint = this.maxOffsetSize / 2
    const absOffsetSize = Math.abs(offsetSize)

    if (absOffsetSize > breakpoint) {
      this.endValue = -this.maxOffsetSize
      this.handleOpened()
      return this.setState({
        isOpened: true,
        offsetSize: -this.maxOffsetSize
      })
    }

    this.endValue = 0
    this.handleClosed()
    this.setState({
      isOpened: false,
      offsetSize: 0
    })
  }

  handleTouchMove = e => {
    const { clientX } = e.touches[0]
    if (this.isTouching) {
      const offsetSize = clientX - this.startX
      const isRight = offsetSize > 0

      if (this.state.offsetSize === 0 && isRight) return

      const value = this.endValue + offsetSize
      this.setState({
        offsetSize: value >= 0 ? 0 : value
      })
    }
  }

  handleDomInfo = ({ width }) => {
    this.maxOffsetSize = width
  }

  handleClick = (item, index, ...arg) => {
    const { onClick, autoClose } = this.props
    if (_isFunction(onClick)) {
      onClick(item, index, ...arg)
    }
    if (autoClose) {
      this.setState({
        offsetSize: 0
      })
    }
  }

  render () {
    const { offsetSize } = this.state
    const { options } = this.props
    const rootClass = classNames('at-swipe-action', this.props.className)

    return (
      <View
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
            transform: `translate3d(${offsetSize}px,0,0)`
          }}
        >
          {this.props.children}
        </View>

        {Array.isArray(options) && options.length > 0 ? (
          <AtSwipeActionOptions onQueryedDom={this.handleDomInfo}>
            {options.map((item, key) => (
              <View
                key={key}
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
  options: [],
  isClose: false,
  disabled: false,
  autoClose: false
}

AtSwipeAction.propTypes = {
  isClose: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
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
  )
}
