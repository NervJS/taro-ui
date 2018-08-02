import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtButton from '../button/index'

import './index.scss'

export default class AtPagination extends Taro.Component {
  constructor () {
    super(...arguments)
    let { current, pageSize, total } = this.props
    total = +total
    pageSize = +pageSize
    current = +current
    this.state = Object.assign({ ...this.props, maxPage: Math.ceil(total / pageSize) }, { total, pageSize, current })
  }

  onPrev () {
    let { current } = this.state
    const originCur = current
    current -= 1
    current = Math.max(1, current)
    if (originCur === current) return
    this.props.pageChange && this.props.pageChange('prev', current)
    // console.log('prev', current)
    this.setState({ current })
  }

  onNext () {
    let { current } = this.state
    const originCur = current
    const { maxPage } = this.state
    current += 1
    current = Math.min(maxPage, current)
    if (originCur === current) return
    this.props.pageChange && this.props.pageChange('next', current)
    this.setState({ current })
    console.log('next', this.state, current)
  }

  render () {
    const {
      current,
      icon,
      simple,
      maxPage,
    } = this.state

    let rootClassName = ['at-pagination']
    if (simple) rootClassName.push('at-pagination--simple')
    if (icon) rootClassName.push('at-pagination--icon')
    rootClassName = rootClassName.filter(str => str !== '')

    return (
      <View className={rootClassName}>
        <View className='at-pagination__operate'>
          <View className='at-pagination__btns'>
            <View className='at-pagination__btns-prev'>
              <AtButton onClick={this.onPrev.bind(this)} size='small' icon={icon ? 'emoji' : ''} _disabled={current === 1}>{icon ? '' : '上一页'}</AtButton>
            </View>
            <View className='at-pagination__btns-next'>
              <AtButton onClick={this.onNext.bind(this)} size='small' icon={icon ? 'emoji' : ''} _disabled={current === maxPage}>{icon ? '' : '下一页'}</AtButton>
            </View>
          </View>
        </View>
        {!simple && <View className='at-pagination__number'>
          <Text className='at-pagination__number-current'>{current}</Text>/{ maxPage }
        </View>}

      </View>
    )
  }
}

AtPagination.defaultProps = {
  current: 1,
  total: 0,
  pageSize: 20,
  icon: false,
  simple: false,
}

AtPagination.propTypes = {
  current: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  icon: PropTypes.bool,
  simple: PropTypes.bool,
}
