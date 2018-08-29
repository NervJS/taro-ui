import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtButton from '../button/index'
import AtIcon from '../icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtPagination extends AtComponent {
  constructor () {
    super(...arguments)
    let { current, pageSize, total } = this.props
    const { icon } = this.props
    total = +total
    pageSize = +pageSize
    current = +current
    this.state = Object.assign({ icon, maxPage: Math.ceil(total / pageSize) }, { total, pageSize, current })
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

  render () {
    const {
      current,
      icon,
      maxPage,
    } = this.state

    let rootClassName = ['at-pagination']
    if (icon) rootClassName.push('at-pagination--icon')
    rootClassName = rootClassName.filter(str => str !== '')

    return (
      <View className={rootClassName}>
        <View className='at-pagination__operate'>
          <View className='at-pagination__btns'>
            <View className='at-pagination__btns-prev'>
              {icon && <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={current === 1}><AtIcon value='chevron-left' color='#000' size='20'></AtIcon></AtButton>}
              {!icon && <AtButton onClick={this.onPrev.bind(this)} size='small' disabled={current === 1}>上一页</AtButton>}
            </View>
            <View className='at-pagination__btns-next'>
              {icon && <AtButton onClick={this.onNext.bind(this)} size='small' disabled={current === maxPage}><AtIcon value='chevron-right' color='#000' size='20'></AtIcon></AtButton>}
              {!icon && <AtButton onClick={this.onNext.bind(this)} size='small' disabled={current === maxPage}>下一页</AtButton>}
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
}

AtPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  icon: PropTypes.bool,
}
