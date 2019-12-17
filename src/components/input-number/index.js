import Taro from '@tarojs/taro'
import * as React from 'nervjs'
import { View, Input, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _toString from 'lodash/toString'

import AtComponent from '../../common/component'
import { initTestEnv } from '../../common/utils'

// 实现两数相加并保留小数点后最短尾数
function addNum (num1, num2) {
  let sq1, sq2
  try {
    sq1 = _toString(num1).split('.')[1].length
  } catch (e) {
    sq1 = 0
  }
  try {
    sq2 = _toString(num2).split('.')[1].length
  } catch (e) {
    sq2 = 0
  }
  const m = Math.pow(10, Math.max(sq1, sq2))
  return (Math.round(num1 * m) + Math.round(num2 * m)) / m
}

// 格式化数字，处理01变成1,并且不处理1. 这种情况
function parseValue (num) {
  if (num === '') return '0'

  const numStr = _toString(num)
  if (numStr.indexOf('0') === 0
    && numStr.indexOf('.') === -1) {
    // 处理01变成1,并且不处理1.
    return _toString(parseFloat(num))
  }
  return _toString(num)
}

initTestEnv()

class AtInputNumber extends AtComponent {
  handleClick (clickType) {
    const { disabled, value, min, max, step } = this.props
    const lowThanMin = (clickType === 'minus' && value <= min)
    const overThanMax = (clickType === 'plus' && value >= max)
    if (lowThanMin || overThanMax || disabled) {
      const deltaValue = clickType === 'minus' ? -step : step
      const errorValue = addNum(value, deltaValue)
      if (disabled) {
        this.handleError({
          type: 'DISABLED',
          errorValue,
        })
      } else {
        this.handleError({
          type: lowThanMin ? 'LOW' : 'OVER',
          errorValue,
        })
      }
      return
    }
    const deltaValue = clickType === 'minus' ? -step : step
    let newValue = addNum(value, deltaValue)
    newValue = this.handleValue(newValue)
    this.props.onChange(newValue)
  }

  handleValue = value => {
    const { max, min } = this.props
    let resultValue = value === '' ? min : value
    // 此处不能使用 Math.max，会是字符串变数字，并丢失 .
    if (resultValue > max) {
      resultValue = max
      this.handleError({
        type: 'OVER',
        errorValue: resultValue,
      })
    }
    if (resultValue < min) {
      resultValue = min
      this.handleError({
        type: 'LOW',
        errorValue: resultValue,
      })
    }
    resultValue = parseValue(resultValue)
    return resultValue
  }

  handleInput = (e, ...arg) => {
    const { value } = e.target
    const { disabled } = this.props
    if (disabled) return

    const newValue = this.handleValue(value)
    this.props.onChange(newValue, e, ...arg)
    return newValue
  }

  handleBlur = (...arg) => this.props.onBlur(...arg)

  handleError = errorValue => {
    if (!this.props.onErrorInput) { return }
    this.props.onErrorInput(errorValue)
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
      size,
      disabledInput
    } = this.props

    const inputStyle = {
      width: width ? `${Taro.pxTransform(width)}` : ''
    }
    const inputValue = this.handleValue(value)
    const rootCls = classNames('at-input-number', {
      'at-input-number--lg': size
    }, className)
    const minusBtnCls = classNames('at-input-number__btn', {
      'at-input-number--disabled': inputValue <= min || disabled
    })
    const plusBtnCls = classNames('at-input-number__btn', {
      'at-input-number--disabled': inputValue >= max || disabled
    })

    return (
      <View className={rootCls} style={customStyle}>
        <View className={minusBtnCls} onClick={this.handleClick.bind(this, 'minus')}>
          <Text className='at-icon at-icon-subtract at-input-number__btn-subtract'></Text>
        </View>
        <Input
          className='at-input-number__input'
          style={inputStyle}
          type={type}
          value={inputValue}
          disabled={disabledInput || disabled}
          onInput={this.handleInput}
          onBlur={this.handleBlur}
        />
        <View className={plusBtnCls} onClick={this.handleClick.bind(this, 'plus')}>
          <Text className='at-icon at-icon-add at-input-number__btn-add'></Text>
        </View>
      </View>
    )
  }
}

AtInputNumber.defaultProps = {
  customStyle: '',
  className: '',
  disabled: false,
  disabledInput: false,
  value: 1,
  type: 'number',
  width: 0,
  min: 0,
  max: 100,
  step: 1,
  size: '',
  onChange: () => {},
  onBlur: () => {},
}

AtInputNumber.propTypes = {
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
  disabledInput: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onErrorInput: PropTypes.func,
}

export default AtInputNumber
