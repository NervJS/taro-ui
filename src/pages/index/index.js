import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor() {
    super(...arguments)

    this.state = {
      list: [
        {
          id: 'View',
          name: '视图',
          open: false,
          childrens: [
            {
              title: '图标',
              name: 'Icon'
            },
            {
              title: '颜色',
              name: 'Color'
            },
            {
              title: '文本',
              name: 'Text'
            },
            {
              title: '按钮',
              name: 'Button'
            }
          ]
        },
        {
          id: 'Content',
          name: '基础组件',
          open: false,
          childrens: [
            {
              title: '通告栏',
              name: 'Notice-Bar'
            },
            {
              title: '徽章',
              name: 'Badge'
            },
            {
              title: '警告提示',
              name: 'Alert'
            },
            {
              title: '标签',
              name: 'Tag'
            },
            {
              title: '头像',
              name: 'Avatar'
            },
            {
              title: '文章',
              name: 'Article'
            }
          ]
        },
        {
          id: 'Action',
          name: '操作反馈',
          open: false,
          childrens: [
            {
              title: '动作面板',
              name: 'Action-Sheet'
            },
            {
              title: '动作指示器',
              name: 'Activity-Indicator'
            },
            {
              title: '对话框',
              name: 'Modal'
            },
            {
              title: '进度条',
              name: 'Progress'
            },
            {
              title: '轻提示',
              name: 'Toast'
            }
          ]
        },
        {
          id: 'form',
          name: '表单组件',
          open: false,
          childrens: [
            {
              title: '输入框',
              name: 'Input'
            },
            {
              title: '单选框',
              name: 'Radio'
            },
            {
              title: '复选框',
              name: 'Checkbox'
            },
            {
              title: '开关',
              name: 'Switch'
            },
            {
              title: '评分',
              name: 'Rate'
            },
            {
              title: '数字输入框',
              name: 'Input-Number'
            },
            {
              title: '多行文本框',
              name: 'Textarea'
            }
          ]
        },
        {
          id: 'Layout',
          name: '布局',
          open: false,
          childrens: [
            {
              title: '布局',
              name: 'Layout'
            },
            {
              title: '栅格',
              name: 'Grid'
            },
            {
              title: '列表',
              name: 'List'
            },
            {
              title: '浮层',
              name: 'Float-Layout'
            }
          ]
        },
        {
          id: 'Navigation',
          name: '导航',
          childrens: [
            {
              title: '标签页',
              name: 'Tabs'
            },
            {
              title: '抽屉',
              name: 'Drawer'
            }
          ]
        }
      ]
    }
  }

  goToComponent = ({ name }) => {
    const url = `/pages/${name.toLowerCase()}/index`
    Taro.navigateTo({
      url
    })
  }

  render() {
    const { list } = this.state
    return (
      <View className='index-page'>
        <View className='page-header'>组件入口</View>
        <View className='page-body'>
          <View className='component-group'>
            {list.map((item, index) => {
              return (
                <View className='group-item' key={index}>
                  <View className='group-info'>
                    <View className='group-info-title'>{item.name}</View>
                  </View>
                  <View className='group-list'>
                    {item.childrens.map(child => {
                      return (
                        <View
                          key={index}
                          onClick={this.goToComponent.bind(this, child)}
                          className='list-component'>
                          <View className='list-component-info'>
                            {child.name} {child.title}
                          </View>
                          <View className='list-component-arrow' />
                        </View>
                      )
                    })}
                  </View>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}
