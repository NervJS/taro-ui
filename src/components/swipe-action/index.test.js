import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { renderIntoDocument } from 'nerv-test-utils'
import simulant from 'simulant'

import { View } from '@tarojs/components'

import AtSwipeAction from '../../../.temp/components/swipe-action/index'

const MAX_OFFSET_SIZE = 101

const Simulate = {}
const EVENTS = [
  'keyDown',
  'keyPress',
  'keyUp',
  'focus',
  'blur',
  'click',
  'contextMenu',
  'doubleClick',
  'drag',
  'dragEnd',
  'dragEnter',
  'dragExit',
  'dragLeave',
  'dragOver',
  'dragStart',
  'drop',
  'mouseDown',
  'mouseEnter',
  'mouseLeave',
  'mouseMove',
  'mouseOut',
  'mouseOver',
  'mouseUp',
  'change',
  'input',
  'submit',
  'touchCancel',
  'touchEnd',
  'touchMove',
  'touchStart',
  'load',
  'error',
  'animationStart',
  'animationEnd',
  'animationIteration',
  'transitionEnd'
]
EVENTS.forEach(event => {
  Simulate[event] = (node, mock) =>
    simulant.fire(node, event.toLowerCase(), mock)
})

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

describe('SwipeAction Swipe Behavior', () => {
  const onClick = jest.fn()
  const onClosed = jest.fn()
  const onOpened = jest.fn()

  const component = renderIntoDocument(
    <AtSwipeAction
      options={OPTIONS}
      onClick={onClick}
      onClosed={onClosed}
      onOpened={onOpened}
    >
      <View className='normal'>AtSwipeAction 一般使用场景</View>
    </AtSwipeAction>
  )
  const componentDom = findDOMNode(component, 'at-swipe-action')
  component.maxOffsetSize = MAX_OFFSET_SIZE

  beforeEach(() => {
    onClick.mockReset()
    onClosed.mockReset()
    onOpened.mockReset()
    component._reset()
  })

  it('SwipeAction onClick', () => {
    const optionDom = componentDom.querySelector('.at-swipe-action__option')

    Simulate.click(optionDom)

    expect(onClick).toBeCalled()
  })

  it('SwipeAction Swipe Right', () => {
    // 一开始向右滑动是没有效果的
    expect(component.isTouching).toBeFalsy()
    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })
    expect(component.isTouching).toBeTruthy()

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: 100 }]
    })

    component.forceUpdate()
    expect(component.state.offsetSize).toEqual(0)

    Simulate.touchEnd(componentDom)
    expect(onClosed).not.toBeCalled()
    expect(onOpened).not.toBeCalled()
    expect(component.state.isOpened).toBeFalsy()
    expect(component.state.offsetSize).toEqual(0)
  })

  it('SwipeAction Swipe Left', () => {
    // 一开始向左滑动 直到最大时将停止
    expect(component.isTouching).toBeFalsy()
    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })
    expect(component.isTouching).toBeTruthy()

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: -110 }]
    })

    component.forceUpdate()
    expect(component.state.offsetSize).toEqual(-110)

    Simulate.touchEnd(componentDom)
    component.forceUpdate()

    expect(onOpened).toBeCalled()
    expect(onClosed).not.toBeCalled()
    expect(component.state.isOpened).toBeTruthy()
    expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)
  })

  it('SwipeAction Completed Swipe Action', () => {
    // 开始向左滑懂
    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: -100 }]
    })

    component.forceUpdate()
    expect(component.state.offsetSize).toEqual(-100)

    // 向左滑动结束
    Simulate.touchEnd(componentDom)
    component.forceUpdate()

    expect(onOpened).toBeCalled()
    expect(component.state.isOpened).toBeTruthy()
    expect(component.endValue).toEqual(-MAX_OFFSET_SIZE)
    expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)

    // 开始向右滑动
    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: 100 }]
    })

    component.forceUpdate()
    expect(component.state.offsetSize).toEqual(-1)

    // 向右滑动结束
    Simulate.touchEnd(componentDom)
    component.forceUpdate()
    expect(onClosed).toBeCalled()
    expect(component.endValue).toEqual(0)
    expect(component.state.isOpened).toBeFalsy()
    expect(component.state.offsetSize).toEqual(0)
  })
})

describe('SwipeAction Props', () => {
  it('SwipeAction Disabled', () => {
    const component = renderIntoDocument(
      <AtSwipeAction disabled options={OPTIONS}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    const componentDom = findDOMNode(component, 'at-swipe-action')
    component.maxOffsetSize = MAX_OFFSET_SIZE

    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: -110 }]
    })
    component.forceUpdate()
    expect(component.state.offsetSize).toEqual(0)
  })

  it('SwipeAction Disabled', () => {
    const component = renderIntoDocument(
      <AtSwipeAction disabled options={OPTIONS}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    const componentDom = findDOMNode(component, 'at-swipe-action')
    component.maxOffsetSize = MAX_OFFSET_SIZE

    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: -110 }]
    })
    component.forceUpdate()
    expect(component.state.offsetSize).toEqual(0)
  })

  it('SwipeAction AutoClose', () => {
    const component = renderIntoDocument(
      <AtSwipeAction autoClose options={OPTIONS}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    const componentDom = findDOMNode(component, 'at-swipe-action')
    const swipeActionButtonDom = componentDom.querySelector(
      '.at-swipe-action__option'
    )
    component.maxOffsetSize = MAX_OFFSET_SIZE

    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })
    component.forceUpdate()

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: -110 }]
    })
    component.forceUpdate()

    Simulate.touchEnd(componentDom)
    component.forceUpdate()

    expect(component.state.isOpened).toBeTruthy()
    expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)

    Simulate.click(swipeActionButtonDom)
    component.forceUpdate()

    expect(component.endValue).toEqual(0)
    expect(component.isTouching).toBeFalsy()
    expect(component.state.isOpened).toBeFalsy()
    expect(component.state.offsetSize).toEqual(0)
  })

  it('SwipeAction IsClose', () => {
    const component = renderIntoDocument(
      <AtSwipeAction autoClose options={OPTIONS}>
        <View className='normal'>AtSwipeAction 一般使用场景</View>
      </AtSwipeAction>
    )
    const componentDom = findDOMNode(component, 'at-swipe-action')
    component.maxOffsetSize = MAX_OFFSET_SIZE

    Simulate.touchStart(componentDom, {
      touches: [{ clientX: 0 }]
    })
    component.forceUpdate()

    Simulate.touchMove(componentDom, {
      touches: [{ clientX: -110 }]
    })
    component.forceUpdate()

    Simulate.touchEnd(componentDom)
    component.forceUpdate()

    expect(component.state.isOpened).toBeTruthy()
    expect(component.state.offsetSize).toEqual(-MAX_OFFSET_SIZE)

    const spy = jest
      .spyOn(component, 'componentWillReceiveProps')
      .bind(component)
    spy({ isClose: true })

    component.forceUpdate()

    expect(component.state.isOpened).toBeFalsy()
  })
})
