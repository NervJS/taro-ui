/* eslint-disable react/jsx-no-duplicate-props */
import Taro from '@tarojs/taro'
import { View, Textarea } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

function getMaxLength (
  maxLength,
  textOverflowForbidden
) {
  if (!textOverflowForbidden) {
    return maxLength + 500
  }
  return maxLength
}

class AtTextarea extends AtComponent {
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
      maxLength,
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
    const actualMaxLength = getMaxLength(maxLength, textOverflowForbidden)
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
          /* 兼容之前的版本 */
          maxlength={actualMaxLength}
          maxLength={actualMaxLength}
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
          showCount={false}
        />
        {count && (
          <View
            className={
              classNames({
                'at-textarea__bottom': true,
                'at-textarea--error': maxLength < value.length
              })
            }
          >
            {value.length}/{maxLength}
          </View>
        )}
      </View>
    )
  }
}

AtTextarea.defaultProps = {
  customStyle: '',
  className: '',
  value: '',
  cursorSpacing: 100,
  maxLength: 200,
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
  onLinechange: () => {},
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onConfirm: () => {},
}

AtTextarea.propTypes = {
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
  maxLength: PropTypes.oneOfType([
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
  onConfirm: PropTypes.func,
}

export default AtTextarea
