import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import AtAccordion from '../../../components/accordion/index'
import AtList from '../../../components/list/index'
import AtListItem from '../../../components/list/item/index'
import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class CardPage extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  onClick (e) {
    console.log(e)
  }


  render () {
    return (
      <View className='page'>
        <DocsHeader title='accordion 手风琴' />
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <AtAccordion
                  onClick={this.onClick.bind(this)}
                  title='标题一'
                >
                  <AtList hasBorder={false}>
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
                </AtAccordion>
                <AtAccordion title='标题二'>
                  <AtList hasBorder={false}>
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
                </AtAccordion>
                <AtAccordion title='标题三' icon={{ value: 'chevron-down', color: 'red' }}>
                  <AtList hasBorder={false}>
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
                </AtAccordion>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
