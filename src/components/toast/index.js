import * as React from 'nervjs'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _isFunction from 'lodash/isFunction'
import AtComponent from '../../common/component'
import statusImg from './img.json'

export default class AtToast extends AtComponent {
  constructor (props) {
    super(...arguments)

    const { isOpened, duration } = props

    if (isOpened) {
      this.makeTimer(duration)
    }

    this._timer = null
    this.state = {
      _isOpened: isOpened
    }
  }

  clearTimmer () {
    if (this._timer) {
      clearTimeout(this._timer)
      this._timer = null
    }
  }

  makeTimer (duration) {
    if (duration === 0) {
      return
    }
    this._timer = setTimeout(() => {
      this.close()
    }, +duration)
  }

  close () {
    const { _isOpened } = this.state
    if (_isOpened) {
      this.setState(
        {
          _isOpened: false
        },
        this.handleClose
      )
      this.clearTimmer()
    }
  }

  handleClose () {
    if (_isFunction(this.props.onClose)) {
      this.props.onClose()
    }
  }

  componentWillReceiveProps (nextProps) {
    const { isOpened, duration } = nextProps
    if (!isOpened) {
      this.close()
      return
    }

    if (!this.state._isOpened) {
      this.setState({
        _isOpened: true
      })
    } else {
      this.clearTimmer()
    }
    this.makeTimer(duration)
  }

  handleClick = () => {
    const { onClick, status } = this.props
    if (status === 'loading') {
      return
    }
    if (onClick) {
      return onClick()
    }
    this.close()
  }

  render () {
    const { _isOpened } = this.state
    const { customStyle, text, icon, status, image, hasMask } = this.props

    const realImg = image || statusImg[status] || null
    const isRenderIcon = !!(icon && !(image || statusImg[status]))

    const bodyClass = classNames('toast-body', {
      'at-toast__body--custom-image': image,
      'toast-body--text': !realImg && !icon,
      [`at-toast__body--${status}`]: !!status
    })

    const iconClass = classNames('at-icon', {
      [`at-icon-${icon}`]: icon
    })

    return _isOpened ? (
      <View className={classNames('at-toast', this.props.className)}>
        {hasMask && <View className='at-toast__overlay' />}
        <View className={bodyClass} style={customStyle} onClick={this.handleClick}>
          <View className='toast-body-content'>
            {realImg ? (
              <View className='toast-body-content__img'>
                <Image
                  className='toast-body-content__img-item'
                  src={realImg}
                  mode='scaleToFill'
                />
              </View>
            ) : null}
            {isRenderIcon && (
              <View className='toast-body-content__icon'>
                <Text className={iconClass} />
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
  text: PropTypes.string,
  icon: PropTypes.string,
  hasMask: PropTypes.bool,
  image: PropTypes.string,
  isOpened: PropTypes.bool,
  duration: PropTypes.number,
  status: PropTypes.oneOf(['', 'error', 'loading', 'success']),
  onClick: PropTypes.func,
  onClose: PropTypes.func
}
