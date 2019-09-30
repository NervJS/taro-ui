import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtCard from '../../../.temp/components/card/index'

describe('Card Snap', () => {
  it('render initial Card', () => {
    const component = renderToString(
      <AtCard title='这是个标题'>这也是内容区 可以随意定义功能</AtCard>
    )
    expect(component).toMatchSnapshot()
  })

  it('render Card -- props thumb', () => {
    const component = renderToString(
      <AtCard
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(component).toMatchSnapshot()
  })

  it('render Card -- props note', () => {
    const component = renderToString(
      <AtCard
        note='小Tips'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(component).toMatchSnapshot()
  })

  it('render Card -- props extra ', () => {
    const component = renderToString(
      <AtCard
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(component).toMatchSnapshot()
  })

  it('render Card -- props isFull ', () => {
    const component = renderToString(
      <AtCard
        isFull
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(component).toMatchSnapshot()
  })

  it('render Card -- props extraStyle ', () => {
    const component = renderToString(
      <AtCard
        isFull
        note='小Tips'
        extra='额外信息'
        title='这是个标题'
        thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
        extraStyle={{ fontSize: '12px', maxWidth: '200px' }}
      >
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Card Behavior ', () => {
  it('Card onClick', () => {
    const onClick = jest.fn()

    const component = renderIntoDocument(
      <AtCard title='这是个标题' onClick={onClick}>
        这也是内容区 可以随意定义功能
      </AtCard>
    )
    const componentDom = findDOMNode(component, 'at-card')

    Simulate.click(componentDom)
    expect(onClick).toBeCalled()
  })
})
