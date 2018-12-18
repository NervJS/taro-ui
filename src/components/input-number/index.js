import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => {}
export default class AtInputNumber extends AtComponent {
  static defaultProps = {
    isTest: false,
    customStyle: '',
    className: '',
    disabled: false,
    value: 1,
    type: 'number',
    width: 80,
    min: 0,
    max: 100,
    step: 1,
    size: '',
    onChange: defaultFunc,
    onBlur: defaultFunc
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    value: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
    ]),
    type: PropTypes.oneOf(['number', 'digit']),
    disabled: PropTypes.bool,
    width: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    size: PropTypes.string,
    onChange: PropTypes.func
  }

  // 实现两数相加并保留小数点后最短尾数
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

  // 格式化数字，处理01变成1,并且不处理1. 这种情况
  static parseValue (num) {
    if (num === '') {
      return '0'
    }
    const numStr = num.toString()
    if (numStr.indexOf('0') === 0
      && numStr.indexOf('.') === -1) {
      // 处理01变成1,并且不处理1.
      return parseFloat(num).toString()
    }
    return num.toString()
  }

  constructor () {
    super(...arguments)
    if (process.env.NODE_ENV === 'test') {
      Taro.initPxTransform({ designWidth: 750 })
    }
  }

  handleMinus () {
    const { disabled, value, min, step } = this.props
    const currentValue = parseFloat(value)
    if (disabled || currentValue <= min) return

    let nextValue = AtInputNumber.addNum(currentValue, -step)
    nextValue = nextValue > min ? nextValue : min
    this.props.onChange(AtInputNumber.parseValue(nextValue))
  }

  handlePlus () {
    const { disabled, value, max, step } = this.props
    const currentValue = parseFloat(value)
    if (disabled || currentValue >= max) return

    let nextValue = AtInputNumber.addNum(currentValue, step)
    nextValue = nextValue < max ? nextValue : max
    this.props.onChange(AtInputNumber.parseValue(nextValue))
  }

  handleValue (value) {
    const { max, min } = this.props
    let resultValue = value === '' ? min : value
    if (resultValue > max) {
      resultValue = max
    }
    if (resultValue < min) {
      resultValue = min
    }
    return resultValue
  }

  handleInput (e) {
    const { value } = e.target
    const { disabled } = this.props
    if (disabled) return

    const nextValue = AtInputNumber.parseValue(this.handleValue(value))
    this.props.onChange(nextValue)
    return nextValue.toString()
  }

  handleBlur () {
    this.props.onBlur(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      width,
      disabled,
      value,
      type,
      min,
      max,
      size
    } = this.props

    const inputStyle = `width: ${Taro.pxTransform(width)}`
    const inputValue = this.handleValue(value)

    return (
      <View
        className={
          classNames({
            'at-input-number': true,
            'at-input-number--lg': size
          }, className)
        }
        style={customStyle}
      >
        <View
          className={
            inputValue <= min || disabled
              ? 'at-input-number__btn at-input-number--disabled'
              : 'at-input-number__btn'
          }
          onClick={this.handleMinus.bind(this)}
        >
          <AtIcon customStyle={{ fontSize: '18px' }} value='subtract' />
        </View>
        <Input
          className='at-input-number__input'
          style={inputStyle}
          type={type}
          value={inputValue}
          disabled={disabled}
          onInput={this.handleInput.bind(this)}
          onBlur={this.handleBlur.bind(this)}
        />
        <View
          className={
            inputValue >= max || disabled
              ? 'at-input-number__btn at-input-number--disabled'
              : 'at-input-number__btn'
          }
          onClick={this.handlePlus.bind(this)}
        >
          <AtIcon customStyle={{ fontSize: '18px' }} value='add' />
        </View>
      </View>
    )
  }
}
