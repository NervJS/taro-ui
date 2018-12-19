import Taro from '@tarojs/taro'
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }

  constructor () {
    super(...arguments)
    const date = new Date()
    const years = []
    const months = []
    const days = []

    for (let i = 1990; i <= date.getFullYear(); i++) {
      years.push(i)
    }
    for (let i = 1; i <= 12; i++) {
      months.push(i)
    }
    for (let i = 1; i <= 31; i++) {
      days.push(i)
    }

    this.state = {
      years,
      year: date.getFullYear(),
      months,
      month: 2,
      days,
      day: 2,
      value: [9999, 5, 17],
      isWeapp: false
    }
  }

  handleChange = e => {
    const val = e.detail.value

    this.setState({
      year: this.state.years[val[0]],
      month: this.state.months[val[1]],
      day: this.state.days[val[2]],
      value: val
    })
  }

  componentDidMount () {
    const env = Taro.getEnv()
    this.setState({
      isWeapp: env === Taro.ENV_TYPE.WEAPP
    })
  }

  render () {
    const { years, months, days, value, year, month, day, isWeapp } = this.state

    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Picker View 滚动选择器'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content'>
              <View className='example-item'>
                <View className='example-item__desc'>嵌入页面的滑动选择器</View>
                {
                  isWeapp ? (
                    <View>
                      <View className='title-date'>{year}年{month}月{day}日</View>
                      <PickerView indicatorStyle='height: 50px;' className='picker' style='width: 100%; height: 300px; text-align: center;' value={value} onChange={this.handleChange}>
                        <PickerViewColumn>
                          { years.map((item, idx) => <View key={idx} style='line-height: 50px'>{item}年</View>) }
                        </PickerViewColumn>
                        <PickerViewColumn>
                          { months.map((item, idx) => <View key={idx} style='line-height: 50px'>{item}月</View>) }
                        </PickerViewColumn>
                        <PickerViewColumn>
                          { days.map((item, idx) => <View key={idx} style='line-height: 50px'>{item}日</View>) }
                        </PickerViewColumn>
                      </PickerView>
                    </View>
                  ) : <View className='title-date'>暂时仅支持微信小程序</View>
                }
              </View>
            </View>
          </View>

        </View>
        {/* E Body */}
      </View>
    )
  }
}
