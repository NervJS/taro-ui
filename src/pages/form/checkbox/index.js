import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtCheckbox from '../../../components/checkbox/index'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'checkbox 使用范例'
  }
  constructor () {
    super(...arguments)
    this.state = {
      checkedList: ['苹果'],
      checkboxOption: [
        { value: '苹果', desc: '苹果味甘、酸，性凉，归脾、肺经；具有生津、润肺，除烦解暑，开胃、醒酒，止泻的功效；' },
        { value: '菠萝', desc: '菠萝原生长在半荫的热带雨林，较耐阴，由于长期人工栽培驯化而对光照要求增加，充足的光照下生长良好、果实含糖量高、品质佳' },
        { value: '梨子' }
      ]
    }
  }
  handleCheckboxChange (detail) {
    this.setState({
      checkedList: detail.value
    })
  }
  render () {
    return (
      <View className='page'>
        {/* S Header */}
        <View className='doc-header'>
          <View className='doc-header__title'>复选框</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础复选框</View>
            <View className='panel__content'>
              <View className='example__body'>
                <AtCheckbox options={this.state.checkboxOption} selectedList={this.state.checkedList} onChange={this.handleCheckboxChange.bind(this)} />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
