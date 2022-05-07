import React from 'react'
import { AtIcon } from 'tiga-ui'
import { View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import ICONS from './icons'
import './index.scss'

type IconKeys = {
  main: 'main'
  file: 'file'
  text: 'text'
  arrow: 'arrow'
  media: 'media'
  photo: 'photo'
  logo: 'logo'
}

interface IconPageState {
  icons: {
    [k in keyof IconKeys]: string[]
  }
}

export default class IconPage extends React.Component<any, IconPageState> {
  public constructor(props: any) {
    super(props)
    this.state = {
      icons: ICONS
    }
  }

  public render(): JSX.Element {
    const { icons } = this.state
    const iconColor = '#999'
    const iconSize = 16

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='ICON 图标'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 主要 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>主要</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.main.map((icon, index) => (
                  <View className='icon-list__item' key={`at-icon-${index}`}>
                    <View className='icon-list__icon'>
                      <AtIcon
                        value={icon}
                        color={iconColor}
                        size={iconSize}
                      ></AtIcon>
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
