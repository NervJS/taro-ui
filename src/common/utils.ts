import Taro from '@tarojs/taro'
import {
  execObject,
  fieldsObject,
  SelectorQuery
} from '@tarojs/taro/types/index'

const REM_LAYOUT_DELAY: number = 500

function delay (): Promise<null> {
  return new Promise(resolve => {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      setTimeout(() => {
        resolve()
      }, REM_LAYOUT_DELAY)
      return
    }
    resolve()
  })
}

function delayQuerySelector (
  $scope,
  selectorStr: string
): Promise<Array<execObject>> {
  const selector: SelectorQuery = Taro.createSelectorQuery().in($scope)
  return new Promise(reslove => {
    delay().then(() => {
      selector
        .select(selectorStr)
        .boundingClientRect()
        .exec((res: Array<execObject>) => {
          reslove(res)
        })
    })
  })
}

export { delay, delayQuerySelector }
