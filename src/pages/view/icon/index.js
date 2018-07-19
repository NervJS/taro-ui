import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import AtIcon from '../../../components/icon/index'

import './index.scss'

export default class IconPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Icon Page'
  }

  constructor() {
    super(...arguments)
    this.state = {
      icons: [
        'arrow-left',
        'arrow-down-left',
      ]
    }
  }

  render() {
    let {icons} = this.state
    return (
      <View className='page'>
        <View className='example'>
          {icons.map((icon) => {
            return (
              <AtIcon value={icon} color='#f00' size={30}>
              </AtIcon>
            )
          })}
          
        </View>
      </View>
    )
  }
}
