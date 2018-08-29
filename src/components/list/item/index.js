import Taro from '@tarojs/taro'
import { View, Image, Switch } from '@tarojs/components'

import PropTypes from 'prop-types'
import _isFunction from 'lodash/isFunction'

import AtIcon from '../../icon/index'
import AtComponent from '../../../common/component'

import './index.scss'

export default class AtListItem extends AtComponent {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick)) {
      this.props.onClick(...args)
    }
  }

  handleSwitchChange = (...args) => {
    if (_isFunction(this.props.onSwitchChange)) {
      this.props.onSwitchChange(...args)
    }
  }

  render () {
    const {
      note,
      arrow,
      title,
      thumb,
      isSwitch,
      extraText,
      hasBorder,
      extraThumb
    } = this.props

    const rootClass = ['at-list__item']

    if (thumb) {
      rootClass.push('at-list__item--thumb')
    }

    if (!hasBorder) {
      rootClass.push('at-list__item--no-border')
    }

    if (note) {
      rootClass.push('at-list__item--multiple')
    }

    return (
      <View className={rootClass} onClick={this.handleClick}>
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
              <Switch color='#6190E8' onChange={this.handleSwitchChange} />
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

AtListItem.defaultProps = {
  hasBorder: true,
  isSwitch: false
}

AtListItem.propTypes = {
  note: PropTypes.string,
  title: PropTypes.string,
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  hasBorder: PropTypes.bool,
  extraText: PropTypes.string,
  extraThumb: PropTypes.string,
  onSwitchChange: PropTypes.func
}
PropTypes.oneOf(['up', 'down', 'left', 'right'])
