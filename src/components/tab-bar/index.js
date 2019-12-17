import * as React from 'nervjs'
import { View, Text, Image } from '@tarojs/components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import AtBadge from '../../components/badge/index'
import AtComponent from '../../common/component'

export default class AtTabBar extends AtComponent {
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
    const defaultStyle = {
      color: color || ''
    }
    const selectedStyle = {
      color: selectedColor || ''
    }
    const titleStyle = {
      fontSize: fontSize ? `${fontSize}px` : ''
    }
    const rootStyle = {
      backgroundColor: backgroundColor || ''
    }
    const imgStyle = {
      width: `${iconSize}px`,
      height: `${iconSize}px`
    }

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
            className={classNames('at-tab-bar__item', { 'at-tab-bar__item--active': current === i })}
            style={current === i ? selectedStyle : defaultStyle}
            key={item.title}
            onClick={this.handleClick.bind(this, i)}
          >
            {item.iconType ? (
              <AtBadge dot={!!item.dot} value={item.text} maxValue={Number(item.max)}>
                <View className='at-tab-bar__icon'>
                  <Text className={classNames(`${item.iconPrefixClass || 'at-icon'}`, {
                    [`${item.iconPrefixClass || 'at-icon'}-${item.selectedIconType}`]: current === i && item.selectedIconType,
                    [`${item.iconPrefixClass || 'at-icon'}-${item.iconType}`]: !(current === i && item.selectedIconType),
                  })} style={{
                    color: current === i ? selectedColor : color,
                    fontSize: iconSize ? `${iconSize}px` : '',
                  }}
                  ></Text>
                </View>
              </AtBadge>
            ) : null}

            {item.image ? (
              <AtBadge dot={!!item.dot} value={item.text} maxValue={Number(item.max)}>
                <View className='at-tab-bar__icon'>
                  <Image
                    className={classNames(
                      'at-tab-bar__inner-img', {
                        'at-tab-bar__inner-img--inactive': current !== i
                      })
                    }
                    mode='widthFix'
                    src={item.selectedImage || item.image}
                    style={imgStyle}
                  ></Image>
                  <Image
                    className={classNames(
                      'at-tab-bar__inner-img', {
                        'at-tab-bar__inner-img--inactive': current === i
                      })
                    }
                    mode='widthFix'
                    src={item.image}
                    style={imgStyle}
                  ></Image>
                </View>
              </AtBadge>
            ) : null}

            <View>
              <AtBadge
                dot={(item.iconType || item.image) ? false : !!item.dot}
                value={(item.iconType || item.image) ? null : item.text}
                maxValue={(item.iconType || item.image) ? null : Number(item.max)}
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

AtTabBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  current: 0,
  scroll: false,
  tabList: [],
  onClick: () => {},
}

AtTabBar.propTypes = {
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
  onClick: PropTypes.func,
}
