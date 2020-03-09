import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { AtTabBarProps, TabItem } from 'types/tab-bar'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import AtComponent from '../../common/component'
import AtBadge from '../badge/index'

export default class AtTabBar extends AtComponent<AtTabBarProps> {
  public static defaultProps: AtTabBarProps
  public static propTypes: InferProps<AtTabBarProps>

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

  private handleClick(index: number, event: CommonEvent): void {
    this.props.onClick(index, event)
  }

  public render(): JSX.Element {
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
        className={classNames(
          {
            'at-tab-bar': true,
            'at-tab-bar--fixed': fixed
            // 'at-tab-bar--ipx': isIPhoneX
          },
          className
        )}
        style={this.mergeStyle(rootStyle, customStyle!)}
      >
        {tabList.map((item: TabItem, i: number) => (
          <View
            className={classNames('at-tab-bar__item', {
              'at-tab-bar__item--active': current === i
            })}
            style={current === i ? selectedStyle : defaultStyle}
            key={item.title}
            onClick={this.handleClick.bind(this, i)}
          >
            {item.iconType ? (
              <AtBadge
                dot={!!item.dot}
                value={item.text}
                maxValue={Number(item.max)}
              >
                <View className='at-tab-bar__icon'>
                  <Text
                    className={classNames(
                      `${item.iconPrefixClass || 'at-icon'}`,
                      {
                        [`${item.iconPrefixClass || 'at-icon'}-${
                          item.selectedIconType
                        }`]: current === i && item.selectedIconType,
                        [`${item.iconPrefixClass || 'at-icon'}-${
                          item.iconType
                        }`]: !(current === i && item.selectedIconType)
                      }
                    )}
                    style={{
                      color: current === i ? selectedColor : color,
                      fontSize: iconSize ? `${iconSize}px` : ''
                    }}
                  ></Text>
                </View>
              </AtBadge>
            ) : null}

            {item.image ? (
              <AtBadge
                dot={!!item.dot}
                value={item.text}
                maxValue={Number(item.max)}
              >
                <View className='at-tab-bar__icon'>
                  <Image
                    className={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current !== i
                    })}
                    mode='widthFix'
                    src={item.selectedImage || item.image}
                    style={imgStyle}
                  ></Image>
                  <Image
                    className={classNames('at-tab-bar__inner-img', {
                      'at-tab-bar__inner-img--inactive': current === i
                    })}
                    mode='widthFix'
                    src={item.image}
                    style={imgStyle}
                  ></Image>
                </View>
              </AtBadge>
            ) : null}

            <View>
              <AtBadge
                dot={item.iconType || item.image ? false : !!item.dot}
                value={item.iconType || item.image ? '' : item.text}
                maxValue={item.iconType || item.image ? 0 : Number(item.max)}
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
  tabList: [],
  onClick: () => {}
}

AtTabBar.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  fixed: PropTypes.bool,
  backgroundColor: PropTypes.string,
  current: PropTypes.number,
  iconSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  selectedColor: PropTypes.string,
  tabList: PropTypes.array,
  onClick: PropTypes.func
}
