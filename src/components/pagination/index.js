import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtButton from '../button/index'
import AtIcon from '../icon/index'
import AtComponent from '../../common/component'
import './index.scss'

const MIN_MAXPAGE = 1
const getMaxPage = (maxPage = 0) => {
  if (maxPage <= 0) return MIN_MAXPAGE
  return maxPage
}

const createPickerRange = max => {
  const range = new Array(max).fill(0).map((val, index) => index + 1)
  return range
}

export default class AtPagination extends AtComponent {
  constructor () {
    super(...arguments)
    const { current, pageSize, total } = this.props
    const maxPage = getMaxPage(Math.ceil(total / pageSize))
    this.state = {
      current,
      maxPage,
      pickerRange: createPickerRange(maxPage),
    }
  }

  onPrev () {
    let { current } = this.state
    const originCur = current
    current -= 1
    current = Math.max(1, current)
    if (originCur === current) return
    this.props.onPageChange && this.props.onPageChange({ type: 'prev', current })
    this.setState({ current })
  }

  onNext () {
    let { current } = this.state
    const originCur = current
    const { maxPage } = this.state
    current += 1
    current = Math.min(maxPage, current)
    if (originCur === current) return
    this.props.onPageChange && this.props.onPageChange({ type: 'next', current })
    this.setState({ current })
  }

  componentWillReceiveProps (props) {
    const { total, pageSize, current } = props
    const maxPage = getMaxPage(Math.ceil(total / pageSize))
    if (maxPage !== this.state.maxPage) {
      this.setState({
        maxPage,
        pickerRange: createPickerRange(maxPage),
      })
    }
    if (current !== this.state.current) {
      this.setState({ current })
    }
  }

  onPickerChange (evt) {
    const { value } = evt.detail
    const current = +value + 1
    if (current === this.state.current) return
    this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
    this.setState({
      current,
    })
  }

  render () {
    const {
      icon,
      // pickerSelect,
      customStyle,
    } = this.props
    const {
      current,
      maxPage,
      // pickerRange,
    } = this.state

    const rootClassName = ['at-pagination']

    const prevDisabled = maxPage === MIN_MAXPAGE || current === 1
    const nextDisabled = maxPage === MIN_MAXPAGE || current === maxPage

    const classObject = {
      'at-pagination--icon': icon,
    }

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
      >
        <View className='at-pagination__operate'>
          <View className='at-pagination__btns'>
            <View className='at-pagination__btns-prev'>
              {icon && <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={prevDisabled}><AtIcon customStyle={{ fontSize: '20px' }} value='chevron-left' color='#000'></AtIcon></AtButton>}
              {!icon && <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={prevDisabled}>上一页</AtButton>}
            </View>
            <View className='at-pagination__btns-next'>
              {icon && <AtButton onClick={this.onNext.bind(this)} size='small' disabled={nextDisabled}><AtIcon customStyle={{ fontSize: '20px' }} value='chevron-right' color='#000'></AtIcon></AtButton>}
              {!icon && <AtButton onClick={this.onNext.bind(this)} size='small' disabled={nextDisabled}>下一页</AtButton>}
            </View>
          </View>
        </View>
        {/* {pickerSelect && <View className='at-pagination__number'>
          {<Picker mode='selector' range={pickerRange} value={current - 1} onChange={this.onPickerChange.bind(this)}>
            <Text className='at-pagination__number-current'>{current}</Text>/{ maxPage }
          </Picker>}
        </View>} */}
        {/* {!pickerSelect && <View className='at-pagination__number'>
          <Text className='at-pagination__number-current'>{current}</Text>/{ maxPage }
        </View>} */}
        <View className='at-pagination__number'>
          <Text className='at-pagination__number-current'>{current}</Text>/{ maxPage }
        </View>
      </View>
    )
  }
}

AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  pickerSelect: false,
  customStyle: {},
  onPageChange: () => {},
}

AtPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  icon: PropTypes.bool,
  pickerSelect: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  onPageChange: PropTypes.func,
}
