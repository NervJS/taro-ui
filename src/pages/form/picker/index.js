import Taro from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import AtList from '../../../components/list/index'
import AtListItem from '../../../components/list/item/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  state = {
    selector: ['中国', '美国', '巴西', '日本'],
    multiSelector: [['饭', '粥', '粉'], ['猪肉', '牛肉']],
    selectorValue: 0,
    mulitSelectorValues: [0, 1],
    timeSel: '06:18',
    dateSel: '2018-06-18'
  }

  handleChange = e => {
    this.setState({
      selectorValue: e.detail.value
    })
  }

  handleMulitChange = e => {
    this.setState({
      mulitSelectorValues: e.detail.value
    })
  }

  handleTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }

  handleDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  render () {
    const {
      selector,
      selectorValue,
      multiSelector,
      mulitSelectorValues,
      timeSel,
      dateSel
    } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Picker 选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 普通选择器 */}
          <View className='panel'>
            <View className='panel__title'>普通选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtList>
                  <Picker mode='selector' range={selector} value={selectorValue} onChange={this.handleChange}>
                    <AtListItem title='国家地区' extraText={selector[selectorValue]} />
                  </Picker>
                </AtList>
              </View>
            </View>
          </View>

          {/* 多列选择器 */}
          <View className='panel'>
            <View className='panel__title'>多列选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtList>
                  <Picker mode='multiSelector' range={multiSelector} value={mulitSelectorValues} onChange={this.handleMulitChange}>
                    <AtListItem title='请选择早餐' extraText={`${multiSelector[0][mulitSelectorValues[0]]} & ${multiSelector[1][mulitSelectorValues[1]]}`} />
                  </Picker>
                </AtList>
              </View>
            </View>
          </View>

          {/* 时间选择器 */}
          <View className='panel'>
            <View className='panel__title'>时间选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtList>
                  <Picker mode='time' value={timeSel} onChange={this.handleTimeChange}>
                    <AtListItem title='请选择时间' extraText={timeSel} />
                  </Picker>
                </AtList>
              </View>
            </View>
          </View>

          {/* 日期选择器 */}
          <View className='panel'>
            <View className='panel__title'>日期选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <AtList>
                  <Picker mode='date' value={dateSel} onChange={this.handleDateChange}>
                    <AtListItem title='请选择日期' extraText={dateSel} />
                  </Picker>
                </AtList>
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
