import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import './index.scss'

export default class PanelBasic extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)

    this.state = {
      panelNames: {
        'basic': '基础',
        'view': '视图',
        'action': '操作反馈',
        'form': '表单',
        'layout': '布局',
        'navigation': '导航'
      },
      list: {
        'basic': [
          {
            id: 'Icon',
            name: '图标'
          },
          {
            id: 'Color',
            name: '颜色'
          },
          {
            id: 'Typo',
            name: '字体'
          },
          {
            id: 'Button',
            name: '按钮'
          }
        ],
        'view': [
          {
            id: 'NoticeBar',
            name: '通告栏'
          },
          {
            id: 'Badge',
            name: '徽章'
          },
          {
            id: 'Alert',
            name: '警告提示'
          },
          {
            id: 'Tag',
            name: '标签'
          },
          {
            id: 'Avatar',
            name: '头像'
          },
          {
            id: 'Article',
            name: '文章'
          }
        ],
        'action': [
          {
            id: 'Action-Sheet',
            name: '动作面板'
          },
          {
            id: 'Activity-Indicator',
            name: '动作指示器'
          },
          {
            id: 'Modal',
            name: '对话框'
          },
          {
            id: 'Progress',
            name: '进度条'
          },
          {
            id: 'Toast',
            name: '轻提示'
          }
        ],
        'form': [
          {
            id: 'Input',
            name: '输入框'
          },
          {
            id: 'Radio',
            name: '单选框'
          },
          {
            id: 'Checkbox',
            name: '复选框'
          },
          {
            id: 'Switch',
            name: '开关'
          },
          {
            id: 'Rate',
            name: '评分'
          },
          {
            id: 'Input-Number',
            name: '数字输入框'
          },
          {
            id: 'Textarea',
            name: '多行文本框'
          }
        ],
        'layout': [
          {
            id: 'Flex',
            name: '弹性布局'
          },
          {
            id: 'Grid',
            name: '栅格'
          },
          {
            id: 'List',
            name: '列表'
          },
          {
            id: 'Float-Layout',
            name: '浮层'
          },
          {
            id: 'Card',
            name: '卡片'
          }
        ],
        'navigation': [
          {
            id: 'NavBar',
            name: '导航栏'
          },
          {
            id: 'TabBar',
            name: '标签栏'
          },
          {
            id: 'Tabs',
            name: '标签页'
          },
          {
            id: 'Segmented-Control',
            name: '分段器'
          },
          {
            id: 'Timeline',
            name: '时间轴'
          },
          {
            id: 'Pagination',
            name: '分页器'
          },
          {
            id: 'Drawer',
            name: '抽屉'
          }
        ]
      }
    }
  }

  componentDidMount () {
    const { id } = this.$router.params
    this.setState({
      currentId: id.toLowerCase() || ''
    })
  }

  gotoComponent = e => {
    const { id, parent } = e.currentTarget.dataset
    Taro.navigateTo({
      url: `/pages/${parent.toLowerCase()}/${id.toLowerCase()}/index`
    })
  }

  render () {
    const { list, currentId, panelNames } = this.state
    const itemList = list[currentId] || []
    const title = panelNames[currentId] || ''

    return (
      <View className='page'>
        {/* S Header */}
        <View className='panel-header'>
          <View className='panel-header__icon'>
            <Text className='at-icon at-icon-barrage'></Text>
          </View>
          <View className='panel-header__title'>{title}</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='panel-body'>
          <View className='component-list'>
            {itemList.map(item => (
              <View
                className='component-list__item'
                key={item.id}
                data-id={item.id}
                data-parent={currentId}
                onClick={this.gotoComponent}
              >
                <Text className='name'>{`${item.id} ${item.name}`}</Text>
                <Text className='at-icon at-icon-enter'></Text>
              </View>
            ))}
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
