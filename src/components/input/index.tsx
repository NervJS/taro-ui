import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtInputProps } from 'types/input'
import { Input, Label, Text, View } from '@tarojs/components'
import { CommonEvent, ITouchEvent } from '@tarojs/components/types/common'
import { InputProps } from '@tarojs/components/types/Input'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

type PickAtInputProps = Pick<
  AtInputProps,
  'maxLength' | 'disabled' | 'password'
>
type GetInputPropsReturn = PickAtInputProps & Pick<InputProps, 'type'>

function getInputProps(props: AtInputProps): GetInputPropsReturn {
  const actualProps = {
    type: props.type,
    maxLength: props.maxLength,
    disabled: props.disabled,
    password: false
  }

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number'
      actualProps.maxLength = 11
      break
    case 'password':
      actualProps.type = 'text'
      actualProps.password = true
      break
    default:
      break
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true
  }
  return actualProps as GetInputPropsReturn
}

type ExtendEvent = {
  target: {
    value: string | number
  }
}

export default class AtInput extends AtComponent<AtInputProps> {
  public static defaultProps: AtInputProps
  public static propTypes: InferProps<AtInputProps>

  private onInput = (event: CommonEvent & ExtendEvent): void => {
    this.props.onChange(event.target.value, event)
  }

  private onFocus = (event: CommonEvent & ExtendEvent): void => {
    this.props.onFocus && this.props.onFocus(event.target.value, event)
  }

  private onBlur = (event: CommonEvent & ExtendEvent): void => {
    this.props.onBlur && this.props.onBlur(event.target.value, event)
    // fix # 583 AtInput 不触发 onChange 的问题
    this.props.onChange(event.target.value, event)
  }

  private onConfirm = (event: CommonEvent & ExtendEvent): void => {
    this.props.onConfirm && this.props.onConfirm(event.target.value, event)
  }

  private onClick = (): void => {
    if (!this.props.editable) {
      this.props.onClick && this.props.onClick()
    }
  }

  private clearValue = (event: ITouchEvent): void => {
    // fix #840
    setTimeout(() => {
      this.props.onChange('', event)
    }, 50)
  }

  private onErrorClick = (): void =>
    this.props.onErrorClick && this.props.onErrorClick()

  public render(): JSX.Element {
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
      value,
      required,
      onKeyboardHeightChange
    } = this.props
    const { type, maxLength, disabled, password } = getInputProps(this.props)

    const rootCls = classNames(
      'at-input',
      {
        'at-input--without-border': !border
      },
      className
    )
    const containerCls = classNames('at-input__container', {
      'at-input--error': error,
      'at-input--disabled': disabled
    })
    const overlayCls = classNames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled
    })
    const placeholderCls = classNames('placeholder', placeholderClass)

    return (
      <View className={rootCls} style={customStyle}>
        <View className={containerCls}>
          <View className={overlayCls} onClick={this.onClick}></View>
          {title && (
            <Label
              className={`at-input__title ${required &&
                'at-input__title--required'}`}
              for={name}
            >
              {title}
            </Label>
          )}
          <Input
            className='at-input__input'
            id={name}
            name={name}
            type={type}
            password={password}
            placeholderStyle={placeholderStyle}
            placeholderClass={placeholderCls}
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
            onInput={this.onInput}
            // fix # 840 input 清除问题
            // onChange={this.onInput}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onConfirm={this.onConfirm}
            onKeyboardHeightChange={onKeyboardHeightChange}
          />
          {clear && value && (
            <View className='at-input__icon' onTouchEnd={this.clearValue}>
              <Text className='at-icon at-icon-close-circle at-input__icon-close'></Text>
            </View>
          )}
          {error && (
            <View className='at-input__icon' onTouchStart={this.onErrorClick}>
              <Text className='at-icon at-icon-alert-circle at-input__icon-alert'></Text>
            </View>
          )}
          <View className='at-input__children'>{this.props.children}</View>
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
  confirmType: 'done',
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
  required: false,
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onConfirm: () => {},
  onErrorClick: () => {},
  onClick: () => {}
}

AtInput.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderStyle: PropTypes.string,
  placeholderClass: PropTypes.string,
  title: PropTypes.string,
  confirmType: PropTypes.string,
  cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  adjustPosition: PropTypes.bool,
  cursorSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  focus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onErrorClick: PropTypes.func,
  onClick: PropTypes.func,
  required: PropTypes.bool
}
