import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import { View } from '@tarojs/components'

import AtSwipeAction from '../../../.temp/components/swipe-action/index'

const OPTIONS = [
  {
    text: '取消',
    className: 'cancel',
    style: {
      backgroundColor: '#6190E8'
    }
  },
  {
    text: '确认',
    className: 'confirm',
    style: {
      backgroundColor: '#FF4949'
    }
  }
]

describe('SwipeAction Snap', () => {
  it('render options', () => {
    const component = renderToString(
      <AtSwipeAction
        className='swipe-action--test'
        disabled
        autoClose
        options={OPTIONS}
      >
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    expect(component).toMatchSnapshot()
  })
})

describe('SwipeAction Behavior ', () => {
  it('SwipeAction onClick', () => {
    const onClick = jest.fn()

    const component = renderIntoDocument(
      <AtSwipeAction options={OPTIONS} onClick={onClick}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    const componentDom = findDOMNode(component, 'at-swipe-action')

    const optionDom = componentDom.querySelector('.at-swipe-action__option')

    Simulate.click(optionDom)

    expect(onClick).toBeCalled()
  })
})
