import Taro from '@tarojs/taro'
import { execObject, SelectorQuery } from '@tarojs/taro/types/index'

const ENV = Taro.getEnv()

function delay (delayTime = 500): Promise<null> {
  return new Promise(resolve => {
    if (ENV === Taro.ENV_TYPE.WEB) {
      setTimeout(() => {
        resolve()
      }, delayTime)
      return
    }
    resolve()
  })
}

function delayQuerySelector (
  self,
  selectorStr: string,
  delayTime = 500,
): Promise<Array<execObject>> {
  const $scope = ENV === Taro.ENV_TYPE.WEB ? self : self.$scope
  const selector: SelectorQuery = Taro.createSelectorQuery().in($scope)

  return new Promise(resolve => {
    delay(delayTime).then(() => {
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

interface EventDetail {
  pageX: number
  pageY: number
  clientX: number
  clientY: number
  offsetX: number
  offsetY: number
  x: number
  y: number
}

function getEventDetail(event:any) {
  let detail: EventDetail
  switch (ENV) {
    case Taro.ENV_TYPE.WEB:
      detail = {
        pageX: event.pageX,
        pageY: event.pageY,
        clientX: event.clientX,
        clientY: event.clientY,
        offsetX: event.offsetX,
        offsetY: event.offsetY,
        x: event.x,
        y: event.y
      }
      break;

    case Taro.ENV_TYPE.WEAPP:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      }
      break;

    case Taro.ENV_TYPE.ALIPAY:
      detail = {
        pageX: event.target.pageX,
        pageY: event.target.pageY,
        clientX: event.target.clientX,
        clientY: event.target.clientY,
        offsetX: event.target.offsetLeft,
        offsetY: event.target.offsetTop,
        x: event.target.x,
        y: event.target.y
      }
      break;

    default:
      detail = {
        pageX: 0,
        pageY: 0,
        clientX: 0,
        clientY: 0,
        offsetX: 0,
        offsetY: 0,
        x: 0,
        y: 0,
      }
      console.warn('getEventDetail暂未支持该环境')
      break;
  }
  return detail
}

function initTestEnv() {
  if (process.env.NODE_ENV === 'test') {
    Taro.initPxTransform({ designWidth: 750 })
  }
}

export {
  delay,
  delayQuerySelector,
  uuid,
  getEventDetail,
  initTestEnv
}
