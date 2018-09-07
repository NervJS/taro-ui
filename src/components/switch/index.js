import Taro from '@tarojs/taro'
import { View, Switch } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtComponent from '../../common/component'
import './index.scss'

export default class AtSwitch extends AtComponent {
  static defaultProps = {
    style: '',
    title: '',
    color: '#6190e8',
    border: true,
    disabled: false,
    checked: false,
    onChange: () => { }
  }

  static propTypes = {
    style: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.string,
    checked: PropTypes.bool,
    border: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
  }

  handleChange (e) {
    this.props.onChange(e.detail.value)
  }

  render () {
    const {
      disabled,
      border,
      title,
      checked,
      color
    } = this.props
    let { style } = this.props

    if (!border) {
      style += 'border: none;'
    }

    const containerCls = ['at-switch__container']
    if (disabled) {
      containerCls.push('at-switch--disabled')
    }

    return <View className='at-switch' style={style}>
      <View className='at-switch__title'>{title}</View>
      <View className={containerCls}>
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
  }
}
