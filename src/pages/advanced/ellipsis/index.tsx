import { View, Text } from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import { AtEllipsis } from 'taro-ui'
import DocsHeader from '../../components/doc-header'

export default class Index extends Component {
  public constructor(props: any) {
    super(props)
    this.state = {}
  }

  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI CG'
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Ellipsis 省略器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* Radio */}
          <View className='panel'>
            <View className='panel__title'>Normal</View>
            <View className='panel__content no-padding'>
              <View className='radio-container'>
                <AtEllipsis lines={2}>
                  啊啊及发家史覅氨,,,
                  <Text style='color: orange'>基酸覅健身房f奥</Text>
                  术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚
                </AtEllipsis>
              </View>
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>展开/收起</View>
            <View
              className='panel__content no-padding'
              style={{ width: '200px' }}
            >
              <AtEllipsis
                text='啊啊及发家史覅氨,,,基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚'
                textStyle={{
                  fontSize: 12
                }}
                btnText='全部展开全部'
                expand
                lines={2}
              />
            </View>
          </View>

          <View className='panel'>
            <View className='panel__title'>自定义</View>
            <View
              className='panel__content no-padding'
              style={{ width: '100px' }}
            >
              <AtEllipsis
                text='啊啊及发家史覅氨,,,基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚基酸覅健身房奥术大师大所大所多奥术大师大所大按实际嗲圣诞节爱神的箭加斯安抚'
                textStyle={{
                  fontSize: 12
                }}
                btnText='查看全部'
                btnTextStyle={{
                  color: 'red'
                }}
                onWillExpand={(text: any): boolean => {
                  Taro.showModal({
                    title: text
                  })
                  return false
                }}
                expand
                lines={2}
              />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
