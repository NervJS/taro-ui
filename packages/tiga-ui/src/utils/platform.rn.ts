import Taro from '@tarojs/taro'
import { Platform } from 'react-native'
import type { PlatformOptions } from './platform'

export const PLATFORM: PlatformOptions = {
  isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
  isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
  isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
  isRN: Taro.getEnv() === Taro.ENV_TYPE.RN,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android'
}

export function pxTransform(size: string | number): string | number {
  return +size
}
