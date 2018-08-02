import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtIcon from '../../../components/icon/index'
import ICONS from './icons'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class IconPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Icon Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      icons: ICONS
    }
  }

  render () {
    const { icons } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='图标'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>ICON</View>
            <View className='panel__content'>
              <View className='icon-list'>
                {icons.map((icon, index) => (
                  <View className='icon-list__item' key={index}>
                    <View className='icon-list__icon'>
                      <AtIcon value={icon} color='#999' size={30}></AtIcon>
                    </View>
                    <View className='icon-list__name'>at-icon-{icon}</View>
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
