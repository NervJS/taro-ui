import Taro from '@tarojs/taro'
import { View, Input, Label, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

const ENV = Taro.getEnv()

function getInputProps (props) {
  const actualProps = {
    type: props.type,
    maxLength: props.maxLength,
    disabled: props.disabled,
    password: false,
  }

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number'
      actualProps.maxLength = 11
      break
    case 'password':
      actualProps.password = true
      break
    case 'digit':
      if (ENV === Taro.ENV_TYPE.WEB) {
        actualProps.type = 'number'
      }
      break
    default:
      break
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true
  }
  return actualProps
}

export default class AtInput extends AtComponent {
  onInput (e) {
    let value = e.target.value
    const { type, maxLength } = getInputProps(this.props)
    if (
      ENV === Taro.ENV_TYPE.WEB
      && type === 'number'
      && value
      && maxLength <= value.length
    ) {
      value = value.substring(0, maxLength)
    }
    return this.props.onChange(value, ...arguments)
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

  onClick () {
    !this.props.editable && this.props.onClick(...arguments)
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
      error,
      clear,
      placeholder,
      placeholderStyle,
      placeholderClass,
      autoFocus,
      focus,
      value
    } = this.props

    const {
      type,
      maxLength,
      disabled,
      password,
    } = getInputProps(this.props)

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
          className={
            classNames({
              'at-input__container': true,
              'at-input--error': error,
              'at-input--disabled': disabled
            })
          }
        >
          <View
            className={
              classNames({
                'at-input__overlay': true,
                'at-input__overlay--hidden': !disabled
              })
            }
            onClick={this.onClick.bind(this)}
          >
          </View>
          {title && (
            <Label className='at-input__title' for={name}>{title}</Label>
          )}
          <Input
            className='at-input__input'
            id={name}
            name={name}
            type={type}
            password={password}
            placeholderStyle={placeholderStyle}
            placeholderClass={classNames('placeholder', placeholderClass)}
            placeholder={placeholder}
            cursorSpacing={cursorSpacing}
            maxLength={maxLength}
            autoFocus={autoFocus}
            focus={focus}
            value={value}
            confirmType={confirmType}
            cursor={cursor}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            adjustPosition={adjustPosition}
            onInput={this.onInput.bind(this)}
            onFocus={this.onFocus.bind(this)}
            onBlur={this.onBlur.bind(this)}
            onConfirm={this.onConfirm.bind(this)}
          />
          {clear && value && (
            <View className='at-input__icon' onTouchStart={this.clearValue.bind(this)}>
              <Text className='at-icon at-icon-close-circle at-input__icon-close'></Text>
            </View>
          )}
          {error && (
            <View className='at-input__icon' onTouchStart={this.onErrorClick.bind(this)}>
              <Text className='at-icon at-icon-alert-circle at-input__icon-alert'></Text>
            </View>
          )}
          <View className='at-input__children'>
            {this.props.children}
          </View>
        </View>
      </View>
    )
  }
}

AtInput.defaultProps = {
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
  maxLength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onConfirm: () => {},
  onErrorClick: () => {},
  onClick: () => {},
}

AtInput.propTypes = {
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
  maxLength: PropTypes.oneOfType([
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
  onClick: PropTypes.func,
}
