import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import './index.scss'

class AtForm extends Taro.Component {
  render () {
    return <View className='at-form' style={this.props.style}>
      {this.props.children}
    </View>
  }
}
AtForm.defaultProps = {
  style: ''
}
AtForm.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ])
}
export default AtForm
