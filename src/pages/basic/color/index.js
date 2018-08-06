import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import DocsHeader from '../../components/doc-header'

import './index.scss'

export default class BasicColor extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)

    this.state = {
      colorData: [
        {
          type: '主色',
          data: [
            {
              name: 'Light Blue',
              hex: '#78A4FA'
            },
            {
              name: 'Blue',
              hex: '#6190E8'
            },
            {
              name: 'Dark Blue',
              hex: '#346FC2'
            }
          ]
        },
        {
          type: '辅助色',
          data: [
            {
              name: 'Blue - Info',
              hex: '#78A4FA'
            },
            {
              name: 'Green - Positive',
              hex: '#13CE66'
            },
            {
              name: 'Red - Negative',
              hex: '#FF4949'
            },
            {
              name: 'Yellow - Warning',
              hex: '#FFC82C'
            }
          ]
        },
        {
          type: '中性色',
          data: [
            {
              name: '黑色 0',
              hex: '#333333'
            },
            {
              name: '黑色 1',
              hex: '#7F7F7F'
            },
            {
              name: '黑色 2',
              hex: '#B2B2B2'
            },
            {
              name: '灰色 0',
              hex: '#333333'
            },
            {
              name: '灰色 1',
              hex: '#666666'
            },
            {
              name: '灰色 2',
              hex: '#999999'
            },
            {
              name: '灰色 3',
              hex: '#CCCCCC'
            },
            {
              name: '灰色 4',
              hex: '#E5E5E5'
            },
            {
              name: '灰色 5',
              hex: '#F0F0F0'
            },
            {
              name: '灰色 6',
              hex: '#F7F7F7'
            }
          ]
        },
        {
          type: '其他色',
          data: [
            {
              name: '边框可选色',
              hex: '#C5D9E8'
            },
            {
              name: '背景色 0',
              hex: '#ECF5FD'
            },
            {
              name: '背景色 1',
              hex: '#FAFBFC'
            }
          ]
        }
      ]
    }
  }

  render () {
    const { colorData } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Color 颜色'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {colorData.map(item => (
            <View className='panel' key={item.type}>
              <View className='panel__title'>{item.type}</View>
              <View className='panel__content'>
                <View className='color-list'>
                  {item.data.map(color => {
                    return (
                      <View className='color-item' key={color.hex}>
                        <View className='color-item__circle' style={`background: ${color.hex}`}>
                          <View className='inner-circle-1'></View>
                          <View className='inner-circle-2' style={`border-color: ${color.hex}`}></View>
                        </View>
                        <View className='color-item__info'>
                          <View className='name'>{color.name}</View>
                          <View className='hex'>{color.hex}</View>
                        </View>
                      </View>
                    )
                  })}
                </View>
              </View>
            </View>
          ))}
        </View>
        {/* E Body */}
      </View>
    )
  }
}
