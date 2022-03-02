// 假设 taro 基础组件完好，只对组件库功能进行测试

// eslint-disable-next-line
import { View, Text, Button } from './src/__tests__/__mock__/taroComponent'

const validators = [
  /Warning: Unknown event handler property `%s`/,
  /Warning: React does not recognize the `%s` prop on a DOM element/,
  /Warning: The tag <%s> is unrecognized in this browser/
]

function checkReactError(message) {
  if (validators.find(reg => message.match(reg))) {
    return true
  }

  return false
}

// 因为 ReactDOM 标签校验问题劫持 console.error
const realError = console.error
console.error = (...x) => {
  // debugger
  if (checkReactError(x[0])) {
    return
  }
  realError(...x)
}

// eslint-disable-next-line
jest.mock('@tarojs/components', () => ({
  View,
  Text,
  Button
}))
