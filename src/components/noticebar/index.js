
import PropTypes from 'prop-types'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import AtIcon from '../icon/index'

import './index.scss'


export default class AtNoticebar extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {
      show: true,
    }
  }

  onClose () {
    this.setState({
      show: false,
    })
  }

  onGotoMore () {
    if (Taro.getEnv() === 'WEAPP') {
      Taro.navigateTo({
        url: this.props.moreUrl,
      })
    } else {
      alert('该环境尚未实现此API')
    }
  }

  render () {
    const {
      close,
      moreUrl,
      single,
      icon,
    } = this.props
    let _moreText = this.props.moreText
    if (!_moreText) _moreText = '查看详情'
    console.log('moreText===')
    const rootClassName = ['at-noticebar']
    if (moreUrl) rootClassName.push('at-noticebar--more')
    if (single) rootClassName.push('at-noticebar--single')

    return (
      this.state.show &&
      <View className={rootClassName}>
        {close && <View className='at-noticebar__close' onClick={this.onClose.bind(this)}><AtIcon value='close' size='16' color='#ccc'></AtIcon></View>}
        <View className='at-noticebar__content'>
          {icon && <AtIcon value={icon} size='16'></AtIcon>}{this.props.children}
        </View>
        {moreUrl && <View className='at-noticebar__more' onClick={this.onGotoMore.bind(this)}>{_moreText}<View className='at-noticebar__more-icon'><AtIcon value='chevron-right' size='16'></AtIcon></View></View>}
      </View>
    )
  }
}

AtNoticebar.defaultProps = {
  close: false,
  single: false,
  moreText: '查看详情',
  moreUrl: '',
  icon: '',
}

AtNoticebar.propTypes = {
  close: PropTypes.bool,
  single: PropTypes.bool,
  moreText: PropTypes.string,
  moreUrl: PropTypes.string,
  icon: PropTypes.string,
}
