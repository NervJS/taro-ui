import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'

/**
 * @author:chenzeji
 * @description 单选框
 * @prop value {String} 当前单选框值
 * @prop options {Array} 选项列表 eg:[{label:'苹果',value:'apple'}]
 * @prop onClick {Function} 点击选项触发事件
 */
class AtRadio extends Taro.Component {
  handleClick (option) {
    if (option.disabled) return
    this.props.onClick(option.value, ...arguments)
  }
  render () {
    const { options, value } = this.props
    return <View className='at-radio'>
      {
        options.map(option => <View key={option.value} onClick={this.handleClick.bind(this, option)} className={option.disabled ? 'at-radio__option at-radio__option--disabled' : 'at-radio__option'}>
          <View className='at-radio__option_wrap'>
            <View className='at-radio__option_container'>
              <View className='at-radio__title'>{option.label}</View>
              <View className={value === option.value ? 'at-radio__icon at-radio__icon--checked' : 'at-radio__icon'}>
                <AtIcon value='check' size='14' color='#6190E8' />
              </View>
            </View>
            {option.desc ? <View className='at-radio__desc'>{option.desc}</View> : null}
          </View>
        </View>)
      }
    </View>
  }
}
AtRadio.defaultProps = {
  value: '',
  options: [],
  onClick: () => {}
}
AtRadio.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func,
}
export default AtRadio
