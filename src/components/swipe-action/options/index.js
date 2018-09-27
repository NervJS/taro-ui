import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

// import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../../common/component'

import './index.scss'

const REM_LAYOUT_DELAY = 500

export default class AtSwiperActionOptions extends AtComponent {
  delay = () =>
    new Promise(resolve => {
      if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
        return setTimeout(() => {
          resolve()
        }, REM_LAYOUT_DELAY)
      }
      if (Taro.getEnv() === Taro.ENV_TYPE.WEAPP) {
        return resolve()
      }
    })

  componentDidMount () {
    const selector = Taro.createSelectorQuery().in(this.$scope)

    this.delay().then(() => {
      selector
        .select('.at-swipe-action__options')
        .fields({
          size: true
        })
        .exec(res => {
          this.props.onQueryedDom(res[0])
        })
    })
  }

  render () {
    const rootClass = classNames(
      'at-swipe-action__options',
      this.props.className
    )

    return <View className={rootClass}>{this.props.children}</View>
  }
}

AtSwiperActionOptions.defaultProps = {}

AtSwiperActionOptions.propTypes = {}
