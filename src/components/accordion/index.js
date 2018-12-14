import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { View } from '@tarojs/components'

import AtComponent from '../../common/component'
import AtIcon from '../../components/icon'
import './index.scss'

export default class AtAccordion extends AtComponent {
  static defaultProps = {
    isTest: false,
    open: false,
    customStyle: '',
    className: '',
    title: '',
    onClick: () => {}
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
    open: PropTypes.bool,
    title: PropTypes.string,
    icon: PropTypes.object,
    onClick: PropTypes.func
  }

  constructor () {
    super(...arguments)
    // body 元素id
    const randomId = `${(new Date()).getTime()}${Math.ceil(Math.random() * 10e5).toString(36)}`
    this.elemId = `at-accordion_body_${randomId}`
    // body 高度
    this.bodyHeight = 0
    // 组件是否展开
    this.isOpen = this.props.open
    this.state = {
      bodyHeight: '',
    }
  }

  handleClick (e) {
    this.switch()
    this.props.onClick(e)
  }

  componentDidMount () {
    // 获取 body 高度
    const env = Taro.getEnv()
    if (env === Taro.ENV_TYPE.WEB) {
      setTimeout(() => {
        this.bodyHeight = document.getElementsByClassName(`${this.elemId}`)[0].scrollHeight
        this.setState({
          bodyHeight: this.isOpen ? this.bodyHeight : 0
        })
      })
    } else if (env === Taro.ENV_TYPE.WEAPP) {
      const query = Taro.createSelectorQuery().in(this.$scope)
      query.select(`.${this.elemId}`).boundingClientRect(res => {
        this.bodyHeight = res.height
        this.setState({
          bodyHeight: this.isOpen ? this.bodyHeight : 0
        })
      }).exec()
    }
  }

  switch () {
    this.isOpen = !this.isOpen
    this.setState({
      bodyHeight: this.isOpen ? this.bodyHeight : 0
    })
  }

  render () {
    const {
      customStyle,
      className,
      isTest,
      title,
      icon,
    } = this.props

    const {
      bodyHeight,
    } = this.state

    const contentStyle = {
      height: `${bodyHeight}px`
    }

    const animatedStyle = {
      transition: 'transform 0.2s ease',
    }
    if (this.isOpen) {
      animatedStyle.transform = 'rotate(180deg)'
    } else {
      animatedStyle.transform = 'rotate(0)'
    }

    const contentCls = {
      'at-accordion__content': true,
    }
    contentCls[this.elemId] = !isTest

    return (
      <View
        className={
          classNames('at-accordion', className)
        }
        style={customStyle}
      >
        <View
          className='at-accordion__header'
          onClick={this.handleClick.bind(this)}
        >
          {
            icon
              ? <AtIcon
                customStyle={{
                  marginRight: '15px',
                  fontSize: `${icon.size || 24}px`
                }}
                className='at-accordion__icon'
                value={icon.value}
                color={icon.color}
              />
              : null
          }
          <View className='at-accordion__title'>
            {title}
          </View>
          <AtIcon
            customStyle={
              this.mergeStyle(
                {
                  fontSize: '24px',
                }, animatedStyle
              )
            }
            value='chevron-down'
            color='#c7c7cc'
          />
        </View>
        <View
          className={
            classNames(contentCls)
          }
          style={contentStyle}
        >
          {this.props.children}
        </View>
      </View>
    )
  }
}
