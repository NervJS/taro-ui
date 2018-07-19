import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'
/**
 * @author:chenzeji
 * @description iview 图标组件，暂时为了其他组件的开发方便，临时封装
 * @prop type {String} 图标类型 eg：'collection_fill' 图标列表详细请看文档：https://weapp.iviewui.com/components/icon
 * @prop size {Number|String} 图标大小 default: 30
 * @prop color {String} 图标颜色 default:#6190e8
 */
class AtIcon extends Taro.Component {
  handleClick() {
    this.props.onClick(...arguments)
  }
  render() {
    let style = `font-size: ${this.props.size}px;`
    if (this.props.color) {
      style += `color:${this.props.color}`
    }
    return <View
      className={this.props.type ? 'at-icon at-icon-' + this.props.type  : 'at-icon'}
      style={style}
      onClick={this.handleClick.bind(this)}>
    </View>
  }
}
AtIcon.defaultProps = {
  color: '#6190e8',
  size: '30',
  onClick: () => { }
}
AtIcon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  onClick: PropTypes.func
}
export default AtIcon
