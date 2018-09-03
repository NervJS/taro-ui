import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtTag from '../../../.temp/components/tag/index'

describe('AtTag Snap', () => {
  it('render AtNoticebar -- props size', () => {
    const componet = renderToString(<AtTag size='small'>标签</AtTag>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props type', () => {
    const componet = renderToString(<AtTag type='primary'>标签</AtTag>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props name', () => {
    const componet = renderToString(<AtTag name='tag-01'>标签</AtTag>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props circle', () => {
    const componet = renderToString(<AtTag circle>标签</AtTag>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props active', () => {
    const componet = renderToString(<AtTag active>标签</AtTag>)
    expect(componet).toMatchSnapshot()
  })

  it('render AtNoticebar -- props disabled', () => {
    const componet = renderToString(<AtTag disabled>标签</AtTag>)
    expect(componet).toMatchSnapshot()
  })
})

describe('AtTag Event', () => {
  it('AtTag onClick', () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(<AtTag onClick={onClick}>标签</AtTag>)
    const dom = findDOMNode(component, 'at-tag')
    Simulate.click(dom)
    expect(onClick).toBeCalled()
  })

  it('AtTag onClick not to be called(disabled)', () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(<AtTag onClick={onClick} disabled>标签</AtTag>)
    const dom = findDOMNode(component, 'at-tag')
    Simulate.click(dom)
    expect(onClick).not.toBeCalled()
  })

  it('AtTag onClick params {name, active}', () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(<AtTag onClick={onClick} name='tag-01'>标签</AtTag>)
    const dom = findDOMNode(component, 'at-tag')
    Simulate.click(dom)
    expect(onClick.mock.calls[0][0].name).toEqual('tag-01')
    expect(onClick.mock.calls[0][0].active).toBeTruthy()
  })
})

