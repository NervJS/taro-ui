import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtFormProps } from 'types/form'
import { Form } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'

export default class AtForm extends AtComponent<AtFormProps> {
  public static defaultProps: AtFormProps
  public static propTypes: InferProps<AtFormProps>

  private onSubmit(): void {
    this.props.onSubmit && this.props.onSubmit(arguments as any)
  }

  private onReset(): void {
    this.props.onReset && this.props.onReset(arguments as any)
  }

  public render(): JSX.Element {
    const { customStyle, className, reportSubmit } = this.props
    const rootCls = classNames('at-form', className)

    return (
      <Form
        className={rootCls}
        style={customStyle}
        onSubmit={this.onSubmit.bind(this)}
        reportSubmit={reportSubmit}
        onReset={this.onReset.bind(this)}
      >
        {this.props.children}
      </Form>
    )
  }
}

AtForm.defaultProps = {
  customStyle: '',
  className: '',
  reportSubmit: false,
  onSubmit: () => {},
  onReset: () => {}
}

AtForm.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  reportSubmit: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func
}
