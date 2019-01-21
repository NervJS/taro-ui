import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class TagPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    this.state = {
      tagList: [
        { name: 'tag-1', active: false },
        { name: 'tag-2', active: false },
        { name: 'tag-3', active: true },
        { name: 'tag-4', active: true }
      ],
    }
  }

  onClick (data) {
    const { tagList } = this.state
    const findIndex = this.state.tagList.findIndex(item => item.name === data.name)
    const active = !tagList[findIndex].active
    const content = `您点击的 tag 标签名是：${data.name}，点击前是否选中：${data.active}，点击后：${active}`

    tagList[findIndex].active = active
    this.setState({ tagList })

    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      alert(content)
    } else {
      Taro.showModal({ content, showCancel: false })
    }

    console.log(data)
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Tag 标签'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 空心标签 */}
          <View className='panel'>
            <View className='panel__title'>空心标签</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag circle>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 实心标签 */}
          <View className='panel'>
            <View className='panel__title'>实心标签</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag type='primary' circle>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag type='primary'>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag type='primary' circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag type='primary' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 点击事件 */}
          <View className='panel'>
            <View className='panel__title'>点击事件</View>
            <View className='panel__content'>
              <View className='example-item'>
                {this.state.tagList.map((item, index) => <View className='subitem' key={index}><AtTag name={item.name} type='primary' active={item.active} circle={index % 2 === 0} onClick={this.onClick.bind(this)}>tag-{index + 1}</AtTag></View>
                )}
              </View>
            </View>
          </View>

          {/* 不可点击态 */}
          <View className='panel'>
            <View className='panel__title'>不可点击态</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag type='primary' disabled>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 空心标签（小） */}
          <View className='panel'>
            <View className='panel__title'>空心标签（小）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag size='small' circle>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small'>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 实心标签（小） */}
          <View className='panel'>
            <View className='panel__title'>实心标签（小）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag size='small' type='primary' circle>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary'>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary' circle active>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary' active>标签</AtTag>
                </View>
              </View>
            </View>
          </View>

          {/* 不可点击态（小） */}
          <View className='panel'>
            <View className='panel__title'>不可点击态（小）</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='subitem'>
                  <AtTag size='small' type='primary' circle disabled>标签</AtTag>
                </View>
                <View className='subitem'>
                  <AtTag size='small' type='primary' disabled>标签</AtTag>
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
