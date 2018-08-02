import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import AtIcon from '../../components/icon/index'
import './index.scss'

/**
 * @author: chenzeji
 * @description 评分组件
 * @prop size {Number|String} 评分星星大小 default:30
 * @prop value {Number} 当前评分 default:0
 * @prop max {Number} 最大评分 default:5
 * @prop onChange {Function} 监听函数，数值改变时触发
 */
class AtRate extends Taro.Component {
  handleClick (i) {
    this.props.onChange(i + 1)
  }
  // 暂不实现touchmove，等taro新版本
  // handleTouchMove(e) {
  // }
  render () {
    const { size } = this.props
    // 生成星星颜色数组，方便在jsx中直接map
    const rateArr = []
    for (let i = 0; i < this.props.max; i++) {
      if (this.props.value > i) {
        rateArr.push('#ffca3e')
      } else {
        rateArr.push('#ececec')
      }
    }
    return <View className='at-rate' >
      {rateArr.map((color, i) => <View className='at-rate__icon' key={i} onClick={this.handleClick.bind(this, i)}><AtIcon value='collection_fill' size={size} color={color} /></View>)}
    </View>
  }
}
AtRate.defaultProps = {
  size: 30,
  value: 0,
  max: 5,
  onChange: () => {}
}
AtRate.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  value: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func
}
export default AtRate
