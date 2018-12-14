import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtRate extends AtComponent {
  static defaultProps = {
    isTest: false,
    customStyle: '',
    className: '',
    size: 20,
    value: 0,
    max: 5,
    margin: 5,
    onChange: () => { }
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
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.number,
    max: PropTypes.number,
    margin: PropTypes.number,
    onChange: PropTypes.func
  }

  constructor () {
    super(...arguments)
    if (process.env.NODE_ENV === 'test') {
      Taro.initPxTransform({ designWidth: 750 })
    }
  }

  handleClick () {
    this.props.onChange(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      value,
      max,
      size,
      margin
    } = this.props

    const iconStyle = {
      marginRight: Taro.pxTransform(margin)
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

    return (
      <View
        className={classNames('at-rate', className)}
        style={customStyle}
      >
        {
          classNameArr.map((cls, i) => <View
            className={cls}
            key={i}
            style={iconStyle}
            onClick={this.handleClick.bind(this, i + 1)}
          >
            <AtIcon customStyle={{ fontSize: `${size}px` }} value='star-2' />
            <View className='at-rate__left'>
              <AtIcon customStyle={{ fontSize: `${size}px` }} value='star-2' />
            </View>
          </View>)
        }
      </View>
    )
  }
}
