import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtCheckbox from '../../../components/checkbox/index'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: 'checkbox 使用范例'
  }
  constructor () {
    super(...arguments)
    this.state = {
      checkedList: ['apple'],
      checkboxOption: [
        { value: 'apple', label: '苹果', desc: '苹果味甘、酸，性凉，归脾、肺经；具有生津、润肺，除烦解暑，开胃、醒酒，止泻的功效；' },
        { value: 'pear', label: '梨子' },
        { value: 'pineapple', label: '菠萝', desc: '菠萝原生长在半荫的热带雨林，较耐阴，由于长期人工栽培驯化而对光照要求增加，充足的光照下生长良好、果实含糖量高、品质佳' }
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
        <DocsHeader title='复选框'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>基础复选框</View>
            <View className='panel__content'>
              <View className='example__body'>
                <AtCheckbox options={this.state.checkboxOption} selectedList={this.state.checkedList} onChange={this.handleChange.bind(this)} />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
