/* eslint-disable taro/function-naming */
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtIcon from '../icon/index'

import './index.scss'

export default class AtFloatLayout extends Taro.Component {
  constructor (props) {
    super(...arguments)
    const { isOpened } = props
    this.state = {
      isOpened
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened } = nextProps
    if (isOpened !== this.state.isOpened) {
      this.setState({
        isOpened
      })
    }
  }

  close = () => {
    this.setState({
      isOpened: false
    })
  }

  render () {
    const { isOpened } = this.state
    const { title } = this.props

    return isOpened ? (
      <View className='at-float-layout'>
        <View onClick={this.close} className='at-float-layout__overlay' />
        <View className='at-float-layout__container layout'>
          <View className='layout-header'>
            <Text className='layout-header__title'>{title}</Text>
            <View className='layout-header__icon' onClick={this.close}>
              <AtIcon value='close' size='18' color='#CCC' />
            </View>
          </View>
          <View className='layout-body'>{this.props.children}</View>
        </View>
      </View>
    ) : null
  }
}

AtFloatLayout.propTypes = {
  title: PropTypes.string,
  isOpened: PropTypes.bool
}
