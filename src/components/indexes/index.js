import Taro from '@tarojs/taro'
import PropTypes from 'prop-types'
import { View, ScrollView } from '@tarojs/components'
import classNames from 'classnames'

import AtComponent from '../../common/component'
import AtList from '../../components/list/index'
import AtListItem from '../../components/list/item/index'

import './index.scss'

export default class AtIndexes extends AtComponent {
  static defaultProps = {
    customStyle: '',
    className: '',
    animation: true,
    topKey: 'Top',
    list: [],
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
    animation: PropTypes.bool,
    topKey: PropTypes.string,
    list: PropTypes.array,
    onClick: PropTypes.func
  }

  constructor () {
    super(...arguments)
    this.state = {
      targetView: '',
      targetOffsetTop: 0
    }
  }

  handleClick () {
    this.props.onClick(...arguments)
  }

  jumpTarget (targetView, i) {
    const env = Taro.getEnv()
    if (env === Taro.ENV_TYPE.WEAPP) {
      // 小程序环境
      this.setState({
        targetView
      })
    } else if (env === Taro.ENV_TYPE.WEB) {
      // web环境
      const bodyOffsetTop = this.indexesRef.vnode.dom.offsetTop
      // 目标节点offsetTop
      const targetOffsetTop = this.listRef.vnode.dom.childNodes[i].offsetTop
      this.setState({
        targetOffsetTop: targetOffsetTop - bodyOffsetTop
      })
    }
  }

  getListRef = node => (this.listRef = node)

  getIndexesRef = node => (this.indexesRef = node)

  render () {
    const {
      className,
      customStyle,
      animation,
      topKey,
      list
    } = this.props
    return (
      <View
        className={
          classNames({
            'at-indexes': true,
          }, className)}
        style={customStyle}
        ref={this.getIndexesRef}
      >
        <View className='at-indexes__menu'>
          <View
            className='at-indexes__menu-item'
            onClick={this.jumpTarget.bind(this, 'at-indexes__top', 0)}
          >
            {topKey}
          </View>
          {
            list.map((item, i) => (
              <View
                key={item.key}
                className='at-indexes__menu-item'
                onClick={this.jumpTarget.bind(this, `at-indexes__list-${item.key}`, i + 1)}
              >
                {item.key}
              </View>
            ))
          }
        </View>
        <ScrollView
          className='at-indexes__body'
          scrollY
          scrollWithAnimation={animation}
          scrollTop={this.state.targetOffsetTop}
          scrollIntoView={this.state.targetView}
          ref={this.getListRef}
        >
          <View
            className='at-indexes__content'
            id='at-indexes__top'
          >
            {this.props.children}
          </View>
          {
            list.map(listItem => (
              <View
                key={listItem.key}
                className='at-indexes__list'
              >
                <View
                  id={`at-indexes__list-${listItem.key}`}
                  className='at-indexes__list-title'
                >
                  {listItem.title}
                </View>
                <AtList>
                  {listItem.items && listItem.items.map(item => (
                    <AtListItem
                      key={item.name}
                      title={item.name}
                      onClick={this.handleClick.bind(this, item)}
                    />
                  ))}
                </AtList>
              </View>
            ))
          }
        </ScrollView>
      </View>
    )
  }
}
