import Taro, { SelectorQuery } from '@tarojs/taro'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = (): void => {}

export const PLATFORM = {
  isWEB: Taro.getEnv() === Taro.ENV_TYPE.WEB,
  isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
  isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
  isRN: Taro.getEnv() === Taro.ENV_TYPE.RN
}

export function pxTransform(size: string | number): string | number {
  if (PLATFORM.isRN) {
    return +size
  }
  return size + 'px'
}

export function delay(delayTime = 25): Promise<null> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(null)
    }, delayTime)
  })
}

export function delayQuerySelector(
  selectorStr: string,
  delayTime = 500
): Promise<any[]> {
  return new Promise(resolve => {
    const selector: SelectorQuery = Taro.createSelectorQuery()
    delay(delayTime).then(() => {
      selector
        .select(selectorStr)
        .boundingClientRect()
        .exec((res: any[]) => {
          resolve(res)
        })
    })
  })
}

export function delayGetScrollOffset({ delayTime = 500 }): Promise<any[]> {
  return new Promise(resolve => {
    delay(delayTime).then(() => {
      Taro.createSelectorQuery()
        .selectViewport()
        .scrollOffset()
        .exec((res: any[]) => {
          resolve(res)
        })
    })
  })
}

export function delayGetClientRect({
  selectorStr,
  delayTime = 500
}): Promise<any[]> {
  const selector: SelectorQuery = Taro.createSelectorQuery()

  return new Promise(resolve => {
    delay(delayTime).then(() => {
      selector
        .select(selectorStr)
        .boundingClientRect()
        .exec((res: any[]) => {
          resolve(res)
        })
    })
  })
}

export default {}
