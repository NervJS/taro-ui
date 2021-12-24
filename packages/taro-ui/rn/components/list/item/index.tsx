/* eslint-disable @typescript-eslint/ban-ts-ignore */
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { TouchableHighlight } from 'react-native'
import { Image, Switch, Text, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { AtListItemProps } from '../../../../types/list'
import AtIcon from '../../icon'
// @ts-ignore

export default class AtListItem extends React.Component<AtListItemProps> {
  public static defaultProps: AtListItemProps
  public static propTypes: InferProps<AtListItemProps>

  private handleClick = (event: ITouchEvent): void => {
    if (typeof this.props.onClick === 'function' && !this.props.disabled) {
      this.props.onClick(event)
    }
  }

  private handleSwitchClick(e: CommonEvent): void {
    e.stopPropagation && e.stopPropagation()
  }

  private handleSwitchChange = (event: CommonEvent): void => {
    if (
      typeof this.props.onSwitchChange === 'function' &&
      !this.props.disabled
    ) {
      this.props.onSwitchChange(event)
    }
  }

  public render(): JSX.Element {
    const {
      note,
      arrow,
      thumb,
      iconInfo,
      disabled,
      isSwitch,
      hasBorder,
      extraThumb,
      switchColor,
      switchIsCheck,
    } = this.props

    let { extraText, title } = this.props

    extraText = String(extraText)
    title = String(title)

    const rootClass = classNames(
      'at-list__item',
      {
        'at-list__item--thumb': thumb,
        'at-list__item--multiple': note,
        'at-list__item--disabled': disabled,
        'at-list__item--no-border': !hasBorder,
      },
      this.props.className,
    )

    // const iconClass = classNames(
    //   (iconInfo && iconInfo.prefixClass) || 'at-icon',
    //   {
    //     [`${(iconInfo && iconInfo.prefixClass) || 'at-icon'}-${
    //       iconInfo && iconInfo.value
    //     }`]: iconInfo && iconInfo.value
    //   },
    //   iconInfo && iconInfo.className
    // )

    const containerClass = classNames('at-list__item-container', {
      'at-list__item-container--disabled': disabled,
    })

    const TouchView = disabled ? View : TouchableHighlight

    return (
      <TouchView
        activeOpacity={1}
        className={rootClass}
        underlayColor='#f0f0f0'
        // @ts-ignore
        onPress={this.handleClick}
      >
        <View className={containerClass}>
          {!!thumb && (
            <View className='at-list__item--thumb'>
              <Image
                className='at-list__item--thumb__info'
                mode='scaleToFill'
                src={thumb}
              />
            </View>
          )}
          {iconInfo && iconInfo.value && (
            <View className='at-list__item-icon item-icon'>
              <AtIcon
                value={iconInfo.value}
                size={iconInfo.size}
                color={iconInfo.color}
                customStyle={iconInfo.customStyle}
              />
            </View>
          )}
          <View className='at-list__item-content'>
            <View className='at-list__item-content__info'>
              <Text
                className='at-list__item-content__info-title'
                // @ts-ignore
                numberOfLines={1}
              >
                {title}
              </Text>
              {!!note && (
                <Text
                  className='at-list__item-content__info-note'
                  // @ts-ignore
                  numberOfLines={1}
                >
                  {note}
                </Text>
              )}
            </View>
          </View>
          <View className='at-list__item-extra item-extra'>
            {!!extraText && (
              <Text
                className='item-extra__info'
                // @ts-ignore
                numberOfLines={1}
              >
                {extraText}
              </Text>
            )}

            {!!extraThumb && !extraText && (
              <View className='item-extra__image'>
                <Image
                  className='item-extra__image-info'
                  mode='aspectFit'
                  src={extraThumb}
                />
              </View>
            )}

            {!!isSwitch && !extraThumb && !extraText && (
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
            {arrow ? (
              <View className='item-extra__icon'>
                <AtIcon
                  value={`chevron-${arrow}`}
                  className='item-extra__icon-arrow'
                />
              </View>
            ) : null}
          </View>
        </View>
      </TouchView>
    )
  }
}

AtListItem.defaultProps = {
  note: '',
  disabled: false,
  title: '',
  thumb: '',
  isSwitch: false,
  hasBorder: true,
  switchColor: '#6190E8',
  switchIsCheck: false,
  extraText: '',
  extraThumb: '',
  iconInfo: { value: '' },
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
    className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  }),
}
