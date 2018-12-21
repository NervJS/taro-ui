import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

// import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../../common/component'
import { delayQuerySelector } from '../../../common/utils'

import './index.scss'

export default class AtSwiperActionOptions extends AtComponent {
  componentDidMount () {
    delayQuerySelector(
      Taro.getEnv() === Taro.ENV_TYPE.WEB ? this : this.$scope,
      '.at-swipe-action__options'
    ).then(res => {
      this.props.onQueryedDom(res[0])
    })
  }

  render () {
    const rootClass = classNames(
      'at-swipe-action__options',
      this.props.className
    )

    return (
      <View className={rootClass}>
        {this.props.children}
      </View>
    )
  }
}

AtSwiperActionOptions.defaultProps = {}

AtSwiperActionOptions.propTypes = {}
