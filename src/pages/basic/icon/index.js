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
        <View className='example'>
          {icons.map((icon, index) => (
            <AtIcon value={icon} color='#f00' size={30} key={index}>
            </AtIcon>
          ))}

        </View>
      </View>
    )
  }
}
