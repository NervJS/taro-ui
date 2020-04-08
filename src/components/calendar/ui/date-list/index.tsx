import bind from 'bind-decorator'
import classnames from 'classnames'
import { Calendar } from 'types/calendar'
import { Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import * as constant from '../../common/constant'

const MAP: { [key: number]: string } = {
  [constant.TYPE_PRE_MONTH]: 'pre',
  [constant.TYPE_NOW_MONTH]: 'now',
  [constant.TYPE_NEXT_MONTH]: 'next'
}

export interface Props {
  list: Calendar.List<Calendar.Item>

  onClick?: (item: Calendar.Item) => void

  onLongClick?: (item: Calendar.Item) => void
}

export default class AtCalendarList extends Taro.Component<Props> {
  static options = { addGlobalClass: true }

  @bind
  handleClick(item) {
    if (typeof this.props.onClick === 'function') {
      this.props.onClick(item)
    }
  }

  @bind
  handleLongClick(item) {
    if (typeof this.props.onLongClick === 'function') {
      this.props.onLongClick(item)
    }
  }

  render() {
    const { list } = this.props
    if (!list || list.length === 0) return null

    return (
      <View className='at-calendar__list flex'>
        {list.map((item: Calendar.Item) => (
          <View
            key={`list-item-${item.value}`}
            onClick={this.handleClick.bind(this, item)}
            onLongPress={this.handleLongClick.bind(this, item)}
            className={classnames(
              'flex__item',
              `flex__item--${MAP[item.type]}`,
              {
                'flex__item--today': item.isToday,
                'flex__item--active': item.isActive,
                'flex__item--selected': item.isSelected,
                'flex__item--selected-head': item.isSelectedHead,
                'flex__item--selected-tail': item.isSelectedTail,
                'flex__item--blur':
                  item.isDisabled ||
                  item.type === constant.TYPE_PRE_MONTH ||
                  item.type === constant.TYPE_NEXT_MONTH
              }
            )}
          >
            <View className='flex__item-container'>
              <View className='container-text'>{item.text}</View>
            </View>
            <View className='flex__item-extra extra'>
              {item.marks && item.marks.length > 0 ? (
                <View className='extra-marks'>
                  {item.marks.map((mark, key) => (
                    <Text key={key} className='mark'>
                      {mark}
                    </Text>
                  ))}
                </View>
              ) : null}
            </View>
          </View>
        ))}
      </View>
    )
  }
}
