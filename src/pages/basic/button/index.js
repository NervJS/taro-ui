import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtButton from '../../../components/button/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class ButtonPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  onButtonClick () {
    const ENV = Taro.getEnv()
    if (ENV === 'WEAPP') Taro.showModal({ content: '您点击了！', showCancel: false })
    else if (ENV === 'WEB') alert('您点击了！')
  }

  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='按钮'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 主操作 */}
          <View className='panel'>
            <View className='panel__title'>主操作</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton type='primary' onClick={this.onButtonClick.bind(this)}>主操作按钮</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='primary' loading onClick={this.onButtonClick.bind(this)}>带loading</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='primary' icon='download' onClick={this.onButtonClick.bind(this)}>带icon</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='primary' active onClick={this.onButtonClick.bind(this)}>点击态</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='primary' disabled onClick={this.onButtonClick.bind(this)}>不可操作</AtButton>
              </View>
            </View>
          </View>

          {/* 次要操作 */}
          <View className='panel'>
            <View className='panel__title'>次要操作</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton type='secondary' onClick={this.onButtonClick.bind(this)}>次操作按钮</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='secondary' icon='download' onClick={this.onButtonClick.bind(this)}>带icon</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='secondary' active onClick={this.onButtonClick.bind(this)}>点击态</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton type='secondary' disabled onClick={this.onButtonClick.bind(this)}>不可操作</AtButton>
              </View>
            </View>
          </View>

          {/* 次次要操作 */}
          <View className='panel'>
            <View className='panel__title'>次次要操作</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <AtButton onClick={this.onButtonClick.bind(this)}>次次要操作按钮</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton icon='download' onClick={this.onButtonClick.bind(this)}>带icon</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton active onClick={this.onButtonClick.bind(this)}>点击态</AtButton>
              </View>
              <View className='btn-item'>
                <AtButton disabled onClick={this.onButtonClick.bind(this)}>不可操作</AtButton>
              </View>
            </View>
          </View>

          {/* 小按钮 */}
          <View className='panel'>
            <View className='panel__title'>小按钮</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' loading onClick={this.onButtonClick.bind(this)}></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' loading onClick={this.onButtonClick.bind(this)}></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' loading onClick={this.onButtonClick.bind(this)}></AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' active onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' active onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' active onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' disabled onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' disabled onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' disabled onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角按钮 */}
          <View className='panel'>
            <View className='panel__title'>圆角按钮</View>
            <View className='panel__content'>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' loading circle onClick={this.onButtonClick.bind(this)}></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' loading circle onClick={this.onButtonClick.bind(this)}></AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' loading circle onClick={this.onButtonClick.bind(this)}></AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' active circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' active circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' active circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
              </View>
              <View className='btn-item'>
                <View className='subitem'>
                  <AtButton type='primary' size='small' disabled circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton type='secondary' size='small' disabled circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
                </View>
                <View className='subitem'>
                  <AtButton size='small' disabled circle onClick={this.onButtonClick.bind(this)}>按钮</AtButton>
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
