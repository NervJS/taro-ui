import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import AtIcon from '../../components/icon'
import './index.scss'

export default class AtCurtain extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    isOpened: false,
    closeBtnPosition: 'bottom',
    onClose: () => {}
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
    isOpened: PropTypes.bool,
    closeBtnPosition: PropTypes.string,
    onClose: PropTypes.func
  }

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

    return (
      <View
        className={
          classNames({
            'at-curtain': true,
            'at-curtain--closed': !isOpened
          }, className)
        }
        style={customStyle}
        onClick={this._stopPropagation}
      >
        <View className='at-curtain__container'>
          <View className='at-curtain__body'>
            {this.props.children}
            <View
              className={
                classNames({
                  'at-curtain__close-box': true,
                  'at-curtain__close-box--top': closeBtnPosition === 'top'
                })
              }
            >
              <AtIcon
                customStyle={{ fontSize: '30px' }}
                value='close-circle'
                color='#fff'
                onClick={this.onClose.bind(this)}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
