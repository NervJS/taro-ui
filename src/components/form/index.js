import * as React from 'nervjs'
import { Form } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtComponent from '../../common/component'

export default class AtForm extends AtComponent {
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
    const rootCls = classNames('at-form', className)

    return <Form
      className={rootCls}
      style={customStyle}
      onSubmit={this.onSubmit.bind(this)}
      reportSubmit={reportSubmit}
      onReset={this.onReset.bind(this)}
    >
      {this.props.children}
    </Form>
  }
}

AtForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false,
  onSubmit: () => {},
  onReset: () => {},
}

AtForm.propTypes = {
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
  onReset: PropTypes.func,
}
