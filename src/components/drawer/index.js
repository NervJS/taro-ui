import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtList from '../list/index'
import AtListItem from '../list/item/index'

import './index.scss'

export default class AtDrawer extends Taro.Component {
  constructor () {
    super(...arguments)
    this.state = { animShow: false }
  }

  onItemClick (index, e) {
    this.animHide(e, index)
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
    }, 200)
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
      transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
    }
    if (right) rootClassName.push('at-drawer--right')
    else rootClassName.push('at-drawer--left')

    if (animShow) rootClassName.push('at-drawer--show')
    rootClassName = rootClassName.filter(str => str !== '')

    return (
      <View className={rootClassName}>
        <View className='at-drawer__mask' style={maskStyle} onClick={this.onMaskClick.bind(this)}></View>

        <View className='at-drawer__content' style={listStyle}>
          <AtList>
            {
              items.map((name, index) =>
                <AtListItem
                  key={index}
                  data-index={index}
                  onClick={this.onItemClick.bind(this, index)}
                  title={name}
                  arrow='right'
                >
                </AtListItem>)
            }
          </AtList>
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
