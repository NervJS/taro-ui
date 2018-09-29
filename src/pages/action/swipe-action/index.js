/* eslint taro/custom-component-children: 0 */

import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtList from '../../../components/list/index'
import AtListItem from '../../../components/list/item/index'
import AtSwipeAction from '../../../components/swipe-action/index'

import DocsHeader from '../../components/doc-header'

import './index.scss'

const OPTIONS = [
  {
    text: '取消',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]

export default class SwipeActionPage extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      list: [
        {
          title: 'item1',
          isClose: false,
          options: OPTIONS
        },
        {
          title: 'item2',
          isClose: false,
          options: OPTIONS
        },
        {
          title: 'item2',
          isClose: false,
          options: OPTIONS
        }
      ]
    }
  }

  config = {
    navigationBarTitleText: 'Taro UI'
  }

  handleClick = (item, key, e) => {
    console.log('触发了点击', item, key, e)
  }

  handleSingle = index => {
    const list = this.state.list.map((item, key) => {
      item.isClose = key !== index
      return item
    })
    this.setState({
      list
    })
  }

  handleOpened = () => {
    console.log('handleOpened')
  }

  handleClosed = () => {
    console.log('handleClosed')
  }

  render () {
    const { list } = this.state

    return (
      <View className='page swipe-action-page'>
        {/* S Header */}
        <DocsHeader title='SwipeAction 滑动按钮' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 无 Title */}
          <View className='panel'>
            <View className='panel__title'>一般用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSwipeAction options={OPTIONS}>
                  <View className='normal'>AtSwipeAction 一般使用场景</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>禁止滑动</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSwipeAction disabled options={OPTIONS}>
                  <View className='normal'>禁止滑动展示</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自动关闭</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSwipeAction autoClose options={OPTIONS}>
                  <View className='normal'>点击按钮自动关闭</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>传递点击事件</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSwipeAction onClick={this.handleClick} options={OPTIONS}>
                  <View className='normal'>点击事件触发</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>开启和关闭事件</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtSwipeAction
                  options={OPTIONS}
                  onOpened={this.handleOpened}
                  onClosed={this.handleClosed}
                >
                  <View className='normal'>开启和关闭时触发事件</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>与List组件使用</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtList>
                  <AtSwipeAction options={OPTIONS}>
                    <AtListItem title='Item1' />
                  </AtSwipeAction>
                  <AtSwipeAction options={OPTIONS}>
                    <AtListItem title='Item2' />
                  </AtSwipeAction>
                  <AtSwipeAction
                    options={[
                      {
                        text: '警告',
                        style: {
                          backgroundColor: '#FFC82C'
                        }
                      }
                    ]}
                  >
                    <AtListItem title='Item3' />
                  </AtSwipeAction>
                </AtList>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>控制只显示单个</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtList>
                  {list.map((item, index) => (
                    <AtSwipeAction
                      key={index}
                      onOpened={this.handleSingle.bind(this, index)}
                      isClose={item.isClose}
                      options={item.options}
                    >
                      <AtListItem title={item.title} />
                    </AtSwipeAction>
                  ))}
                </AtList>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
