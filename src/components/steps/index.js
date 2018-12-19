import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtSteps extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    current: 0,
    items: [],
    onChange: () => {}
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
    current: PropTypes.number,
    items: PropTypes.array,
    onChange: PropTypes.func
  }

  handleClick () {
    this.props.onChange(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      items,
      current
    } = this.props

    return (
      <View
        className={classNames('at-steps', className)}
        style={customStyle}
      >
        {
          items.map((item, i) => (
            <View
              key={item.title}
              className={
                classNames({
                  'at-steps__item': true,
                  'at-steps__item--active': i === current,
                  'at-steps__item--inactive': i !== current
                })
              }
              onClick={this.handleClick.bind(this, i)}
            >
              <View className='at-steps__circular-wrap'>
                {
                  i !== 0
                    ? <View className='at-steps__left-line'></View>
                    : null
                }
                {
                  item.success || item.error
                    ? <AtIcon
                      customStyle={{ fontSize: '28px' }}
                      value={item.success ? 'check-circle' : 'close-circle'}
                      color={item.success ? '#6190E8' : '#FF4949'}
                    />
                    : <View className='at-steps__circular'>
                      {
                        item.icon
                          ? <AtIcon
                            customStyle={{ fontSize: `${item.icon.size || 24}px` }}
                            value={item.icon.value}
                            color={
                              i === current
                                ? item.icon.activeColor
                                : item.icon.inactiveColor
                            }
                          />
                          : <Text className='at-steps__num'>{i + 1}</Text>
                      }
                    </View>
                }
                {
                  i !== items.length - 1
                    ? <View className='at-steps__right-line'></View>
                    : null
                }
              </View>
              <View className='at-steps__title'>
                {item.title}
              </View>
              <View className='at-steps__desc'>
                {item.desc}
              </View>
            </View>
          ))
        }
      </View>
    )
  }
}
