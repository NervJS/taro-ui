import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'
import AtButton from '../../.temp/components/button/index'

describe('AtButton Snap', () => {
  it('render AtButton -- props size(normal)', () => {
    const component = renderToString(<AtButton size='normal'>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtButton -- props size(small)', () => {
    const component = renderToString(<AtButton size='small'>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtButton -- props type(primary)', () => {
    const component = renderToString(<AtButton type='primary'>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtButton -- props type(secondary)', () => {
    const component = renderToString(<AtButton type='secondary'>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtButton -- props circle', () => {
    const component = renderToString(<AtButton circle>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtButton -- props full', () => {
    const component = renderToString(<AtButton full>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtButton -- props loading', () => {
    const component = renderToString(<AtButton loading>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })

  it('render AtButton -- props disabled', () => {
    const component = renderToString(<AtButton disabled>按钮</AtButton>)
    expect(component).toMatchSnapshot()
  })
})

describe('AtButton Event', () => {
  it('AtButton onClick', () => {
    const onClick = jest.fn()

    const component = renderIntoDocument(
      <AtButton onClick={onClick}>按钮</AtButton>
    )
    const componentDom = findDOMNode(component, 'at-button')

    Simulate.click(componentDom)
    expect(onClick).toBeCalled()
  })

  it('AtButton disabled, onClick not to be called', () => {
    const onClick = jest.fn()

    const component = renderIntoDocument(
      <AtButton disabled onClick={onClick}>
        按钮
      </AtButton>
    )
    const componentDom = findDOMNode(component, 'at-button')

    Simulate.click(componentDom)
    expect(onClick).not.toBeCalled()
  })
})
