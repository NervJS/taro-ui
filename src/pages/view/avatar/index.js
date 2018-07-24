import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import AtAvatar from '../../../components/avatar/index'

import './index.scss'

export default class AvatarPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Avatar Page'
  }

  constructor() {
    super(...arguments)
    this.state = {

    }
  }

  onClick() {
    // alert('点击了！')
    console.log(arguments)
  }

  render() {

    return (
      <View className='page'>

        <View className='example'>
          <View className='example-item'>
            <AtAvatar circle size="small" image="https://jdc.jd.com/img/200"></AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar circle image="https://jdc.jd.com/img/200"></AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar circle size="large" image="https://jdc.jd.com/img/200"></AtAvatar>
          </View>
          
        </View>

        <View className='example'>
          <View className='example-item'>
            <AtAvatar size="small" image="https://jdc.jd.com/img/200"></AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar image="https://jdc.jd.com/img/200"></AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar size="large" image="https://jdc.jd.com/img/200"></AtAvatar>
          </View>
          
        </View>

        <View className='example'>
          <View className='example-item'>
            <AtAvatar circle size="small" image="https://jdc.jd.com/img/200">凹</AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar circle image="https://jdc.jd.com/img/200">凹</AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar circle size="large" image="https://jdc.jd.com/img/200">凹</AtAvatar>
          </View>
        </View>

        <View className='example'>
          <View className='example-item'>
            <AtAvatar size="small" image="https://jdc.jd.com/img/200">凹</AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar image="https://jdc.jd.com/img/200">凹</AtAvatar>
          </View>
          <View className='example-item'>
            <AtAvatar size="large" image="https://jdc.jd.com/img/200">凹</AtAvatar>
          </View>
        </View>

      </View>
    )
  }
}
