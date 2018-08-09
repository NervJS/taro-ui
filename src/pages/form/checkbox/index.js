import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtCheckbox from '../../../components/checkbox/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'Taro UI'
  }
  constructor () {
    super(...arguments)
    this.state = {
      checkedList: ['list1'],
      checkboxOption: [
        { value: 'list1', label: '多项列表', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
        { value: 'list2', label: '多项列表' },
        { disabled: true, value: 'list3', label: '多项列表禁止点击', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' }
      ]
    }
  }
  handleChange (value) {
    this.setState({
      checkedList: value
    })
  }
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Checkbox 复选框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础复选框</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption}
                    selectedList={this.state.checkedList}
                    onChange={this.handleChange.bind(this)}
                  />
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
