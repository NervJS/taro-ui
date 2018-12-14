import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtRadio extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    value: '',
    options: [],
    onClick: () => { }
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
      customStyle,
      className,
      options,
      value
    } = this.props

    return (
      <View
        className={
          classNames(
            'at-radio',
            className
          )
        }
        style={customStyle}
      >
        {
          options.map(option => <View
            key={option.value}
            onClick={this.handleClick.bind(this, option)}
            className={
              classNames({
                'at-radio__option': true,
                'at-radio__option--disabled': option.disabled
              })
            }
          >
            <View className='at-radio__option_wrap'>
              <View className='at-radio__option_container'>
                <View className='at-radio__title'>{option.label}</View>
                <View
                  className={
                    classNames({
                      'at-radio__icon': true,
                      'at-radio__icon--checked': value === option.value
                    })
                  }
                >
                  <AtIcon customStyle={{ fontSize: '16px' }} value='check' color='#6190E8' />
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
    )
  }
}
