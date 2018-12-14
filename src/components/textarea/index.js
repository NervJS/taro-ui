import Taro from '@tarojs/taro'
import { View, Textarea } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => { }

export default class AtTextarea extends AtComponent {
  static defaultProps = {
    isTest: false,
    customStyle: '',
    className: '',
    value: '',
    cursorSpacing: 100,
    maxlength: 200,
    placeholder: '',
    disabled: false,
    autoFocus: false,
    focus: false,
    showConfirmBar: false,
    selectionStart: -1,
    selectionEnd: -1,
    count: true,
    fixed: false,
    height: '',
    textOverflowForbidden: true,
    onLinechange: defaultFunc,
    onChange: defaultFunc,
    onFocus: defaultFunc,
    onBlur: defaultFunc,
    onConfirm: defaultFunc
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
    value: PropTypes.string.isRequired,
    cursorSpacing: PropTypes.number,
    maxlength: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    placeholderClass: PropTypes.string,
    placeholderStyle: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    autoFocus: PropTypes.bool,
    focus: PropTypes.bool,
    showConfirmBar: PropTypes.bool,
    selectionStart: PropTypes.number,
    selectionEnd: PropTypes.number,
    count: PropTypes.bool,
    textOverflowForbidden: PropTypes.bool,
    fixed: PropTypes.bool,
    height: PropTypes.string,
    onLinechange: PropTypes.func,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onConfirm: PropTypes.func
  }

  constructor () {
    super(...arguments)
    if (process.env.NODE_ENV === 'test') {
      Taro.initPxTransform({ designWidth: 750 })
    }
  }

  handleInput () {
    this.props.onChange(...arguments)
  }

  handleFocus () {
    this.props.onFocus(...arguments)
  }

  handleBlur () {
    this.props.onBlur(...arguments)
  }

  handleConfirm () {
    this.props.onConfirm(...arguments)
  }

  handleLinechange () {
    this.props.onLinechange(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      value,
      cursorSpacing,
      placeholder,
      placeholderStyle,
      placeholderClass,
      maxlength,
      count,
      disabled,
      autoFocus,
      focus,
      showConfirmBar,
      selectionStart,
      selectionEnd,
      fixed,
      textOverflowForbidden,
      height
    } = this.props

    let actualMaxlength = maxlength
    if (!textOverflowForbidden) {
      actualMaxlength += 500
    }
    const textareaStyle = height ? `height:${Taro.pxTransform(height)}` : ''

    return (
      <View
        className={classNames('at-textarea', className)}
        style={customStyle}
      >
        <Textarea
          style={textareaStyle}
          placeholderStyle={placeholderStyle}
          placeholderClass={classNames('placeholder', placeholderClass)}
          cursorSpacing={cursorSpacing}
          className='at-textarea__textarea'
          value={value}
          confirmType='完成'
          maxlength={actualMaxlength}
          placeholder={placeholder}
          disabled={disabled}
          autoFocus={autoFocus}
          focus={focus}
          showConfirmBar={showConfirmBar}
          selectionStart={selectionStart}
          selectionEnd={selectionEnd}
          fixed={fixed}
          onInput={this.handleInput.bind(this)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onConfirm={this.handleConfirm.bind(this)}
          onLinechange={this.handleLinechange.bind(this)}
        />
        {
          count
            ? <View
              className={
                classNames({
                  'at-textarea__bottom': true,
                  'at-textarea--error': maxlength < value.length
                })
              }
            >
              {value.length}/{maxlength}
            </View>
            : null
        }
      </View>
    )
  }
}
