import Taro from '@tarojs/taro'
import { View, Input, Label } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

class AtInput extends AtComponent {
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
      autoFocus,
      value
    } = this.props
    let {
      style,
      maxlength,
      type,
      disabled
    } = this.props

    const containerCls = ['at-input__container']
    if (error) {
      containerCls.push('at-input--error')
    }
    if (disabled) {
      containerCls.push('at-input--disabled')
    }

    if (type === 'phone') {
      maxlength = 11
      type = 'number'
    }

    if (!disabled && !editable) {
      disabled = true
    }

    if (!border) {
      style += 'border: none;'
    }

    return <View className='at-input' style={style}>
      <View
        className={containerCls}
        onClick={this.onClick.bind(this)}
      >
        {
          title
            ? <Label className='at-input__title' for={name}>{title}</Label>
            : null
        }
        <Input className='at-input__input'
          id={name}
          type={type}
          placeholderClass='placeholder'
          placeholder={placeholder}
          cursorSpacing={cursorSpacing}
          maxlength={maxlength}
          autoFocus={autoFocus}
          value={value}
          confirmType={confirmType}
          cursor={cursor}
          selectionStart={selectionStart}
          selectionEnd={selectionEnd}
          adjustPosition={adjustPosition}
          disabled={disabled}
          onInput={this.onInput.bind(this)}
          onChange={this.onInput.bind(this)}
          onFocus={this.onFocus.bind(this)}
          onBlur={this.onBlur.bind(this)}
          onConfirm={this.onConfirm.bind(this)}
        />
        {
          clear && value
            ? <View className='at-input__icon' onTouchStart={this.clearValue.bind(this)} >
              <AtIcon value='close-circle' color='#ccc' size='15' />
            </View>
            : null
        }
        {
          error
            ? <View className='at-input__icon' onTouchStart={this.onErrorClick.bind(this)} >
              <AtIcon value='alert-circle' color='#FF4949' size='15' />
            </View>
            : null
        }
        <View className='at-input__children'>{this.props.children}</View>
      </View>
    </View>
  }
}

const defaultFunc = () => {}

AtInput.defaultProps = {
  style: '',
  value: '',
  name: '',
  placeholder: '',
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
  onChange: defaultFunc,
  onFocus: defaultFunc,
  onBlur: defaultFunc,
  onConfirm: defaultFunc,
  onErrorClick: defaultFunc,
  onClick: defaultFunc
}

AtInput.propTypes = {
  style: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  name: '',
  placeholder: PropTypes.string,
  title: PropTypes.string,
  confirmType: PropTypes.string,
  cursor: PropTypes.number,
  selectionStart: PropTypes.number,
  selectionEnd: PropTypes.number,
  adjustPosition: PropTypes.bool,
  cursorSpacing: PropTypes.number,
  maxlength: PropTypes.number,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  backgroundColor: PropTypes.string,
  autoFocus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onErrorClick: PropTypes.func,
  onClick: PropTypes.func
}

export default AtInput
