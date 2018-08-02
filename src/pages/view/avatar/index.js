import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtAvatar from '../../../components/avatar/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class AvatarPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
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
        <DocsHeader title='Avatar 头像'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 圆形头像 */}
          <View className='panel'>
            <View className='panel__title'>圆形头像</View>
            <View className='panel__content'>
              <View className='example-item'>
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
              <View className='example-item'>
                <View className='subitem'>
                  <AtAvatar size='small' image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar size='large' image='https://jdc.jd.com/img/200'></AtAvatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆形头像（支持文本） */}
          <View className='panel'>
            <View className='panel__title'>圆形头像（支持文本）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtAvatar circle size='small' text='凹'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle text='凹'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle size='large' text='凹'></AtAvatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角矩形头像（支持文本） */}
          <View className='panel'>
            <View className='panel__title'>圆角矩形头像（支持文本）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtAvatar size='small' text='凹'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar text='凹'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar size='large' text='凹'></AtAvatar>
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
