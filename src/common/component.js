import Taro, { Component } from '@tarojs/taro'

import _isFunction from 'lodash/isFunction'

export default class AtComponent extends Component {
  static options = {
    addGlobalClass: true
  }

  isFunction () {
    return _isFunction(...arguments)
  }
}
