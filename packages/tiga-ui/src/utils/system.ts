import Taro from '@tarojs/taro'

const systemInfo = Taro.getSystemInfoSync()
export const SYSTEMINFO = systemInfo || Taro.getSystemInfoSync() || {}
