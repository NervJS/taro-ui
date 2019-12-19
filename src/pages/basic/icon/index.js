import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import ICONS from './icons'
import * as React from 'nervjs'
import './index.scss'

export default class IconPage extends React.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      icons: ICONS
    }
  }

  render () {
    const { icons } = this.state
    const iconColor = '#999'
    const iconSize = 30

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ICON 图标'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 主要 */}
          <View className='panel'>
            <View className='panel__title'>主要</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.main.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color={iconColor} size={iconSize}></AtIcon>
                    </View>
                    <View className='icon-list__name'>{icon}</View>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 文件 */}
          <View className='panel'>
            <View className='panel__title'>文件</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.file.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color={iconColor} size={iconSize}></AtIcon>
                    </View>
                    <View className='icon-list__name'>{icon}</View>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 文本 */}
          <View className='panel'>
            <View className='panel__title'>文本</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.text.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color={iconColor} size={iconSize}></AtIcon>
                    </View>
                    <View className='icon-list__name'>{icon}</View>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 箭头 */}
          <View className='panel'>
            <View className='panel__title'>箭头</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.arrow.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color={iconColor} size={iconSize}></AtIcon>
                    </View>
                    <View className='icon-list__name'>{icon}</View>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 媒体控制 */}
          <View className='panel'>
            <View className='panel__title'>媒体控制</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.media.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color={iconColor} size={iconSize}></AtIcon>
                    </View>
                    <View className='icon-list__name'>{icon}</View>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* 多媒体 */}
          <View className='panel'>
            <View className='panel__title'>多媒体</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.photo.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color={iconColor} size={iconSize}></AtIcon>
                    </View>
                    <View className='icon-list__name'>{icon}</View>
                  </View>
                ))}
              </View>
            </View>
          </View>

          {/* Logo */}
          <View className='panel'>
            <View className='panel__title'>Logo</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.logo.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color={iconColor} size={iconSize}></AtIcon>
                    </View>
                    <View className='icon-list__name'>{icon}</View>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
