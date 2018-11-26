import Taro from '@tarojs/taro'

const message = Taro.eventCenter.trigger.bind(Taro.eventCenter, 'atMessage')

export default message
