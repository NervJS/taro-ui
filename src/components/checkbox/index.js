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
 * @prop options {Array} 选项列表 eg: [{value:'苹果',desc:'这个苹果又大又甜'}]
 */
class AtCheckbox extends Taro.Component {
  handleClick(value) {
    const selectedList = new Set(this.props.selectedList)
    if (!selectedList.has(value)) {
      selectedList.add(value)
    } else {
      selectedList.delete(value)
    }
    this.props.onChange({ value: Array.from(selectedList)})
  }
  render() {
    return <View className='at-checkbox'>
    {
      this.props.options.map(option => {
        return <View key={option} onClick={this.handleClick.bind(this, option.value)} className='at-checkbox__option'>
          <View className='at-checkbox__top'>
            <View className={this.props.selectedList.includes(option.value) ? 'at-checkbox__icon at-checkbox__icon--selected' : 'at-checkbox__icon'}>
              <AtIcon type='right' size='30' color='#fff' />
            </View>
            <View className='at-checkbox__title'>{option.value}</View>
          </View>
          {option.desc ? <View className='at-checkbox__desc'>{option.desc}</View> : null}
        </View>
      })
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
