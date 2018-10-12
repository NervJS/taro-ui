import Taro from '@tarojs/taro'
import { View, Input } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtInputNumber extends AtComponent {
  static defaultProps = {
    isTest: false,
    customStyle: '',
    className: '',
    disabled: false,
    value: 1,
    width: 80,
    min: 0,
    max: 100,
    step: 1,
    size: '',
    onChange: () => { }
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
    disabled: PropTypes.bool,
    value: PropTypes.number,
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
    const numStr = num.toString()
    if (numStr.indexOf('0') === 0 && numStr.indexOf('.') === -1) {
      return parseFloat(num)
    }
    return num
  }

  handleMinus () {
    const { disabled, value, min, step } = this.props
    if (disabled) return

    let nextValue = AtInputNumber.addNum(value, -step)
    nextValue = nextValue > min ? nextValue : min
    this.props.onChange(AtInputNumber.parseValue(nextValue))
  }

  handlePlus () {
    const { disabled, value, max, step } = this.props
    if (disabled) return

    let nextValue = AtInputNumber.addNum(value, step)
    nextValue = nextValue < max ? nextValue : max
    this.props.onChange(AtInputNumber.parseValue(nextValue))
  }

  handleInput (e) {
    const { value } = e.target
    const { disabled, min, max } = this.props
    if (disabled) return

    let nextValue = value < max ? value : max
    nextValue = nextValue > min ? nextValue : min
    this.props.onChange(AtInputNumber.parseValue(nextValue))
  }

  render () {
    const {
      isTest,
      customStyle,
      className,
      width,
      disabled,
      value,
      min,
      max,
      size
    } = this.props

    if (isTest) {
      Taro.initPxTransform({ designWidth: 750 })
    }
    const inputStyle = `width: ${Taro.pxTransform(width)}`

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
            value <= min || disabled
              ? 'at-input-number__btn at-input-number--disabled'
              : 'at-input-number__btn'
          }
          onClick={this.handleMinus.bind(this)}
        >
          <AtIcon value='subtract' size='18' />
        </View>
        <Input
          className='at-input-number__input'
          style={inputStyle}
          type='digit'
          value={value}
          disabled={disabled}
          onInput={this.handleInput.bind(this)}
        />
        <View
          className={
            value >= max || disabled
              ? 'at-input-number__btn at-input-number--disabled'
              : 'at-input-number__btn'
          }
          onClick={this.handlePlus.bind(this)}
        >
          <AtIcon value='add' size='18' />
        </View>
      </View>
    )
  }
}
