import Taro from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import AtComponent from '../../common/component'

class AtSearchBar extends AtComponent {
  constructor (props) {
    super(...arguments)
    this.state = {
      isFocus: props.focus
    }
  }

  handleFocus = (...arg) => {
    this.setState({
      isFocus: true
    })
    this.props.onFocus(...arg)
  }

  handleBlur = (...arg) => {
    this.setState({
      isFocus: false
    })
    this.props.onBlur(...arg)
  }

  handleChange = (e, ...arg) => this.props.onChange(e.target.value, ...arg)

  handleClear = (...arg) => this.props.onChange('', ...arg)

  handleConfirm = (...arg) => this.props.onConfirm(...arg)

  handleActionClick = (...arg) => this.props.onActionClick(...arg)

  render () {
    const {
      value,
      placeholder,
      maxLength,
      fixed,
      focus,
      disabled,
      showActionButton,
      actionName,
      className,
      customStyle
    } = this.props
    const { isFocus } = this.state
    const fontSize = 14
    const rootCls = classNames(
      'at-search-bar',
      {
        'at-search-bar--fixed': fixed
      }, className
    )
    const placeholderWrapStyle = {}
    const actionStyle = {}
    if (isFocus || (!isFocus && value)) {
      placeholderWrapStyle.width = `${(placeholder.length + 2.5) * fontSize}px`
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
    } else if (!isFocus && !value) {
      placeholderWrapStyle.width = '100%'
      actionStyle.opacity = 0
      actionStyle.marginRight = `-${((actionName.length + 1) * fontSize) + (fontSize / 2)}px`
    }
    if (showActionButton) {
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
    }

    const clearIconStyle = { display: 'flex' }
    const placeholderStyle = { visibility: 'hidden' }
    if (!value.length) {
      clearIconStyle.display = 'none'
      placeholderStyle.visibility = 'visible'
    }


    return (
      <View
        className={rootCls}
        style={customStyle}
      >
        <View className='at-search-bar__input-cnt'>
          <View
            className='at-search-bar__placeholder-wrap'
            style={placeholderWrapStyle}
          >
            <Text className='at-icon at-icon-search'></Text>
            <Text
              className='at-search-bar__placeholder'
              style={placeholderStyle}
            >
              {placeholder}
            </Text>
          </View>
          <Input
            className='at-search-bar__input'
            type='text'
            confirmType='search'
            value={value}
            focus={focus}
            disabled={disabled}
            maxLength={maxLength}
            onInput={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleConfirm}
          />
          <View
            className='at-search-bar__clear'
            style={clearIconStyle}
            onTouchStart={this.handleClear}
          >
            <Text className='at-icon at-icon-close-circle'></Text>
          </View>
        </View>
        <View
          className='at-search-bar__action'
          style={actionStyle}
          onClick={this.handleActionClick}
        >
          {actionName}
        </View>
      </View>
    )
  }
}

AtSearchBar.defaultProps = {
  value: '',
  placeholder: '搜索',
  maxLength: 140,
  fixed: false,
  focus: false,
  disabled: false,
  showActionButton: false,
  actionName: '搜索',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onConfirm: () => {},
  onActionClick: () => {},
}

AtSearchBar.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  fixed: PropTypes.bool,
  focus: PropTypes.bool,
  disabled: PropTypes.bool,
  showActionButton: PropTypes.bool,
  actionName: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onActionClick: PropTypes.func
}

export default AtSearchBar
