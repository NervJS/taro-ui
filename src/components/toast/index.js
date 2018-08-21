import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'

import PropTypes from 'prop-types'

import AtIcon from '../icon/index'

import statusImg from './img.json'

import './index.scss'

export default class AtToast extends Taro.Component {
  constructor (props) {
    super(...arguments)

    const { isOpened, duration } = props

    if (isOpened) {
      this.makeTimer(duration)
    }

    this._timer = null
    this.state = {
      isOpened
    }
  }

  clearTimmer () {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  makeTimer (duration) {
    this._timer = setTimeout(() => {
      this.setState({
        isOpened: false
      })
    }, +duration)
  }

  close () {
    const { isOpened } = this.state
    if (isOpened) {
      this.setState({
        isOpened: false
      })
      this.clearTimmer()
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened, duration } = nextProps
    if (!isOpened) return

    if (!this.state.isOpened) {
      this.setState({
        isOpened
      })
    } else {
      this.clearTimmer()
    }
    this.makeTimer(duration)
  }

  handleClick = () => {
    const { onClickToast } = this.props
    if (onClickToast) {
      return onClickToast()
    }
    this.close()
  }

  render () {
    const { isOpened } = this.state
    const { text, icon, status, image, hasMask } = this.props

    const realImg = image || statusImg[status]
    const isRenderIcon = icon && !(image || statusImg[status])

    const rootClass = ['toast-body']

    if (!realImg && !icon) {
      rootClass.push('toast-body--text')
    }

    if (status) {
      rootClass.push(`at-toast-body--${status}`)
    }

    if (image) {
      rootClass.push('at-toast-body--custom-image')
    }

    return isOpened ? (
      <View className='at-toast'>
        {hasMask && <View className='at-toast-overlay' />}
        <View className={rootClass} onClick={this.handleClick}>
          <View className='toast-body-content'>
            {realImg && (
              <View className='toast-body-content__img'>
                <Image
                  className='toast-body-content__img-item'
                  src={realImg}
                  mode='scaleToFill'
                />
              </View>
            )}
            {isRenderIcon && (
              <View className='toast-body-content__icon'>
                <AtIcon value={icon} color='white' size='50' />
              </View>
            )}
            {text && (
              <View className='toast-body-content__info'>
                <Text>{text}</Text>
              </View>
            )}
          </View>
        </View>
      </View>
    ) : null
  }
}

AtToast.defaultProps = {
  duration: 3000,
  isOpened: false
}

AtToast.propTypes = {
  icon: PropTypes.string,
  hasMask: PropTypes.bool,
  image: PropTypes.string,
  status: PropTypes.string,
  text: PropTypes.string.isRequired,
  isOpened: PropTypes.bool,
  duration: PropTypes.number
}
