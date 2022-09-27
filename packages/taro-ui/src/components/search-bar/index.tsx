import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Input, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { AtSearchBarProps, AtSearchBarState } from '../../../types/search-bar'

type ExtendEvent = {
  target: {
    value: string
  }
}

export default class AtSearchBar extends React.Component<
  AtSearchBarProps,
  AtSearchBarState
> {
  public static defaultProps: AtSearchBarProps
  public static propTypes: InferProps<AtSearchBarProps>

  public constructor(props: AtSearchBarProps) {
    super(props)
    this.state = {
      isFocus: !!props.focus
    }
  }

  private handleFocus = (event: CommonEvent): void => {
    this.setState({
      isFocus: true
    })
    this.props.onFocus && this.props.onFocus(event)
  }

  private handleBlur = (event: CommonEvent): void => {
    this.setState({
      isFocus: false
    })
    this.props.onBlur && this.props.onBlur(event)
  }

  private handleChange = (e: CommonEvent & ExtendEvent): void => {
    this.props.onChange(e.detail.value, e)
  }

  private handleClear = (event: CommonEvent): void => {
    if (this.props.onClear) {
      this.props.onClear(event)
    } else {
      this.props.onChange('', event)
    }
  }

  private handleConfirm = (event: CommonEvent): void => {
    this.props.onConfirm && this.props.onConfirm(event)
  }

  private handleActionClick = (event: CommonEvent): void => {
    this.props.onActionClick && this.props.onActionClick(event)
  }

  public UNSAFE_componentWillReceiveProps(nextProps: AtSearchBarProps): void {
    if (nextProps.focus !== this.props.focus) {
      this.setState({ isFocus: !!nextProps.focus })
    }
  }

  public render(): JSX.Element {
    const {
      value,
      placeholder,
      maxLength,
      fixed,
      disabled,
      showActionButton,
      actionName = '搜索',
      inputType, // 处理issue#464
      className,
      customStyle
    } = this.props
    const { isFocus } = this.state
    const fontSize = 14
    const rootCls = classNames(
      'at-search-bar',
      {
        'at-search-bar--fixed': fixed
      },
      className
    )
    const placeholderWrapStyle: React.CSSProperties = {}
    const actionStyle: React.CSSProperties = {}
    if (isFocus || (!isFocus && value)) {
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
      placeholderWrapStyle.flexGrow = 0
    } else if (!isFocus && !value) {
      placeholderWrapStyle.flexGrow = 1
      actionStyle.opacity = 0
      actionStyle.marginRight = `-${
        (actionName.length + 1) * fontSize + fontSize / 2 + 10
      }px`
    }
    if (showActionButton) {
      actionStyle.opacity = 1
      actionStyle.marginRight = `0`
    }

    const clearIconStyle: React.CSSProperties = { display: 'flex' }
    const placeholderStyle: React.CSSProperties = { visibility: 'hidden' }
    if (!value.length) {
      clearIconStyle.display = 'none'
      placeholderStyle.visibility = 'visible'
    }

    return (
      <View className={rootCls} style={customStyle}>
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
              {isFocus ? '' : placeholder}
            </Text>
          </View>
          <Input
            className='at-search-bar__input'
            type={inputType}
            confirmType='search'
            value={value}
            focus={isFocus}
            disabled={disabled}
            maxlength={maxLength}
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
  inputType: 'text',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: (): void => {}
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
  inputType: PropTypes.oneOf(['text', 'number', 'idcard', 'digit']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onActionClick: PropTypes.func,
  onClear: PropTypes.func
}
