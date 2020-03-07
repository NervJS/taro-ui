/* eslint-disable react/no-find-dom-node */
import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtToast from '../../../.temp/components/toast'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const ICON = 'loading'
const TEXT = '测试数据Text'
const IMAGE = 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'

const STATUS_ERROR = 'error'
const STATUS_SUCCESS = 'success'
const STATUS_LOADING = 'loading'

describe('Toast Snap', () => {
  it('render initial Toast', () => {
    const component = renderToString(<AtToast />)
    expect(component).toMatchSnapshot()
  })

  it('render opened Toast', () => {
    const component = renderToString(<AtToast isOpened />)
    expect(component).toMatchSnapshot()
  })

  it('render opened Toast -- props text', () => {
    const component = renderToString(<AtToast isOpened text={TEXT} />)
    expect(component).toMatchSnapshot()
  })

  it('render opened Toast -- props icon', () => {
    const component = renderToString(<AtToast isOpened icon={ICON} />)
    expect(component).toMatchSnapshot()
  })

  it('render opened  Toast -- props image', () => {
    const component = renderToString(<AtToast isOpened image={IMAGE} />)
    expect(component).toMatchSnapshot()
  })

  it('render opened  Toast -- props hasMask', () => {
    const component = renderToString(<AtToast isOpened hasMask />)
    expect(component).toMatchSnapshot()
  })

  it('render opened Toast -- props status : success ', () => {
    const component = renderToString(
      <AtToast isOpened status={STATUS_SUCCESS} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render opened Toast -- props status : loading ', () => {
    const component = renderToString(
      <AtToast isOpened status={STATUS_LOADING} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render opened Toast -- props status : error ', () => {
    const component = renderToString(<AtToast isOpened status={STATUS_ERROR} />)
    expect(component).toMatchSnapshot()
  })
})

describe('Toast Behavior ', () => {
  it('Toast will close when is clicked && onClose will be called', async () => {
    const onClose = jest.fn()

    const component = renderIntoDocument(<AtToast isOpened onClose={onClose} />)
    const dom = findDOMNode(component, 'at-toast')
    const bodyDom = dom.querySelector('.toast-body')

    expect(component.state._isOpened).toBeTruthy()
    Simulate.click(bodyDom)

    process.nextTick(() => {
      expect(onClose).toBeCalled()
      expect(component.state._isOpened).toBeFalsy()
    })
  })

  it('Toast will close when time over --- default', async () => {
    const component = renderIntoDocument(<AtToast isOpened />)

    expect(component.state._isOpened).toBeTruthy()
    expect(component.props.duration).toEqual(3000)

    await delay(3000)

    process.nextTick(() => {
      expect(component.state._isOpened).toBeFalsy()
    })
  })

  it('Toast will close when time over ', async () => {
    const component = renderIntoDocument(<AtToast duration={1000} isOpened />)

    expect(component.state._isOpened).toBeTruthy()
    expect(component.props.duration).toEqual(1000)

    await delay(1000)

    process.nextTick(() => {
      expect(component.state._isOpened).toBeFalsy()
    })
  })

  it('Toast onClick will be called', async () => {
    const onClick = jest.fn()
    const component = renderIntoDocument(<AtToast onClick={onClick} isOpened />)
    const dom = findDOMNode(component, 'at-toast')
    const bodyDom = dom.querySelector('.toast-body')

    expect(component.state._isOpened).toBeTruthy()

    Simulate.click(bodyDom)

    expect(onClick).toBeCalled()
    process.nextTick(() => {
      expect(component.state._isOpened).toBeTruthy()
    })
  })
})
