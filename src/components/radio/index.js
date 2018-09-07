import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtRadio extends AtComponent {
  static defaultProps = {
    style: '',
    value: '',
    options: [],
    onClick: () => { }
  }

  static propTypes = {
    style: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onClick: PropTypes.func,
  }

  handleClick (option) {
    if (option.disabled) return
    this.props.onClick(option.value, ...arguments)
  }

  render () {
    const {
      style,
      options,
      value
    } = this.props

    return <View className='at-radio' style={style}>
      {
        options.map(option => <View
          key={option.value}
          onClick={this.handleClick.bind(this, option)}
          className={
            option.disabled
              ? 'at-radio__option at-radio__option--disabled'
              : 'at-radio__option'
          }
        >
          <View className='at-radio__option_wrap'>
            <View className='at-radio__option_container'>
              <View className='at-radio__title'>{option.label}</View>
              <View
                className={
                  value === option.value
                    ? 'at-radio__icon at-radio__icon--checked'
                    : 'at-radio__icon'
                }
              >
                <AtIcon value='check' size='16' color='#6190E8' />
              </View>
            </View>
            {
              option.desc
                ? <View className='at-radio__desc'>{option.desc}</View>
                : null
            }
          </View>
        </View>)
      }
    </View>
  }
}
