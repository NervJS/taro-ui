import * as React from 'nervjs'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtCurtain extends AtComponent {
  onClose (e) {
    e.stopPropagation()
    this.props.onClose(...arguments)
  }

  _stopPropagation (e) {
    e.stopPropagation()
  }

  render () {
    const {
      className,
      customStyle,
      isOpened,
      closeBtnPosition
    } = this.props

    const curtainClass = classNames({
      'at-curtain': true,
      'at-curtain--closed': !isOpened
    }, className)
    const btnCloseClass = classNames({
      'at-curtain__btn-close': true,
      [`at-curtain__btn-close--${closeBtnPosition}`]: closeBtnPosition
    })

    return (
      <View
        className={curtainClass}
        style={customStyle}
        onClick={this._stopPropagation}
      >
        <View className='at-curtain__container'>
          <View className='at-curtain__body'>
            {this.props.children}
            <View className={btnCloseClass} onClick={this.onClose.bind(this)}></View>
          </View>
        </View>
      </View>
    )
  }
}

AtCurtain.defaultProps = {
  customStyle: '',
  className: '',
  isOpened: false,
  closeBtnPosition: 'bottom',
  onClose: () => {},
}

AtCurtain.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  isOpened: PropTypes.bool,
  closeBtnPosition: PropTypes.string,
  onClose: PropTypes.func,
}
