import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import AtIcon from '../../components/icon/index'
import AtBadge from '../../components/badge/index'
import AtComponent from '../../common/component'
import './index.scss'

export default class AtTabBar extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    fixed: false,
    backgroundColor: '#fff',
    current: 0,
    iconSize: '24',
    fontSize: '14',
    color: '#333',
    selectedColor: '#6190E8',
    scroll: false,
    tabList: [],
    onClick: () => { }
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
    fixed: PropTypes.bool,
    backgroundColor: PropTypes.string,
    current: PropTypes.number,
    iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    selectedColor: PropTypes.string,
    scroll: PropTypes.bool,
    tabList: PropTypes.array,
    onClick: PropTypes.func
  }

  // constructor () {
  //   super(...arguments)
  //   this.state = {
  //     isIPhoneX: false
  //   }
  // }

  // componentDidMount () {
  //   const curEnv = Taro.getEnv()

  //   if (
  //     curEnv === Taro.ENV_TYPE.WEAPP &&
  //     Taro.getSystemInfoSync().model.indexOf('iPhone X') >= 0
  //   ) {
  //     this.setState({ isIPhoneX: true })
  //   }
  // }

  handleClick () {
    this.props.onClick(...arguments)
  }

  render () {
    const {
      customStyle,
      className,
      fixed,
      backgroundColor,
      tabList,
      current,
      color,
      iconSize,
      fontSize,
      selectedColor
    } = this.props
    // const { isIPhoneX } = this.state
    const defaultStyle = `color: ${color};`
    const selectedStyle = `color: ${selectedColor};`
    const titleStyle = `font-size: ${fontSize}px;`
    const rootStyle = `background-color: ${backgroundColor};`

    return (
      <View
        className={
          classNames({
            'at-tab-bar': true,
            'at-tab-bar--fixed': fixed,
            // 'at-tab-bar--ipx': isIPhoneX
          }, className)
        }
        style={this.mergeStyle(rootStyle, customStyle)}
      >
        {tabList.map((item, i) => (
          <View
            className='at-tab-bar__item'
            style={current === i ? selectedStyle : defaultStyle}
            key={item.title}
            onClick={this.handleClick.bind(this, i)}
          >
            {item.iconType ? (
              <AtBadge dot={!!item.dot} value={item.text} max={item.max}>
                <View className='at-tab-bar__icon'>
                  <AtIcon
                    prefixClass={item.iconPrefixClass}
                    value={
                      current === i && item.selectedIconType
                        ? item.selectedIconType
                        : item.iconType
                    }
                    size={iconSize}
                    color={current === i ? selectedColor : color}
                  />
                </View>
              </AtBadge>
            ) : null}
            <View>
              <AtBadge
                dot={item.iconType ? false : !!item.dot}
                value={item.iconType ? '' : item.text}
                max={item.iconType ? '' : item.max}
              >
                <View className='at-tab-bar__title' style={titleStyle}>
                  {item.title}
                </View>
              </AtBadge>
            </View>
          </View>
        ))}
      </View>
    )
  }
}
