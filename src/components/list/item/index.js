import Taro, { Component } from '@tarojs/taro'
import { View, Image, Switch } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtIcon from '../../icon/index'

import './index.scss'

export default class AtListItem extends Component {
  render () {
    const {
      note,
      arrow,
      title,
      thumb,
      onClick,
      isSwitch,
      extraText,
      extraThumb,
      onSwitchChange
    } = this.props

    const rootClass = ['at-list__item']

    if (thumb) {
      rootClass.push('at-list__item--thumb')
    }

    if (note) {
      rootClass.push('at-list__item--multiple')
    }

    return (
      <View className={rootClass} onClick={onClick}>
        {thumb && (
          <View className='at-list__item-thumb item-thumb'>
            <Image className='item-thumb-info' mode='scaleToFill' src={thumb} />
          </View>
        )}
        <View className='at-list__item-content item-content'>
          <View className='item-content__info'>
            <View className='item-content__info-title'>{title}</View>
            {note && <View className='item-content__info-note'>{note}</View>}
          </View>
        </View>
        <View className='at-list__item-extra item-extra'>
          {extraText && <View className='item-extra__info'>{extraText}</View>}

          {extraThumb &&
            !extraText && (
            <View className='item-extra__image'>
              <Image
                className='item-extra__image-info'
                mode='aspectFit'
                src={extraThumb}
              />
            </View>
          )}

          {isSwitch &&
            !extraThumb &&
            !extraText && (
            <View className='item-extra__switch'>
              <Switch color='#6190E8' onChange={onSwitchChange} />
            </View>
          )}

          {arrow && (
            <View className='item-extra__icon'>
              <AtIcon value={`chevron-${arrow}`} color='#c7c7cc' />
            </View>
          )}
        </View>
      </View>
    )
  }
}

AtListItem.defaultProps = {}

AtListItem.propTypes = {
  note: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  extraText: PropTypes.string,
  extraThumb: PropTypes.string,
  arrow: PropTypes.oneOf(['up', 'down', 'left', 'right'])
}
