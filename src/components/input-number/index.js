import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'

/**
 * @author:chenzeji
 * @description 数字输入框
 * @prop value {Number} 当前输入框值 default: 1
 * @prop min  {Number} 最小值 default: 0
 * @prop max {Number} 最大值 default:100
 * @prop step {Number} 每次点击改变的间隔大小 default:1
 * @prop disabled {Boolean} 是否禁止点击 default: false
 * @prop onChange {Function} 监听事件改变函数
 */
class AtInputNumber extends Taro.Component {
  static addNum (num1, num2) {
    let sq1, sq2
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
    const m = Math.pow(10, Math.max(sq1, sq2))
    return (Math.round(num1 * m) + Math.round(num2 * m)) / m
  }
  handleMinus () {
    const { disabled, value, min, step } = this.props
    if (disabled) return
    let nextValue = AtInputNumber.addNum(value, -step)
    nextValue = nextValue > min ? nextValue : min
    this.props.onChange(nextValue)
  }
  handlePlus () {
    const { disabled, value, max, step } = this.props
    if (disabled) return
    let nextValue = AtInputNumber.addNum(value, step)
    nextValue = nextValue < max ? nextValue : max
    this.props.onChange(nextValue)
  }
  handleInput (e) {
    const { value } = e.target
    const { disabled, min, max } = this.props
    if (disabled) return
    let nextValue = value < max ? value : max
    nextValue = nextValue > min ? nextValue : min
    this.props.onChange(nextValue)
  }
  render () {
    const { width, disabled, value, min, max, size } = this.props
    const inputStyle = `width: ${Taro.pxTransform(width)}`
    const rootCls = ['at-input-number']
    if (size) {
      rootCls.push('at-input-number--lg')
    }
    return <View className={rootCls} >
      <View className='at-input-number__btn' onClick={this.handleMinus.bind(this)}>
        <AtIcon value='subtract' color={value <= min || disabled ? '#ccc' : '#6190e8'} size='18' />
      </View>
      <Input className='at-input-number__input'
        style={inputStyle}
        type='number'
        value={value}
        disabled={disabled}
        onInput={this.handleInput.bind(this)}
      />
      <View className='at-input-number__btn' onClick={this.handlePlus.bind(this)}>
        <AtIcon value='add' color={value >= max || disabled ? '#ccc' : '#6190e8'} size='18' />
      </View>
    </View>
  }
}
AtInputNumber.defaultProps = {
  disabled: false,
  value: 1,
  width: 80,
  min: 0,
  max: 100,
  step: 1,
  size: '',
  onChange: () => {}
}
AtInputNumber.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.number,
  width: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  size: PropTypes.string,
  onChange: PropTypes.func
}
export default AtInputNumber
