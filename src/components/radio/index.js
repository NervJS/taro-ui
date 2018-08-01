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
 * @prop onChange {Function} 监听事件改变函数
 */
class AtRadio extends Taro.Component {
  handleClick (value) {
    this.props.onClick(value, ...arguments)
  }
  render () {
    const { options, value } = this.props
    return <View className='at-radio'>
      {
        options.map(option => <View key={option} onClick={this.handleClick.bind(this, option.value)} className={option.value === value ? 'at-radio__option at-radio__option--selected' : 'at-radio__option'} >
          <View className='at-radio__title'>{option.label}</View>
          <View className='at-radio__icon'>
            <AtIcon value='right' size='20' color='#6190e8' />
          </View>
        </View>)
      }
    </View>
  }
}
AtRadio.defaultProps = {
  value: '',
  options: [],
  onChange: () => {}
}
AtRadio.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  onChange: PropTypes.func,
}
export default AtRadio
