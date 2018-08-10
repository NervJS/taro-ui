import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'

/**
 * @author: chenzeji
 * @description 多选框组件
 * @prop onChange {Function} 监听数据改变事件
 * @prop selectedList  {Array} 被选中的选项列表 eg: ['苹果']
 * @prop options {Array} 选项列表 eg: [{value:'apple', label: '苹果', desc:'这个苹果又大又甜'}]
 */
class AtCheckbox extends Taro.Component {
  handleClick (option) {
    if (option.disabled) return
    const value = option.value
    const selectedList = new Set(this.props.selectedList)
    if (!selectedList.has(value)) {
      selectedList.add(value)
    } else {
      selectedList.delete(value)
    }
    this.props.onChange(Array.from(selectedList))
  }
  render () {
    const { options, selectedList } = this.props
    return <View className='at-checkbox'>
      {
        options.map(option => <View key={option.value} onClick={this.handleClick.bind(this, option)} className={option.disabled ? 'at-checkbox__option at-checkbox__option--disabled' : 'at-checkbox__option'}>
          <View className='at-checkbox__option_wrap'>
            <View className='at-checkbox__option_container'>
              <View className={selectedList.includes(option.value) ? 'at-checkbox__icon at-checkbox__icon--selected' : 'at-checkbox__icon'}>
                <View className='at-checkbox__icon_container'>
                  <AtIcon value='check' size='14' color='#fff' />
                </View>
              </View>
              <View className='at-checkbox__title'>{option.label}</View>
            </View>
            {option.desc ? <View className='at-checkbox__desc'>{option.desc}</View> : null}
          </View>
        </View>)
      }
    </View>
  }
}
AtCheckbox.defaultProps = {
  options: [],
  selectedList: [],
  onChange: () => {}
}
AtCheckbox.propTypes = {
  options: PropTypes.array,
  selectedList: PropTypes.array,
  onChange: PropTypes.func,
}
export default AtCheckbox
