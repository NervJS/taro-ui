import Taro from '@tarojs/taro'
import { View, Image, Switch } from '@tarojs/components'

import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'

import AtIcon from '../../icon/index'
import AtComponent from '../../../common/component'

import './index.scss'

export default class AtListItem extends AtComponent {
  handleClick = (...args) => {
    if (_isFunction(this.props.onClick) && !this.props.disabled) {
      this.props.onClick(...args)
    }
  }

  handleSwitchClick (e) {
    e.stopPropagation()
  }

  handleSwitchChange = (...args) => {
    if (_isFunction(this.props.onSwitchChange) && !this.props.disabled) {
      this.props.onSwitchChange(...args)
    }
  }

  render () {
    const {
      note,
      arrow,
      title,
      thumb,
      iconInfo,
      disabled,
      isSwitch,
      extraText,
      hasBorder,
      extraThumb,
      switchColor,
      switchIsCheck
    } = this.props

    const rootClass = classNames(
      'at-list__item',
      {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--disabled': disabled,
        'at-list__item--no-border': !hasBorder
      },
      this.props.className
    )

    return (
      <View className={rootClass} onClick={this.handleClick}>
        <View className='at-list__item-container'>
          {thumb ? (
            <View className='at-list__item-thumb item-thumb'>
              <Image
                className='item-thumb__info'
                mode='scaleToFill'
                src={thumb}
              />
            </View>
          ) : null}
          {iconInfo.value ? (
            <View className='at-list__item-icon item-icon'>
              <AtIcon
                customStyle={
                  this.mergeStyle(
                    { fontSize: `${iconInfo.size || 24}px` },
                    iconInfo.customStyle
                  )
                }
                value={iconInfo.value}
                color={iconInfo.color}
                className={iconInfo.className}
                prefixClass={iconInfo.prefixClass}
              />
            </View>
          ) : null}
          <View className='at-list__item-content item-content'>
            <View className='item-content__info'>
              <View className='item-content__info-title'>{title}</View>
              {note && <View className='item-content__info-note'>{note}</View>}
            </View>
          </View>
          <View className='at-list__item-extra item-extra'>
            {extraText && <View className='item-extra__info'>{extraText}</View>}

            {extraThumb && !extraText && (
              <View className='item-extra__image'>
                <Image
                  className='item-extra__image-info'
                  mode='aspectFit'
                  src={extraThumb}
                />
              </View>
            )}

            {isSwitch && !extraThumb && !extraText && (
              <View
                className='item-extra__switch'
                onClick={this.handleSwitchClick}
              >
                <Switch
                  color={switchColor}
                  disabled={disabled}
                  checked={switchIsCheck}
                  onChange={this.handleSwitchChange}
                />
              </View>
            )}

            {arrow && (
              <View className='item-extra__icon'>
                <AtIcon customStyle={{ fontSize: '24px' }} value={`chevron-${arrow}`} color='#c7c7cc' />
              </View>
            )}
          </View>
        </View>
      </View>
    )
  }
}

AtListItem.defaultProps = {
  hasBorder: true,
  isSwitch: false,
  disabled: false,
  iconInfo: {},
  switchColor: '#6190E8'
}

AtListItem.propTypes = {
  note: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  thumb: PropTypes.string,
  onClick: PropTypes.func,
  isSwitch: PropTypes.bool,
  hasBorder: PropTypes.bool,
  switchColor: PropTypes.string,
  switchIsCheck: PropTypes.bool,
  extraText: PropTypes.string,
  extraThumb: PropTypes.string,
  onSwitchChange: PropTypes.func,
  arrow: PropTypes.oneOf(['up', 'down', 'right']),
  iconInfo: PropTypes.shape({
    size: PropTypes.number,
    value: PropTypes.string,
    color: PropTypes.string,
    prefixClass: PropTypes.string,
    customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
  })
}
