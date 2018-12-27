import Taro from '@tarojs/taro'
import { execObject, SelectorQuery } from '@tarojs/taro/types/index'

const ENV = Taro.getEnv()
const REM_LAYOUT_DELAY: number = 500

function delay (): Promise<null> {
  return new Promise(resolve => {
    if (ENV === Taro.ENV_TYPE.WEB) {
      setTimeout(() => {
        resolve()
      }, REM_LAYOUT_DELAY)
      return
    }
    resolve()
  })
}

function delayQuerySelector (
  self,
  selectorStr: string
): Promise<Array<execObject>> {
  const $scope = ENV === Taro.ENV_TYPE.WEB ? self : self.$scope
  const selector: SelectorQuery = Taro.createSelectorQuery().in($scope)

  return new Promise(resolve => {
    delay().then(() => {
      selector
        .select(selectorStr)
        .boundingClientRect()
        .exec((res: Array<execObject>) => {
          resolve(res)
        })
    })
  })
}

function uuid (
  len = 8,
  radix = 16
): string {

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  var uuid: string[] = []
  var i = 0
  radix = radix || chars.length

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
  } else {
    // rfc4122, version 4 form
    var r

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r]
      }
    }
  }

  return uuid.join('')
}

export {
  delay,
  delayQuerySelector,
  uuid
}
