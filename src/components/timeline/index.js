import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import './index.scss'

export default class AtTimeline extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {

    }
  }

  onClick () {
  }

  render () {
    const {
      pending,
    } = this.props
    let rootClassName = ['at-timeline']
    const pendingClass = pending ? 'at-timeline--pending' : ''
    rootClassName.push(pendingClass)
    rootClassName = rootClassName.filter(str => str !== '')
    return (
      <View className={rootClassName}>
        {this.props.children}
      </View>
    )
  }
}

AtTimeline.defaultProps = {
  pending: false,
}

AtTimeline.propTypes = {
  pending: PropTypes.bool,
}
