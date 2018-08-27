import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtList from '../../../components/list/index'
import AtListItem from '../../../components/list/item/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ListPage extends Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  handleChange = e => {
    console.log('Change Switch', e)
  }

  handleClick = e => {
    console.log('Click Item', e)
  }

  render () {
    return (
      <View className='page'>
        <DocsHeader title='List 列表' />

        <View className='doc-body'>
          {/* 基本用法 */}
          <View className='panel'>
            <View className='panel__title'>基本用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  <AtListItem title='标题文字' onClick={this.handleClick} />
                  <AtListItem title='标题文字' arrow='right' />
                  <AtListItem title='标题文字' extraText='详细信息' />
                </AtList>
              </View>
            </View>
          </View>

          {/* 包含描述信息 */}
          <View className='panel'>
            <View className='panel__title'>包含描述信息</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  <AtListItem title='标题文字' note='描述信息' />
                  <AtListItem title='标题文字' note='描述信息' arrow='right' />
                  <AtListItem
                    arrow='right'
                    note='描述信息'
                    title='标题文字标题文字标题文字标题文字标题文字'
                    extraText='详细信息详细信息详细信息详细信息'
                  />
                </AtList>
              </View>
            </View>
          </View>

          {/* 包含图片 */}
          <View className='panel'>
            <View className='panel__title'>包含图片</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  <AtListItem
                    title='标题文字'
                    arrow='right'
                    thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
                  />
                  <AtListItem
                    title='标题文字'
                    note='描述信息'
                    arrow='right'
                    thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
                  />
                  <AtListItem
                    title='标题文字'
                    note='描述信息'
                    extraText='详细信息'
                    arrow='right'
                    thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
                  />
                </AtList>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>无边框</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList hasBorder={false}>
                  <AtListItem
                    isSwitch
                    title='标题文字'
                    hasBorder={false}
                    onSwitchChange={this.handleChange}
                  />
                  <AtListItem
                    isSwitch
                    title='标题文字'
                    hasBorder={false}
                    onSwitchChange={this.handleChange}
                  />
                </AtList>
              </View>
            </View>
          </View>

          {/* Switch 按钮列表 */}
          <View className='panel'>
            <View className='panel__title'>Switch 按钮列表</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  <AtListItem
                    title='标题文字'
                    isSwitch
                    onSwitchChange={this.handleChange}
                  />
                </AtList>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
