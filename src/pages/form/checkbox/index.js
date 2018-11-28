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
      checkedList1: ['list1'],
      checkedList2: ['list1'],
      checkedList3: ['list1', 'list4'],
      checkedList4: ['list1', 'list4'],
      checkboxOption1: [
        { value: 'list1', label: 'iPhone X' },
        { value: 'list2', label: 'HUAWEI P20' },
        { value: 'list3', label: 'OPPO Find X' }
      ],
      checkboxOption2: [
        { value: 'list1', label: 'iPhone X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
        { value: 'list2', label: 'HUAWEI P20', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
        { value: 'list3', label: 'OPPO Find X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' }
      ],
      checkboxOption3: [
        { value: 'list1', label: 'iPhone X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
        { value: 'list2', label: 'HUAWEI P20' },
        { value: 'list3', label: 'OPPO Find X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true },
        { value: 'list4', label: 'vivo NEX', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true }
      ],
      checkboxOption4: [
        { value: 'list1', label: 'iPhone X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。' },
        { value: 'list2', label: 'HUAWEI P20', thumb: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png' },
        { value: 'list3', label: 'OPPO Find X', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', thumb: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png' },
        { value: 'list4', label: 'vivo NEX', desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。', disabled: true, thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' },
        { value: 'list5', label: 'vivo NEX', disabled: true, thumb: 'http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png' }
      ]
    }
  }

  handleChange (value) {
    this.setState({
      checkedList1: value
    })
  }

  handleChangeSnd (value) {
    this.setState({
      checkedList2: value
    })
  }

  handleChangeThd (value) {
    this.setState({
      checkedList3: value
    })
  }

  handleChangeFourth (value) {
    this.setState({
      checkedList4: value
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
          {/* 基础用法 */}
          <View className='panel'>
            <View className='panel__title'>基础用法</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption1}
                    selectedList={this.state.checkedList1}
                    onChange={this.handleChange.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* 含描述信息 */}
          <View className='panel'>
            <View className='panel__title'>含描述信息</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption2}
                    selectedList={this.state.checkedList2}
                    onChange={this.handleChangeSnd.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>

          {/* 选项禁用 */}
          <View className='panel'>
            <View className='panel__title'>选项禁用</View>
            <View className='panel__content no-padding'>
              <View className='example-item'>
                <View className='checkbox-container'>
                  <AtCheckbox
                    options={this.state.checkboxOption3}
                    selectedList={this.state.checkedList3}
                    onChange={this.handleChangeThd.bind(this)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 包含图片 */}
        <View className='panel'>
          <View className='panel__title'>含描图片</View>
          <View className='panel__content no-padding'>
            <View className='example-item'>
              <View className='checkbox-container'>
                <AtCheckbox
                  options={this.state.checkboxOption4}
                  selectedList={this.state.checkedList4}
                  onChange={this.handleChangeFourth.bind(this)}
                />
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
