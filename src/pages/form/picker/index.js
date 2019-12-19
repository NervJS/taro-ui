import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, Picker } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
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

  componentDidMount () {
    const env = Taro.getEnv()
    this.setState({
      isAlipay: env === Taro.ENV_TYPE.ALIPAY,
    })
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
      dateSel,
      isAlipay,
    } = this.state

    return (
      <View className='page picker__page'>
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
                <Picker mode='selector' range={selector} value={selectorValue} onChange={this.handleChange}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>国家地区</View>
                    <View className='demo-list-item__value'>{selector[selectorValue]}</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>

          {/* 多列选择器 */}
          {!isAlipay && (
            <View className='panel'>
              <View className='panel__title'>多列选择器</View>
              <View className='panel__content'>
                <View className='example-item'>
                  <Picker mode='multiSelector' range={multiSelector} value={mulitSelectorValues} onChange={this.handleMulitChange}>
                    <View className='demo-list-item'>
                      <View className='demo-list-item__label'>请选择早餐</View>
                      <View className='demo-list-item__value'>{`${multiSelector[0][mulitSelectorValues[0]]} & ${multiSelector[1][mulitSelectorValues[1]]}`}</View>
                    </View>
                  </Picker>
                </View>
              </View>
            </View>
          )}

          {/* 时间选择器 */}
          <View className='panel'>
            <View className='panel__title'>时间选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Picker mode='time' value={timeSel} onChange={this.handleTimeChange}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>请选择时间</View>
                    <View className='demo-list-item__value'>{timeSel}</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>

          {/* 日期选择器 */}
          <View className='panel'>
            <View className='panel__title'>日期选择器</View>
            <View className='panel__content'>
              <View className='example-item'>
                <Picker mode='date' value={dateSel} onChange={this.handleDateChange}>
                  <View className='demo-list-item'>
                    <View className='demo-list-item__label'>请选择日期</View>
                    <View className='demo-list-item__value'>{dateSel}</View>
                  </View>
                </Picker>
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
