import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtAvatar from '../../../components/avatar/index'

import './index.scss'

export default class AvatarPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Avatar Page'
  }

  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
    // alert('点击了！')
    console.log(arguments)
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>头像</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 圆形头像 */}
          <View className='panel'>
            <View className='panel__title'>圆形头像</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtAvatar circle size='small' image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar circle size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角矩形头像 */}
          <View className='panel'>
            <View className='panel__title'>圆角矩形头像</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtAvatar size='small' image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆形头像（支持文本） */}
          <View className='panel'>
            <View className='panel__title'>圆形头像（支持文本）</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtAvatar circle size='small' image='https://jdc.jd.com/img/200'>凹</AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar circle image='https://jdc.jd.com/img/200'>凹</AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar circle size='large' image='https://jdc.jd.com/img/200'>凹</AtAvatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角矩形头像（支持文本） */}
          <View className='panel'>
            <View className='panel__title'>圆角矩形头像（支持文本）</View>
            <View className='panel__content'>
              <View className='example'>
                <View className='example-item'>
                  <AtAvatar size='small' image='https://jdc.jd.com/img/200'>凹</AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar image='https://jdc.jd.com/img/200'>凹</AtAvatar>
                </View>
                <View className='example-item'>
                  <AtAvatar size='large' image='https://jdc.jd.com/img/200'>凹</AtAvatar>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
