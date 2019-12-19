import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class AvatarPage extends React.Component {
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
    const avatarImg = 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'

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
                <View className='subitem'>
                  <AtAvatar circle size='small' image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar circle size='large' image={avatarImg}></AtAvatar>
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
                  <AtAvatar size='small' image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar image={avatarImg}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar size='large' image={avatarImg}></AtAvatar>
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

          {/* openData 头像（仅微信小程序支持） */}
          {Taro.getEnv() === Taro.ENV_TYPE.WEAPP && <View className='panel'>
            <View className='panel__title'>openData 头像（仅微信小程序支持）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtAvatar openData={{ type: 'userAvatarUrl' }} size='small'></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar openData={{ type: 'userAvatarUrl' }}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar size='large' openData={{ type: 'userAvatarUrl' }}></AtAvatar>
                </View>
                <View className='subitem'>
                  <AtAvatar size='large' circle openData={{ type: 'userAvatarUrl' }}></AtAvatar>
                </View>
              </View>
            </View>
          </View>}
        </View>
        {/* E Body */}
      </View>
    )
  }
}
