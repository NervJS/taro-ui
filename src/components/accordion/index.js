import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { View, Text } from '@tarojs/components'
import AtComponent from '../../common/component'

export default class AtAccordion extends AtComponent {
  constructor () {
    super(...arguments)
    this.bodyHeight = 0 // body 高度
    this.state = {
      isOpen: !!this.props.open, // 组件是否展开
      wrapperHeight: '',
    }
  }

  handleClick (e) {
    this.switch()
    this.props.onClick(e)
  }

  componentDidMount () {
    this.initData()
  }

  componentWillReceiveProps () {
    this.initData()
  }

  initData () {
    const { isOpen } = this.state
    const env = Taro.getEnv()

    setTimeout(() => {
      if (env === Taro.ENV_TYPE.WEB) {
        this.bodyHeight = this.accordionRef.vnode.dom.getBoundingClientRect().height

        this.setState({
          wrapperHeight: isOpen ? this.bodyHeight : 0
        })
      } else if (env === Taro.ENV_TYPE.WEAPP) {
        this.accordionRef.boundingClientRect(rect => {
          this.bodyHeight = rect.height || 0
          this.setState({
            wrapperHeight: isOpen ? this.bodyHeight : 0
          })
        }).exec()
      }
    }, 1000)
  }

  switch () {
    const { isOpen } = this.state
    this.setState({
      isOpen: !isOpen,
      wrapperHeight: isOpen ? 0 : this.bodyHeight
    })
  }

  getAccordionRef = node => (this.accordionRef = node)

  render () {
    const {
      customStyle,
      className,
      title,
      icon,
      hasBorder,
    } = this.props
    const { wrapperHeight, isOpen } = this.state

    const iconClass = classNames({
      'at-icon': true,
      [`at-icon-${icon && icon.value}`]: icon && icon.value,
      'at-accordion__icon': true,
    })
    const headerClass = classNames('at-accordion__header', {
      'at-accordion__header--noborder': !hasBorder
    })
    const arrowClass = classNames('at-accordion__arrow', {
      'at-accordion__arrow--folded': !!isOpen
    })

    const contentStyle = {
      height: `${wrapperHeight}px`
    }
    const iconStyle = {
      color: (icon && icon.color) || '',
      fontSize: (icon && `${icon.size}px`) || '',
    }

    return (
      <View
        className={classNames('at-accordion', className)}
        style={customStyle}
      >
        <View className={headerClass} onClick={this.handleClick.bind(this)}>
          {icon && icon.value && <Text className={iconClass} style={iconStyle}></Text>}
          <View className='at-accordion__title'>{title}</View>
          <View className={arrowClass}>
            <Text className='at-icon at-icon-chevron-down'></Text>
          </View>
        </View>
        <View
          className='at-accordion__content'
          style={contentStyle}
          ref={this.getAccordionRef}
        >
          {this.props.children}
        </View>
      </View>
    )
  }
}

AtAccordion.defaultProps = {
  open: false,
  customStyle: '',
  className: '',
  title: '',
  icon: {},
  hasBorder: true,
  onClick: () => {},
}

AtAccordion.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string
  ]),
  open: PropTypes.bool,
  title: PropTypes.string,
  icon: PropTypes.object,
  hasBorder: PropTypes.bool,
  onClick: PropTypes.func,
}
