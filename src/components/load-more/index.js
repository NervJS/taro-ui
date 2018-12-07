import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtActivityIndicator from '../../components/activity-indicator/index'
import AtButton from '../../components/button/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtLoadMore extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    noMoreTextStyle: '',
    moreBtnStyle: '',
    status: 'more',
    loadingText: '加载中',
    moreText: '查看更多',
    noMoreText: '没有更多',
    onClick: () => {}
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
    noMoreTextStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    moreBtnStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    status: PropTypes.oneOf(['more', 'loading', 'noMore']),
    loadingText: PropTypes.string,
    moreText: PropTypes.string,
    noMoreText: PropTypes.string,
    onClick: PropTypes.func
  }

  onClick () {
    this.props.onClick(...arguments)
  }

  render () {
    const {
      className,
      customStyle,
      loadingText,
      moreText,
      status,
      moreBtnStyle,
      noMoreTextStyle,
      noMoreText
    } = this.props

    let component = null
    if (status === 'loading') {
      component = <AtActivityIndicator mode='center' content={loadingText} />
    } else if (status === 'more') {
      component = <AtButton
        full
        onClick={this.onClick.bind(this)}
        customStyle={moreBtnStyle}
      >
        {moreText}
      </AtButton>
    } else {
      component = <Text
        className='at-load-more__tip'
        style={noMoreTextStyle}
      >
        {noMoreText}
      </Text>
    }

    return (
      <View
        className={classNames('at-load-more', className)}
        style={customStyle}
      >
        {component}
      </View>
    )
  }
}
