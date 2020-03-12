import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtStepsProps } from 'types/steps'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

export default class AtSteps extends AtComponent<AtStepsProps> {
  public static defaultProps: AtStepsProps
  public static propTypes: InferProps<AtStepsProps>

  private handleClick(current: number, event: CommonEvent): void {
    this.props.onChange(current, event)
  }

  public render(): JSX.Element {
    const { customStyle, className, items, current } = this.props

    return (
      <View className={classNames('at-steps', className)} style={customStyle}>
        {!!items &&
          items.map((item, i) => (
            <View
              key={item.title}
              className={classNames({
                'at-steps__item': true,
                'at-steps__item--active': i === current,
                'at-steps__item--inactive': i !== current
              })}
              onClick={this.handleClick.bind(this, i)}
            >
              <View className='at-steps__circular-wrap'>
                {i !== 0 && <View className='at-steps__left-line'></View>}
                {item.status ? (
                  <View
                    className={classNames({
                      'at-icon': true,
                      'at-icon-check-circle': item.status === 'success',
                      'at-icon-close-circle': item.status === 'error',
                      'at-steps__single-icon': true,
                      'at-steps__single-icon--success':
                        item.status === 'success',
                      'at-steps__single-icon--error': item.status === 'error'
                    })}
                  ></View>
                ) : (
                  <View className='at-steps__circular'>
                    {item.icon ? (
                      <Text
                        className={classNames('at-icon', {
                          [`at-icon-${item.icon.value}`]: item.icon.value,
                          'at-steps__circle-icon': true
                        })}
                      ></Text>
                    ) : (
                      <Text className='at-steps__num'>{i + 1}</Text>
                    )}
                  </View>
                )}
                {i !== items.length - 1 && (
                  <View className='at-steps__right-line'></View>
                )}
              </View>
              <View className='at-steps__title'>{item.title}</View>
              <View className='at-steps__desc'>{item.desc}</View>
            </View>
          ))}
      </View>
    )
  }
}

AtSteps.defaultProps = {
  customStyle: '',
  className: '',
  current: 0,
  items: [],
  onChange: () => {}
}

AtSteps.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  current: PropTypes.number,
  items: PropTypes.array,
  onChange: PropTypes.func
}
