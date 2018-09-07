import Taro from '@tarojs/taro'
import { View, Textarea } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => { }

export default class AtTextarea extends AtComponent {
  static defaultProps = {
    style: '',
    value: '',
    cursorSpacing: 100,
    maxlength: 200,
    placeholder: '',
    disabled: false,
    autoFocus: false,
    count: true,
    fixed: false,
    height: '',
    textOverflowForbidden: true,
    onChange: defaultFunc,
    onFocus: defaultFunc,
    onBlur: defaultFunc,
    onConfirm: defaultFunc
  }

  static propTypes = {
    style: PropTypes.string,
    value: PropTypes.string,
    cursorSpacing: PropTypes.number,
    maxlength: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    count: PropTypes.bool,
    textOverflowForbidden: PropTypes.bool,
    fixed: PropTypes.bool,
    height: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onConfirm: PropTypes.func
  }

  handleInput (e) {
    this.props.onChange(e, ...arguments)
  }

  handleFocus (e) {
    this.props.onFocus(e, ...arguments)
  }

  handleBlur (e) {
    this.props.onBlur(e, ...arguments)
  }

  handleConfirm (e) {
    this.props.onConfirm(e, ...arguments)
  }

  render () {
    const {
      style,
      value,
      cursorSpacing,
      placeholder,
      maxlength,
      count,
      disabled,
      autoFocus,
      fixed,
      textOverflowForbidden,
      height
    } = this.props
    let actualMaxlength = maxlength
    if (!textOverflowForbidden) {
      actualMaxlength += 500
    }
    const textareaStyle = height ? `height:${Taro.pxTransform(height)}` : ''

    return <View className='at-textarea' style={style}>
      <Textarea
        style={textareaStyle}
        placeholderClass='placeholder'
        cursorSpacing={cursorSpacing}
        className='at-textarea__textarea'
        value={value}
        showConfirmBar={false}
        confirmType='完成'
        maxlength={actualMaxlength}
        placeholder={placeholder}
        disabled={disabled}
        autoFocus={autoFocus}
        fixed={fixed}
        onInput={this.handleInput.bind(this)}
        onFocus={this.handleFocus.bind(this)}
        onBlur={this.handleBlur.bind(this)}
        onConfirm={this.handleConfirm.bind(this)}
      />
      {
        count
          ? <View
            className={
              maxlength < value.length
                ? 'at-textarea__bottom at-textarea--error'
                : 'at-textarea__bottom'
            }
          >
            {value.length}/{maxlength}
          </View>
          : null
      }
    </View>
  }
}
