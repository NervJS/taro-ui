import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'
import AtFloatLayout from '../../.temp/components/float-layout/index'

describe('FloatLayout Snap', () => {
  it('render initial FloatLayout', () => {
    const component = renderToString(
      <AtFloatLayout>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    expect(component).toMatchSnapshot()
  })

  it('render opened FloatLayout', () => {
    const component = renderToString(
      <AtFloatLayout isOpened>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    expect(component).toMatchSnapshot()
  })

  it('render FloatLayout -- props note', () => {
    const component = renderToString(
      <AtFloatLayout isOpened title='这是个标题'>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    expect(component).toMatchSnapshot()
  })
})

describe('FloatLayout Behavior ', () => {
  it('FloatLayout onClose', () => {
    const onClose = jest.fn()

    const component = renderIntoDocument(
      <AtFloatLayout isOpened title='这是个标题' onClose={onClose}>
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </AtFloatLayout>
    )
    const componentDom = findDOMNode(component, 'at-float-layout')
    const overlayDom = componentDom.querySelector('.at-float-layout__overlay')

    Simulate.click(overlayDom)
    process.nextTick(() => {
      expect(onClose).toBeCalled()
    })
  })
})
