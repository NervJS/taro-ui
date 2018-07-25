import Taro from '@tarojs/taro'

import { View, Text } from '@tarojs/components'

import AtIcon from '../icon/index'

import './index.scss'

export default class AtCard extends Taro.Component {
  render () {
    const {
      children,
      title,
      note,
      icon,
      iconColor,
      iconSize,
      extra
    } = this.props

    return (
      <View className='at-card'>
        <View className='at-card-header'>
          <View className='at-card-header__icon'>
            <AtIcon value={icon} size={iconSize} color={iconColor} />
          </View>
          <Text className='at-card-header__title'>{title}</Text>
          <Text className='at-card-header__extra'>{extra}</Text>
        </View>
        <View className='at-card-content'>
          <View className='at-card-content__info'>{children}</View>
          <View className='at-card-content__note'>{note}</View>
        </View>
      </View>
    )
  }
}

AtCard.defaultProps = {
  iconSize: 18
}
