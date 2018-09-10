import Taro, { Component } from '@tarojs/taro'

import PropTypes from 'prop-types'

export default class AtComponent extends Component {
  static options = {
    addGlobalClass: true
  }

  getClassName (arg) {
    const { className } = this.props

    if (!className) {
      return arg
    }

    let componentClass = arg
    let propsClass = className

    if (!Array.isArray(propsClass)) {
      propsClass = [propsClass]
    }

    if (!Array.isArray(componentClass)) {
      componentClass = [componentClass]
    }

    return componentClass.concat(propsClass)
  }
}

AtComponent.propTypes = {
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
