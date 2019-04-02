import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtFloatButton from '../../../.temp/components/float-button/index'


const _createClientXY = (x, y) => ({ clientX: x, clientY: y })

const _createStartTouchEventObject = ({ x = 0, y = 0 }) => ({ touches: [_createClientXY(x, y)] })

const _createMoveTouchEventObject = ({ x = 0, y = 0 }) => ({ changedTouches: [_createClientXY(x, y)] })

describe('AtFloatButton Snap', () => {
  it('render AtFloatButton -- default props', () => {
    const component = renderToString(<AtFloatButton>按钮</AtFloatButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtFloatButton -- size 50', () => {
    const component = renderToString(<AtFloatButton size={50}>按钮</AtFloatButton>)
    expect(component).toMatchSnapshot()
  })
})

describe('AtFloatButton Event', () => {
  it('AtFloatButton onClick', () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(<AtFloatButton onClick={onClick}>按钮</AtFloatButton>)
    const componentDom = findDOMNode(component, 'at-floating-button')
    Simulate.click(componentDom)
    expect(onClick).toBeCalled()
  })

  it('AtFloatButton onTouchStart', () => {
    const component = renderIntoDocument(<AtFloatButton>按钮</AtFloatButton>)
    const componentDom = findDOMNode(component, 'at-floating-button')
    Simulate.touchStart(componentDom, _createStartTouchEventObject({ x: 100, y: 0 }))
    expect(component).toMatchSnapshot()
  })

  it('AtFloatButton onTouchEnd', () => {
    const component = renderIntoDocument(<AtFloatButton>按钮</AtFloatButton>)
    const componentDom = findDOMNode(component, 'at-floating-button')
    Simulate.touchEnd(componentDom, _createStartTouchEventObject({ x: 100, y: 0 }))
    expect(component).toMatchSnapshot()
  })


  it('AtFloatButton onTouchMove', () => {
    const component = renderIntoDocument(<AtFloatButton>按钮</AtFloatButton>)
    const componentDom = findDOMNode(component, 'at-floating-button')
    Simulate.touchMove(componentDom, _createMoveTouchEventObject({ x: 250, y: 200 }))
    expect(component).toMatchSnapshot()
  })
})
