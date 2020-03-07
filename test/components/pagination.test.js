import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtPagination from '../../../.temp/components/pagination/index'

describe('AtPagination Snap', () => {
  it('render AtPagination -- props current', () => {
    const component = renderToString(<AtPagination current={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtPagination -- props total', () => {
    const component = renderToString(<AtPagination total={100} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtPagination -- props pageSize', () => {
    const component = renderToString(<AtPagination pageSize={40} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtPagination -- props icon', () => {
    const component = renderToString(<AtPagination icon />)
    expect(component).toMatchSnapshot()
  })
})

describe('AtPagination Event', () => {
  it('AtPagination onPageChange - prev', () => {
    const onPageChange = jest.fn()
    const component = renderIntoDocument(<AtPagination total={100} current={2} onPageChange={onPageChange} />)
    const doms = findDOMNode(component, 'at-pagination').querySelectorAll('.at-button')
    const prev = doms[0]
    Simulate.click(prev)
    expect(onPageChange).toBeCalled()
    process.nextTick(() => {
      expect(component.state.currentPage).toEqual(1)
    })
  })

  it('AtPagination onPageChange - next', () => {
    const onPageChange = jest.fn()
    const component = renderIntoDocument(<AtPagination total={100} current={2} onPageChange={onPageChange} />)
    const doms = findDOMNode(component, 'at-pagination').querySelectorAll('.at-button')
    const next = doms[1]
    Simulate.click(next)
    expect(onPageChange).toBeCalled()
    process.nextTick(() => {
      expect(component.state.currentPage).toEqual(3)
    })
  })

  it('AtPagination onPageChange not to be called(disabled prev or next)', () => {
    const onPageChange = jest.fn()
    const component = renderIntoDocument(<AtPagination total={20} onPageChange={onPageChange} />)
    const doms = findDOMNode(component, 'at-pagination').querySelectorAll('.at-button')
    const prev = doms[0]
    const next = doms[1]
    Simulate.click(prev)
    Simulate.click(next)
    expect(onPageChange).not.toBeCalled()
  })

  it('AtPagination onPageChange params {type, current} - prev', () => {
    const onPageChange = jest.fn()
    const component = renderIntoDocument(<AtPagination total={100} current={2} onPageChange={onPageChange} />)
    const doms = findDOMNode(component, 'at-pagination').querySelectorAll('.at-button')
    const prev = doms[0]
    Simulate.click(prev)
    expect(onPageChange.mock.calls[0][0].type).toEqual('prev')
    expect(onPageChange.mock.calls[0][0].current).toEqual(1)
  })

  it('AtPagination onPageChange params {type, current} - next', () => {
    const onPageChange = jest.fn()
    const component = renderIntoDocument(<AtPagination total={100} onPageChange={onPageChange} />)
    const doms = findDOMNode(component, 'at-pagination').querySelectorAll('.at-button')
    const next = doms[1]
    Simulate.click(next)
    expect(onPageChange.mock.calls[0][0].type).toEqual('next')
    expect(onPageChange.mock.calls[0][0].current).toEqual(2)
  })
})

