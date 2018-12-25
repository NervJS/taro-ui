import Taro from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import AtComponent from '../../common/component'

export default class AtSearchBar extends AtComponent {
  constructor (props) {
    super(...arguments)
    this.state = {
      isFocus: props.focus
    }
  }

  handleFocus () {
    this.setState({
      isFocus: true
    })
    this.props.onFocus(...arguments)
  }

  handleBlur () {
    this.setState({
      isFocus: false
    })
    this.props.onBlur(...arguments)
  }

  handleChange (e) {
    this.props.onChange(e.target.value, ...arguments)
  }

  handleClear () {
    this.props.onChange('', ...arguments)
  }

  handleConfirm () {
    this.props.onConfirm(...arguments)
  }

  handleActionClick () {
    this.props.onActionClick(...arguments)
  }

  render () {
    const {
      value,
      placeholder,
      maxlength,
      fixed,
      focus,
      disabled,
      showActionButton,
      actionName,
      className,
      customStyle
    } = this.props
    const { isFocus } = this.state

    const placeholderStyle = {}
    const actionStyle = {}
    if (isFocus || (!isFocus && value)) {
      placeholderStyle.width = `${(placeholder.length + 2.5) * 14}px`
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
    } else if (!isFocus && !value) {
      placeholderStyle.width = '100%'
      actionStyle.opacity = 0
      actionStyle.marginRight = `-${((actionName.length + 1) * 14) + 7}px`
    }
    if (showActionButton) {
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
    }
    return (
      <View
        className={
          classNames({
            'at-search-bar': true,
            'at-search-bar--fixed': fixed
          }, className)
        }
        style={customStyle}
      >
        <View className='at-search-bar__input-cnt'>
          <View
            className='at-search-bar__placeholder-wrap'
            style={placeholderStyle}
          >
            <Text className='at-icon at-icon-search'></Text>
            <Text
              className='at-search-bar__placeholder'
              style={
                value.length
                  ? 'visibility: hidden;'
                  : 'visibility: visible;'
              }
            >{placeholder}</Text>
          </View>
          <Input
            className='at-search-bar__input'
            type='text'
            confirmType='search'
            value={value}
            focus={focus}
            disabled={disabled}
            maxlength={maxlength}
            onInput={this.handleChange.bind(this)}
            onFocus={this.handleFocus.bind(this)}
            onBlur={this.handleBlur.bind(this)}
            onConfirm={this.handleConfirm.bind(this)}
          />
          <View
            className='at-search-bar__clear'
            style={
              value.length
                ? 'display: flex;'
                : 'display: none;'
            }
            onTouchStart={this.handleClear.bind(this)}
          >
            <Text className='at-icon at-icon-close-circle'></Text>
          </View>
        </View>
        <View
          onClick={this.handleActionClick.bind(this)}
          className='at-search-bar__action'
          style={actionStyle}
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
  maxlength: 140,
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
  maxlength: PropTypes.number,
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
