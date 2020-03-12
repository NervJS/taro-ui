import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtDrawerProps, AtDrawerState } from 'types/drawer'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import AtList from '../list/index'
import AtListItem from '../list/item/index'

export default class AtDrawer extends AtComponent<
  AtDrawerProps,
  AtDrawerState
> {
  public static defaultProps: AtDrawerProps
  public static propTypes: InferProps<AtDrawerProps>

  public constructor(props: AtDrawerProps) {
    super(props)
    this.state = {
      animShow: false,
      _show: props.show
    }
  }

  public componentDidMount(): void {
    const { _show } = this.state
    if (_show) this.animShow()
  }

  private onItemClick(index: number): void {
    this.props.onItemClick && this.props.onItemClick(index)
    this.animHide()
  }

  private onHide(): void {
    this.setState({ _show: false }, () => {
      this.props.onClose && this.props.onClose()
    })
  }

  private animHide(): void {
    this.setState({
      animShow: false
    })
    setTimeout(() => {
      this.onHide()
    }, 300)
  }

  private animShow(): void {
    this.setState({ _show: true })
    setTimeout(() => {
      this.setState({
        animShow: true
      })
    }, 200)
  }

  private onMaskClick(): void {
    this.animHide()
  }

  public componentWillReceiveProps(nextProps: AtDrawerProps): void {
    const { show } = nextProps
    if (show !== this.state._show) {
      show ? this.animShow() : this.animHide()
    }
  }

  public render(): JSX.Element {
    const { mask, width, right, items } = this.props
    const { animShow, _show } = this.state
    const rootClassName = ['at-drawer']

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0
    }
    const listStyle = {
      width,
      transition: animShow
        ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)'
        : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)'
    }

    const classObject = {
      'at-drawer--show': animShow,
      'at-drawer--right': right,
      'at-drawer--left': !right
    }

    return _show ? (
      <View
        className={classNames(rootClassName, classObject, this.props.className)}
      >
        <View
          className='at-drawer__mask'
          style={maskStyle}
          onClick={this.onMaskClick.bind(this)}
        ></View>

        <View className='at-drawer__content' style={listStyle}>
          {!!items && items.length ? (
            <AtList>
              {items.map((name, index) => (
                <AtListItem
                  key={`${name}-${index}`}
                  data-index={index}
                  onClick={this.onItemClick.bind(this, index)}
                  title={name}
                  arrow='right'
                ></AtListItem>
              ))}
            </AtList>
          ) : (
            this.props.children
          )}
        </View>
      </View>
    ) : (
      <View></View>
    )
  }
}

AtDrawer.defaultProps = {
  show: false,
  mask: true,
  width: '',
  right: false,
  items: [],
  onItemClick: () => {},
  onClose: () => {}
}

AtDrawer.propTypes = {
  show: PropTypes.bool,
  mask: PropTypes.bool,
  width: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string),
  onItemClick: PropTypes.func,
  onClose: PropTypes.func
}
