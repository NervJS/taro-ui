import React from 'react'
import { AtNavBar } from 'tiga-ui'
import { View, ScrollView } from '@tarojs/components'
import Taro, { getSystemInfoSync } from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const NavbarPage: React.FC = () => {
  const sysInfo = getSystemInfoSync()
  const top = sysInfo.safeArea?.top ?? 0

  const heightVal = sysInfo.screenHeight - top - 46
  const maxHeight =
    Taro.getEnv() === Taro.ENV_TYPE.RN
      ? sysInfo.screenHeight - top - 46
      : heightVal + 'px'

  return (
    <View style={{ paddingTop: top }} className='nav-bar-page__bg'>
      <AtNavBar
        title='自定义标题'
        extra={<View className='nav-bar-page__extra'>右边内定义内容</View>}
      />
      <ScrollView
        scrollY
        className='nav-bar-page__screen-bg'
        style={{ maxHeight }}
      >
        <View className='page'>
          {/* S Header */}
          <DocsHeader title='导航栏'></DocsHeader>
          {/* E Header */}

          {/* S Body */}
          <View className='doc-body'>
            {/* 默认导航栏 */}
            <View className='doc-body--panel'>
              <View className='panel__title'>默认导航栏</View>
              <View className='panel__content'>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
                <View>内容</View>
              </View>
            </View>
            {/* 左边 leftIcon 自定义 */}
            <View className='doc-body--panel'>
              <View className='panel__title'>左边自定义</View>
              <View className='panel__content'>
                <AtNavBar title='标题' leftIcon='取消' />
              </View>
            </View>
            {/* 右边 extra 自定义 */}
            <View className='doc-body--panel'>
              <View className='panel__title'>右边自定义</View>
              <View className='panel__content'>
                <AtNavBar
                  title='标题'
                  extra={
                    <View className='nav-bar-page__extra'>内定义内容</View>
                  }
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default NavbarPage
