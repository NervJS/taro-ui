import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import AtIcon from '../../components/icon'
import './index.scss'

export default class AtCurtain extends AtComponent {
  static defaultProps = {
    isOpened: true,
    closeBtnPosition: 'bottom',
    size: '18',
    color: '#fff',
    onClose: () => {}
  }

  static propTypes = {
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    color: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    onClose: PropTypes.func
  }

  constructor () {
    super(...arguments)
    this.state = {
      isOpened: this.props.isOpened
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

  closeCurtain () {
    this.setState({
      isOpened: false
    })
    this.props.onClose(...arguments)
  }

  render () {
    const { closeBtnPosition } = this.props

    return (
      <View
        className={
          classNames({
            'at-curtain': true,
            'at-curtain--closed': !this.state.isOpened
          })
        }
      >
        <View className='at-curtain__container'>
          <View className='at-curtain__body'>
            {this.props.children}
          </View>
          <View
            className={
              classNames({
                'at-curtain__close': true,
                'at-curtain__close--top': closeBtnPosition === 'top'
              })
            }
          >
            <AtIcon
              onClick={this.closeCurtain.bind(this)}
              value='close-circle'
              color='#fff'
              size='30'
            />
          </View>
        </View>
      </View>
    )
  }
}
