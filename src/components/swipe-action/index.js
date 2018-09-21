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
      offsetSize: 0
    }
  }

  handleTouchStart = e => {
    const { clientX } = e.touches[0]

    if (this.props.disabled) return

    this.startX = clientX
    this.isTouching = true
  }

  handleTouchEnd = () => {
    this.isTouching = false

    const { offsetSize } = this.state

    this.endValue = offsetSize

    const breakpoint = this.maxOffsetSize / 2
    const absOffsetSize = Math.abs(offsetSize)

    if (absOffsetSize > breakpoint) {
      this.endValue = -this.maxOffsetSize
      return this.setState({
        offsetSize: -this.maxOffsetSize
      })
    }

    this.endValue = 0

    this.setState({
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
          className='at-swipe-action__content'
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

AtSwipeAction.defaultProps = {}

AtSwipeAction.propTypes = {
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
  )
}
