import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtButton from '../button/index'
import AtIcon from '../icon/index'
import AtComponent from '../../common/component'
import './index.scss'

const MIN_MAXPAGE = 1
const getMaxPage = (maxPage = 0) => {
  if (maxPage <= 0) return MIN_MAXPAGE
  return maxPage
}

export default class AtPagination extends AtComponent {
  constructor () {
    super(...arguments)
    const { current, pageSize, total } = this.props
    this.state = {
      current,
      maxPage: getMaxPage(Math.ceil(total / pageSize)),
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
      this.setState({ maxPage })
    }
    if (current !== this.state.current) {
      this.setState({ current })
    }
  }

  render () {
    const {
      icon,
    } = this.props
    const { current, maxPage } = this.state

    const rootClassName = ['at-pagination']
    if (icon) rootClassName.push('at-pagination--icon')

    const prevDisabled = maxPage === MIN_MAXPAGE || current === 1
    const nextDisabled = maxPage === MIN_MAXPAGE || current === maxPage
    return (
      <View className={rootClassName}>
        <View className='at-pagination__operate'>
          <View className='at-pagination__btns'>
            <View className='at-pagination__btns-prev'>
              {icon && <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={prevDisabled}><AtIcon value='chevron-left' color='#000' size='20'></AtIcon></AtButton>}
              {!icon && <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={prevDisabled}>上一页</AtButton>}
            </View>
            <View className='at-pagination__btns-next'>
              {icon && <AtButton onClick={this.onNext.bind(this)} size='small' disabled={nextDisabled}><AtIcon value='chevron-right' color='#000' size='20'></AtIcon></AtButton>}
              {!icon && <AtButton onClick={this.onNext.bind(this)} size='small' disabled={nextDisabled}>下一页</AtButton>}
            </View>
          </View>
        </View>
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
  onPageChange: () => {},
}

AtPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  icon: PropTypes.bool,
  onPageChange: PropTypes.func,
}
