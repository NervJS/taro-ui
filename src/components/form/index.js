import Taro from '@tarojs/taro'
import { Form } from '@tarojs/components'
import PropTypes from 'prop-types'

import AtComponent from '../../common/component'
import './index.scss'

const defaultFunc = () => { }

export default class AtForm extends AtComponent {
  static defaultProps = {
    style: '',
    reportSubmit: false,
    onSubmit: defaultFunc,
    onReset: defaultFunc
  }

  static propTypes = {
    style: PropTypes.string,
    reportSubmit: PropTypes.bool,
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
  }

  onSubmit () {
    this.props.onSubmit(...arguments)
  }

  reportSubmit () {
    this.props.reportSubmit(...arguments)
  }

  onReset () {
    this.props.onReset(...arguments)
  }

  render () {
    const { style, reportSubmit } = this.props

    return <Form
      className='at-form'
      style={style}
      onSubmit={this.onSubmit.bind(this)}
      reportSubmit={reportSubmit}
      onReset={this.onReset.bind(this)}
    >
      {this.props.children}
    </Form>
  }
}
