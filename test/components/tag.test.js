import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'
import AtTag from '../../.temp/components/tag/index'

describe('AtTag Snap', () => {
  it('render AtNoticebar -- props size', () => {
    const component = renderToString(<AtTag size='small'>标签</AtTag>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props type', () => {
    const component = renderToString(<AtTag type='primary'>标签</AtTag>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props name', () => {
    const component = renderToString(<AtTag name='tag-01'>标签</AtTag>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props circle', () => {
    const component = renderToString(<AtTag circle>标签</AtTag>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props active', () => {
    const component = renderToString(<AtTag active>标签</AtTag>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props disabled', () => {
    const component = renderToString(<AtTag disabled>标签</AtTag>)
    expect(component).toMatchSnapshot()
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
    const component = renderIntoDocument(
      <AtTag onClick={onClick} disabled>
        标签
      </AtTag>
    )
    const dom = findDOMNode(component, 'at-tag')
    Simulate.click(dom)
    expect(onClick).not.toBeCalled()
  })

  it('AtTag onClick params {name, active}', () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(
      <AtTag onClick={onClick} name='tag-01'>
        标签
      </AtTag>
    )
    const dom = findDOMNode(component, 'at-tag')
    Simulate.click(dom)
    expect(onClick.mock.calls[0][0].name).toEqual('tag-01')
    expect(onClick.mock.calls[0][0].active).toBeFalsy()
  })
})
