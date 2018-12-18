import Taro from '@tarojs/taro'
import { View, Input, Label } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => { }

export default class AtInput extends AtComponent {
  static defaultProps = {
    className: '',
    customStyle: '',
    value: '',
    name: '',
    placeholder: '',
    placeholderStyle: '',
    placeholderClass: '',
    title: '',
    cursorSpacing: 50,
    confirmType: '完成',
    cursor: 0,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    maxlength: 140,
    type: 'text',
    disabled: false,
    border: true,
    editable: true,
    error: false,
    clear: false,
    autoFocus: false,
    focus: false,
    onChange: defaultFunc,
    onFocus: defaultFunc,
    onBlur: defaultFunc,
    onConfirm: defaultFunc,
    onErrorClick: defaultFunc,
    onClick: defaultFunc
  }

  static propTypes = {
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
    customStyle: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    name: PropTypes.string,
    placeholder: PropTypes.string,
    placeholderStyle: PropTypes.string,
    placeholderClass: PropTypes.string,
    title: PropTypes.string,
    confirmType: PropTypes.string,
    cursor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    selectionStart: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    selectionEnd: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    adjustPosition: PropTypes.bool,
    cursorSpacing: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    maxlength: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    type: PropTypes.string,
    disabled: PropTypes.bool,
    border: PropTypes.bool,
    editable: PropTypes.bool,
    error: PropTypes.bool,
    clear: PropTypes.bool,
    backgroundColor: PropTypes.string,
    autoFocus: PropTypes.bool,
    focus: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onConfirm: PropTypes.func,
    onErrorClick: PropTypes.func,
    onClick: PropTypes.func
  }

  onInput (e) {
    this.props.onChange(e.target.value, ...arguments)
  }

  onFocus (e) {
    this.props.onFocus(e.target.value, ...arguments)
  }

  onBlur (e) {
    this.props.onBlur(e.target.value, ...arguments)
  }

  onConfirm (e) {
    this.props.onConfirm(e.target.value, ...arguments)
  }

  onClick (e) {
    !this.props.editable && this.props.onClick(e, ...arguments)
  }

  clearValue () {
    this.props.onChange('', ...arguments)
  }

  onErrorClick () {
    this.props.onErrorClick(...arguments)
  }

  render () {
    const {
      className,
      customStyle,
      name,
      cursorSpacing,
      confirmType,
      cursor,
      selectionStart,
      selectionEnd,
      adjustPosition,
      border,
      title,
      editable,
      error,
      clear,
      placeholder,
      placeholderStyle,
      placeholderClass,
      autoFocus,
      focus,
      value
    } = this.props
    let {
      maxlength,
      type,
      disabled
    } = this.props

    if (type === 'phone') {
      maxlength = 11
      type = 'number'
    }
    if (!disabled && !editable) {
      disabled = true
    }

    return (
      <View
        className={
          classNames({
            'at-input': true,
            'at-input--without-border': !border
          }, className)
        }
        style={customStyle}
      >
        <View
          className={classNames({
            'at-input__container': true,
            'at-input--error': error,
            'at-input--disabled': disabled
          })}
          onClick={this.onClick.bind(this)}
        >
          {
            title
              ? <Label className='at-input__title' for={name}>{title}</Label>
              : null
          }
          <Input className='at-input__input'
            id={name}
            name={name}
            type={type}
            placeholderStyle={placeholderStyle}
            placeholderClass={classNames('placeholder', placeholderClass)}
            placeholder={placeholder}
            cursorSpacing={cursorSpacing}
            maxlength={maxlength}
            autoFocus={autoFocus}
            focus={focus}
            value={value}
            confirmType={confirmType}
            cursor={cursor}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            adjustPosition={adjustPosition}
            disabled={disabled}
            onInput={this.onInput.bind(this)}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            onConfirm={this.onConfirm.bind(this)}
          />
          {
            clear && value
              ? <View className='at-input__icon' onTouchStart={this.clearValue.bind(this)} >
                <AtIcon customStyle={{ fontSize: '15px' }} value='close-circle' color='#ccc' />
              </View>
              : null
          }
          {
            error
              ? <View className='at-input__icon' onTouchStart={this.onErrorClick.bind(this)} >
                <AtIcon customStyle={{ fontSize: '15px' }} value='alert-circle' color='#FF4949' />
              </View>
              : null
          }
          <View className='at-input__children'>
            {this.props.children}
          </View>
        </View>
      </View>
    )
  }
}
