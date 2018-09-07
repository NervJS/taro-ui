import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtRate extends AtComponent {
  static defaultProps = {
    style: '',
    size: 20,
    value: 0,
    max: 5,
    margin: 5,
    onChange: () => { }
  }

  static propTypes = {
    style: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.number,
    max: PropTypes.number,
    margin: PropTypes.number,
    onChange: PropTypes.func
  }

  handleClick (i) {
    this.props.onChange(i + 1, ...arguments)
  }

  render () {
    const {
      style,
      value,
      max,
      size,
      margin
    } = this.props
    const iconStyle = {
      margin: Taro.pxTransform(margin)
    }
    // 生成星星颜色 className 数组，方便在jsx中直接map
    const classNameArr = []
    const floorValue = Math.floor(value)
    const ceilValue = Math.ceil(value)
    for (let i = 0; i < max; i++) {
      if (floorValue > i) {
        classNameArr.push('at-rate__icon at-rate__icon--on')
      } else if (ceilValue - 1 === i) {
        classNameArr.push('at-rate__icon at-rate__icon--half')
      } else {
        classNameArr.push('at-rate__icon at-rate__icon--off')
      }
    }

    return <View className='at-rate' style={style} >
      {
        classNameArr.map((cls, i) => <View
          className={cls}
          key={i}
          style={iconStyle}
          onClick={this.handleClick.bind(this, i)}
        >
          <AtIcon value='star-2' size={size} />
          <View className='at-rate__left'>
            <AtIcon value='star-2' size={size} />
          </View>
        </View>)
      }
    </View>
  }
}
