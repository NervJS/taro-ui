import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

/**
 * @author:chenzeji
 * @description 数字输入框
 * @prop value {Number} 当前输入框值 default: 1
 * @prop min  {Number} 最小值 default: 0
 * @prop max {Number} 最大值 default:100
 * @prop step {Number} 每次点击改变的间隔大小 default:1
 * @prop onChange {Function} 监听事件改变函数
 */
class AtInputNumber extends Taro.Component {
  static addNum (num1, num2) {
    let sq1, sq2, m
    try {
      sq1 = num1.toString().split('.')[1].length
    } catch (e) {
      sq1 = 0
    }
    try {
      sq2 = num2.toString().split('.')[1].length
    } catch (e) {
      sq2 = 0
    }
    m = Math.pow(10, Math.max(sq1, sq2))
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m
  }
  handleMinus () {
    let value = AtInputNumber.addNum(this.props.value, -this.props.step)
    value = value > this.props.min ? value : this.props.min
    this.props.onChange({ value })
  }
  handlePlus () {
    let value = AtInputNumber.addNum(this.props.value, this.props.step)
    value = value < this.props.max ? value : this.props.max
    this.props.onChange({ value })
  }
  render () {
    return <View className='at-inputnumber'>
      <View className={this.props.value <= this.props.min ? 'at-inputnumber__btn at-inputnumber__btn--disabled' : 'at-inputnumber__btn'} onClick={this.handleMinus.bind(this)}>-</View>
      <Input className='at-inputnumber__input'
        type='number'
        value={this.props.value}
      />
      <View className={this.props.value >= this.props.max ? 'at-inputnumber__btn at-inputnumber__btn--disabled' : 'at-inputnumber__btn'} onClick={this.handlePlus.bind(this)}>+</View>
    </View>
  }
}
AtInputNumber.defaultProps = {
  value: 1,
  min: 0,
  max: 100,
  step: 1,
  onChange: () => {}
}
AtInputNumber.propTypes = {
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  onChange: PropTypes.func
}
export default AtInputNumber
