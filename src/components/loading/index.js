import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

class AtLoading extends Taro.Component {
  render () {
    const style = {
      'border': `1px solid ${this.props.color}`,
      'border-color': `${this.props.color} transparent transparent transparent`
    }
    return (
      <View className='at-loading'>
        <View className='at-loading__ring' style={style}></View>
        <View className='at-loading__ring' style={style}></View>
        <View className='at-loading__ring' style={style}></View>
      </View>
    )
  }
}
AtLoading.defaultProps = {
  color: '#fff'
}
export default AtLoading
