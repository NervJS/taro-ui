import * as React from 'nervjs'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtButton from '../button/index'
import AtComponent from '../../common/component'

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
      currentPage: current,
      maxPage,
      pickerRange: createPickerRange(maxPage),
    }
  }

  onPrev () {
    let { currentPage } = this.state
    const originCur = currentPage
    currentPage -= 1
    currentPage = Math.max(1, currentPage)
    if (originCur === currentPage) return
    this.props.onPageChange && this.props.onPageChange({ type: 'prev', current: currentPage })
    this.setState({ currentPage })
  }

  onNext () {
    let { currentPage } = this.state
    const originCur = currentPage
    const { maxPage } = this.state
    currentPage += 1
    currentPage = Math.min(maxPage, currentPage)
    if (originCur === currentPage) return
    this.props.onPageChange && this.props.onPageChange({ type: 'next', current: currentPage })
    this.setState({ currentPage })
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
    if (current !== this.state.currentPage) {
      this.setState({ currentPage: current })
    }
  }

  // onPickerChange (evt) {
  //   const { value } = evt.detail
  //   const current = +value + 1
  //   if (current === this.state.currentPage) return
  //   this.props.onPageChange && this.props.onPageChange({ type: 'pick', current })
  //   this.setState({
  //     currentPage: current,
  //   })
  // }

  render () {
    const {
      icon,
      // pickerSelect,
      customStyle,
    } = this.props
    const {
      currentPage,
      maxPage,
      // pickerRange,
    } = this.state

    const rootClassName = ['at-pagination']

    const prevDisabled = maxPage === MIN_MAXPAGE || currentPage === 1
    const nextDisabled = maxPage === MIN_MAXPAGE || currentPage === maxPage
    const classObject = {
      'at-pagination--icon': icon,
    }

    return (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
        style={customStyle}
      >
        <View className='at-pagination__btn-prev'>
          {icon && (
            <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={prevDisabled}>
              <Text className='at-icon at-icon-chevron-left'></Text>
            </AtButton>
          )}
          {!icon && <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={prevDisabled}>上一页</AtButton>}
        </View>
        <View className='at-pagination__number'>
          <Text className='at-pagination__number-current'>{currentPage}</Text>/{ maxPage }
        </View>
        <View className='at-pagination__btn-next'>
          {icon && (
            <AtButton onClick={this.onNext.bind(this)} size='small' disabled={nextDisabled}>
              <Text className='at-icon at-icon-chevron-right'></Text>
            </AtButton>
          )}
          {!icon && <AtButton onClick={this.onNext.bind(this)} size='small' disabled={nextDisabled}>下一页</AtButton>}
        </View>
        {/* {pickerSelect && <View className='at-pagination__number'>
          {<Picker mode='selector' range={pickerRange} value={currentPage - 1} onChange={this.onPickerChange.bind(this)}>
            <Text className='at-pagination__number-current'>{currentPage}</Text>/{ maxPage }
          </Picker>}
        </View>} */}
        {/* {!pickerSelect && <View className='at-pagination__number'>
          <Text className='at-pagination__number-current'>{currentPage}</Text>/{ maxPage }
        </View>} */}
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
