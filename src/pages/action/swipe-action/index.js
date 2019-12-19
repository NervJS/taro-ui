import Taro from '@tarojs/taro'
import React from 'nervjs'
import { View } from '@tarojs/components'
import { AtList, AtListItem, AtButton, AtSwipeAction } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const OPTIONS = [
  {
    text: '删除',
    style: {
      color: '#333',
      backgroundColor: '#F7F7F7'
    }
  },
  {
    text: '确认',
    style: {
      backgroundColor: '#E93B3D'
    }
  }
]

export default class SwipeActionPage extends React.Component {
  constructor () {
    super(...arguments)
    this.state = {
      isOpened2: false,
      list: [
        {
          title: 'item1',
          isOpened: false,
          options: OPTIONS
        },
        {
          title: 'item2',
          isOpened: false,
          options: OPTIONS
        },
        {
          title: 'item3',
          isOpened: false,
          options: OPTIONS
        },
        {
          title: 'item4',
          isOpened: false,
          options: OPTIONS
        },
        {
          title: 'item5',
          isOpened: false,
          options: OPTIONS
        },
        {
          title: 'item6',
          isOpened: false,
          options: OPTIONS
        }
      ]
    }
  }

  config = {
    navigationBarTitleText: 'Taro UI'
  }

  handleClick = item => {
    this.showToast(`点击了${item.text}按钮`)
  }

  handleClicked = index => {
    const list = this.state.list.filter((item, key) => key !== index)
    // console.log(list)
    this.setState({
      list
    })
  }

  handleStatusClick = () => {
    this.setState({
      isOpened2: !this.state.isOpened2
    })
  }

  handleStatusOpened = () => {
    this.setState({
      isOpened2: true
    })
  }

  handleStatusClosed = () => {
    this.setState({
      isOpened2: false
    })
  }

  handleSingle = index => {
    const list = this.state.list.map((item, key) => {
      item.isOpened = key === index
      return item
    })
    this.setState({
      list
    })
  }

  handleOpened = () => {
    this.showToast('Handle Opened')
  }

  handleClosed = () => {
    this.showToast('Handle Closed')
  }

  showToast = name => {
    Taro.showToast({
      icon: 'none',
      title: name
    })
  }

  render () {
    const { list, isOpened2 } = this.state

    return (
      <View className='page swipe-action-page'>
        {/* S Header */}
        <DocsHeader title='SwipeAction 滑动操作' />
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 无 Title */}
          <View className='panel'>
            <View className='panel__title'>一般用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item example-item--border'>
                <AtSwipeAction onClick={this.handleClick} options={OPTIONS}>
                  <View className='normal'>AtSwipeAction 一般使用场景</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>禁止滑动</View>
            <View className='panel__content no-padding'>
              <View className='example-item example-item--border'>
                <AtSwipeAction disabled options={OPTIONS}>
                  <View className='normal'>禁止滑动展示</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>使用变量控制开关</View>
            <View className='panel__controller' style='margin-bottom: 10px'>
              <AtButton size='small' onClick={this.handleStatusClick}>
                当前状态: {isOpened2 ? '开' : '关'}{' '}
              </AtButton>
            </View>

            <View className='panel__content no-padding'>
              <View className='example-item example-item--border'>
                <AtSwipeAction
                  options={OPTIONS}
                  isOpened={isOpened2}
                  onClosed={this.handleStatusClosed}
                  onOpened={this.handleStatusOpened}
                >
                  <View className='normal'>使用变量控制开关</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自动关闭</View>
            <View className='panel__content no-padding'>
              <View className='example-item example-item--border'>
                <AtSwipeAction
                  onClick={this.handleClick}
                  autoClose
                  options={OPTIONS}
                >
                  <View className='normal'>点击按钮自动关闭</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>传递点击事件</View>
            <View className='panel__content no-padding'>
              <View className='example-item example-item--border'>
                <AtSwipeAction onClick={this.handleClick} options={OPTIONS}>
                  <View className='normal'>点击事件触发</View>
                </AtSwipeAction>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>开启和关闭事件</View>
            <View className='panel__content no-padding'>
              <View className='example-item example-item--border'>
                <AtSwipeAction
                  options={OPTIONS}
                  onClick={this.handleClick}
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
            <View className='panel__content no-padding'>
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
                    <AtListItem title='Item3123123123123' />
                  </AtSwipeAction>
                </AtList>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>控制只显示单个</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtList>
                  {list.map((item, index) => (
                    <AtSwipeAction
                      key={item.title}
                      options={item.options}
                      isOpened={item.isOpened}
                      onClick={this.handleClicked.bind(this, index)}
                      onOpened={this.handleSingle.bind(this, index)}
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
