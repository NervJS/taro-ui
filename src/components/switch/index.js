import Taro from '@tarojs/taro'
import { View, Switch } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtSwitch extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    title: '',
    color: '#6190e8',
    border: true,
    disabled: false,
    checked: false,
    onChange: () => { }
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
    title: PropTypes.string,
    color: PropTypes.string,
    checked: PropTypes.bool,
    border: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  handleChange (e) {
    this.props.onChange(e.detail.value, ...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      disabled,
      border,
      title,
      checked,
      color
    } = this.props

    return (
      <View
        className={
          classNames({
            'at-switch': true,
            'at-switch--without-border': !border
          }, className)
        }
        style={customStyle}
      >
        <View className='at-switch__title'>{title}</View>
        <View
          className={
            classNames({
              'at-switch__container': true,
              'at-switch--disabled': disabled
            })
          }
        >
          <View className='at-switch__mask'></View>
          {
            checked
              ? <Switch
                className='at-switch__switch'
                checked
                color={color}
                onChange={this.handleChange.bind(this)}
              />
              : <Switch
                className='at-switch__switch'
                color={color}
                onChange={this.handleChange.bind(this)}
              />
          }
        </View>
      </View>
    )
  }
}
