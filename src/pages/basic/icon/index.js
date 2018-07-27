import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtIcon from '../../../components/icon/index'

import './index.scss'

export default class IconPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Icon Page'
  }

  constructor () {
    super(...arguments)
    this.state = {
      icons: [
        'accessory',
        'activity'
      ]
    }
  }

  render () {
    const { icons } = this.state
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>图标</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>ICON</View>
            <View className='panel__content'>
              <View className='example'>
                {icons.map((icon, index) => (
                  <AtIcon value={icon} color='#f00' size={30} key={index}>
                  </AtIcon>
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
