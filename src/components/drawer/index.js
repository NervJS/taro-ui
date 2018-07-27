import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../icon/index'

import './index.scss'

export default class AtDrawer extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = { animShow: false }
  }

  onItemClick (e) {
    this.animHide(e, e.currentTarget.dataset.index)
  }

  onHide () {
    this.props.onClose(...arguments)
  }

  animHide () {
    this.setState({
      animShow: false,
    })
    setTimeout(() => {
      this.onHide(...arguments)
    }, 300)
  }

  onMaskClick () {
    this.animHide(...arguments)
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({
        animShow: true,
      })
    }, 100)
    console.log('did mount')
  }

  render () {
    const {
      mask,
      width,
      right,
      items,
    } = this.props
    const {
      animShow,
    } = this.state
    let rootClassName = ['at-drawer']

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0,
    }
    const listStyle = {
      width,
      transform: animShow ? 'translateX(0%)' : 'translateX(-100%)',
      transition: animShow ? 'transform 225ms cubic-bezier(0, 0, 0.2, 1)' : 'transform 195ms cubic-bezier(0.4, 0, 0.6, 1)',
    }
    if (right) {
      listStyle.right = '0px'
      listStyle.left = 'auto'
      listStyle.transform = animShow ? 'translateX(0%)' : 'translateX(100%)'
    }
    rootClassName = rootClassName.filter(str => str !== '')
    // console.log('====', this.props.children)

    return (
      <View className={rootClassName}>
        <View className='at-drawer__mask' style={maskStyle} onClick={this.onMaskClick.bind(this)}></View>

        <View className='at-drawer__content' style={listStyle}>
          <View className='at-drawer__list'>
            {items.map((name, index) => <View className='at-drawer__list-item' key={index} data-index={index} onClick={this.onItemClick.bind(this)}>{name}<AtIcon value='activity' size='20' color='#C7C7CC'></AtIcon></View>)}
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
