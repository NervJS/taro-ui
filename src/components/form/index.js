import Taro from '@tarojs/taro'
import { Form } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => { }

export default class AtForm extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    reportSubmit: false,
    onSubmit: defaultFunc,
    onReset: defaultFunc
  }

  static propTypes = {
    customStyle: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
    ]),
    className: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.string
    ]),
    reportSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
  }

  onSubmit () {
    this.props.onSubmit(...arguments)
  }

  onReset () {
    this.props.onReset(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      reportSubmit
    } = this.props

    return <Form
      className={
        classNames(
          'at-form',
          className
        )
      }
      style={customStyle}
      onSubmit={this.onSubmit.bind(this)}
      reportSubmit={reportSubmit}
      onReset={this.onReset.bind(this)}
    >
      {this.props.children}
    </Form>
  }
}
