import Taro from '@tarojs/taro'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = (): void => {}

export const PLATFORM = {
  isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
  isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
  isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
  isRN: Taro.getEnv() === Taro.ENV_TYPE.RN
}

export default {}
