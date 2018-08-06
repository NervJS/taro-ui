import Taro from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'

import logoImg from '../../assets/images/logo_taro.png'
import iconBasic from '../../assets/images/icon-list-basic.png'
import iconView from '../../assets/images/icon-list-view.png'
import iconAction from '../../assets/images/icon-list-action.png'
import iconForm from '../../assets/images/icon-list-form.png'
import iconLayout from '../../assets/images/icon-list-layout.png'
import iconNavigation from '../../assets/images/icon-list-navigation.png'

import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)

    this.state = {
      list: [
        {
          id: 'Basic',
          title: '基础',
          content: '包含颜色、文本、图标',
          icon: iconBasic
        },
        {
          id: 'View',
          title: '视图',
          content: '6个组件',
          icon: iconView
        },
        {
          id: 'Action',
          title: '操作反馈',
          content: '5个组件',
          icon: iconAction
        },
        {
          id: 'Form',
          title: '表单',
          content: '7个组件',
          icon: iconForm
        },
        {
          id: 'Layout',
          title: '布局',
          content: '5个组件',
          icon: iconLayout
        },
        {
          id: 'Navigation',
          title: '导航',
          content: '6个组件',
          icon: iconNavigation
        }
      ]
    }
  }

  gotoPanel = e => {
    const { id } = e.currentTarget.dataset
    Taro.navigateTo({
      url: `/pages/panel/index?id=${id.toLowerCase()}`
    })
  }

  render () {
    const { list } = this.state

    return (
      <View className='page page-index'>
        <View className='logo'>
          <Image src={logoImg} className='img' mode='widthFix' />
        </View>
        <View className='page-title'>Taro UI Weapp</View>
        <View className='module-list'>
          {list.map((item, index) => (
            <View
              className='module-list__item'
              key={index}
              data-id={item.id}
              data-name={item.title}
              data-list={item.subpages}
              onClick={this.gotoPanel}
            >
              <View className='module-list__icon'>
                <Image src={item.icon} className='img' mode='widthFix' />
              </View>
              <View className='module-list__info'>
                <View className='title'>{item.title}</View>
                <View className='content'>{item.content}</View>
              </View>
              <View className='module-list__arrow'>
                <Text className='at-icon at-icon-chevron-right'></Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
