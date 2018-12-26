/* eslint-disable taro/function-naming */
import Taro from '@tarojs/taro'
import { View, Text, ScrollView } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'

import AtIcon from '../icon/index'
import AtComponent from '../../common/component'

import './index.scss'

export default class AtFloatLayout extends AtComponent {
  constructor (props) {
    super(...arguments)

    const { isOpened } = props
    this.state = {
      _isOpened: isOpened
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
      // !isOpened && this.handleClose()
    }
  }

  handleClose = () => {
    if (_isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  close = () => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    )
  }

  handleTouchMove = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  render () {
    const { _isOpened } = this.state
    const {
      title,

      scrollY,
      scrollX,
      scrollTop,
      scrollLeft,
      upperThreshold,
      lowerThreshold,
      scrollWithAnimation
    } = this.props

    const rootClass = classNames(
      'at-float-layout',
      {
        'at-float-layout--active': _isOpened
      },
      this.props.className
    )

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View onClick={this.close} className='at-float-layout__overlay' />
        <View className='at-float-layout__container layout'>
          <View className='layout-header'>
            <Text className='layout-header__title'>{title}</Text>
            <View className='layout-header__icon' onClick={this.close}>
              <AtIcon
                customStyle={{ fontSize: '18px' }}
                value='close'
                color='#CCC'
              />
            </View>
          </View>
          <View className='layout-body'>
            <ScrollView
              scrollY={scrollY}
              scrollX={scrollX}
              scrollTop={scrollTop}
              scrollLeft={scrollLeft}
              upperThreshold={upperThreshold}
              lowerThreshold={lowerThreshold}
              scrollWithAnimation={scrollWithAnimation}
              onScroll={this.props.onScroll}
              onScrollToLower={this.props.onScrollToLower}
              onScrollToUpper={this.props.onScrollToUpper}
              className='layout-body__content'
            >
              {this.props.children}
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}

AtFloatLayout.defaultProps = {
  isOpened: false,

  scrollY: true
}

AtFloatLayout.propType = {
  title: PropTypes.string,
  isOpened: PropTypes.bool,

  scrollY: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollTop: PropTypes.number,
  scrollLeft: PropTypes.number,
  upperThreshold: PropTypes.number,
  lowerThreshold: PropTypes.number,
  scrollWithAnimation: PropTypes.bool,

  onClose: PropTypes.func,
  onScroll: PropTypes.func,
  onScrollToLower: PropTypes.func,
  onScrollToUpper: PropTypes.func
}
