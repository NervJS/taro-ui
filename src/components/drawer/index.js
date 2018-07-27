import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../icon/index'

import './index.scss'

export default class AtDrawer extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = {}
    this.onItemClick = this.onItemClick.bind(this)
  }

  onItemClick (index) {
    console.log('=====', index)
  }

  onHide () {
    // if (delay) {
    //   setTimeout(() => {
    //     this.props.onClose(...arguments)
    //   }, delay)
    // } else this.props.onClose(...arguments)
    this.props.onClose(...arguments)
  }

  render () {
    const {
      show,
      mask,
      width,
      right,
      items,
    } = this.props
    let rootClassName = ['at-drawer']
    const showAnimClass = show ? 'anim-show' : 'anim-hide'
    const rootStyle = {}
    setTimeout(() => {
      // rootStyle.display = show ? 'block' : 'none'
    }, 500)

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: show ? 1 : 0,
    }
    const listStyle = {
      width,
      transform: show ? 'translateX(0%)' : 'translateX(-100%)',
    }
    if (right) {
      listStyle.right = '0px'
      listStyle.left = 'auto'
    }
    rootClassName.push(showAnimClass)
    rootClassName = rootClassName.filter(str => str !== '')

    return (
      <View className={rootClassName} style={rootStyle}>
        <View className='at-drawer__mask' style={maskStyle} onClick={this.onHide.bind(this, 500)}></View>

        <View className='at-drawer__content' style={listStyle}>
          <View className='at-drawer__list'>
            {
              items.map((name, index) => <View className='at-drawer__list-item' key={index} onClick={this.onItemClick}>{name}<AtIcon value='activity' size='20' color='#C7C7CC'></AtIcon></View>)
            }
          </View>
        </View>
      </View>
    )
  }
}

AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '230px',
  right: false,
  items: [],
}

AtDrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
}
