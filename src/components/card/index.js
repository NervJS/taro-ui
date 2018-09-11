import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import AtComponent from '../../common/component'

import './index.scss'

export default class AtCard extends AtComponent {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  render () {
    const { title, note, extra, thumb, isFull } = this.props

    const rootClass = ['at-card']

    if (isFull) {
      rootClass.push('at-card--full')
    }

    return (
      <View className={rootClass} onClick={this.handleClick}>
        <View className='at-card-header'>
          {thumb && (
            <View className='at-card-header__thumb'>
              <Image
                className='at-card-header__thumb-info'
                mode='scaleToFill'
                src={thumb}
              />
            </View>
          )}
          <Text className='at-card-header__title'>{title}</Text>
          {extra && <Text className='at-card-header__extra'>{extra}</Text>}
        </View>
        <View className='at-card-content'>
          <View className='at-card-content__info'>{this.props.children}</View>
          {note && <View className='at-card-content__note'>{note}</View>}
        </View>
      </View>
    )
  }
}

AtCard.defaultProps = {
  onClick: () => {},
}

AtCard.propTypes = {
  note: PropTypes.string,
  isFull: PropTypes.bool,
  thumb: PropTypes.string,
  title: PropTypes.string,
  extra: PropTypes.string,
  onClick: PropTypes.func
}
