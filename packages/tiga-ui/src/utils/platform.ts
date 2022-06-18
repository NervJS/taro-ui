import Taro from '@tarojs/taro'
import { SYSTEMINFO } from './system'

export type PlatformOptions = {
  isWEB: boolean
  isWEAPP: boolean
  isALIPAY: boolean
  isRN: boolean
  isIOS?: boolean
  isAndroid?: boolean
}

export const PLATFORM: PlatformOptions = {
  isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
  isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
  isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
  isRN: Taro.getEnv() === Taro.ENV_TYPE.RN,
  isIOS: SYSTEMINFO.platform === 'ios',
  isAndroid: SYSTEMINFO.platform === 'android'
}

export function pxTransform(size: string | number): string | number {
  return size + 'px'
}
