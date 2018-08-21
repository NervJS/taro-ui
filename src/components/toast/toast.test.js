/* eslint-disable react/no-find-dom-node */
import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtToast from '../../../.temp/components/toast/index'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const ICON = 'loading'
const TEXT = '测试数据Text'
const IMAGE = 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'

const STATUS_ERROR = 'error'
const STATUS_SUCCESS = 'success'
const STATUS_LOADING = 'loading'

describe('Toast Snap', () => {
  it('render initial Toast', () => {
    const componet = renderToString(<AtToast />)
    expect(componet).toMatchSnapshot()
  })

  it('render opened Toast', () => {
    const componet = renderToString(<AtToast isOpened />)
    expect(componet).toMatchSnapshot()
  })

  it('render opened Toast -- props text', () => {
    const componet = renderToString(<AtToast isOpened text={TEXT} />)
    expect(componet).toMatchSnapshot()
  })

  it('render opened Toast -- props icon', () => {
    const componet = renderToString(<AtToast isOpened icon={ICON} />)
    expect(componet).toMatchSnapshot()
  })

  it('render opened  Toast -- props image', () => {
    const componet = renderToString(<AtToast isOpened image={IMAGE} />)
    expect(componet).toMatchSnapshot()
  })

  it('render opened  Toast -- props hasMask', () => {
    const componet = renderToString(<AtToast isOpened hasMask />)
    expect(componet).toMatchSnapshot()
  })

  it('render opened Toast -- props status : success ', () => {
    const componet = renderToString(
      <AtToast isOpened status={STATUS_SUCCESS} />
    )
    expect(componet).toMatchSnapshot()
  })

  it('render opened Toast -- props status : loading ', () => {
    const componet = renderToString(
      <AtToast isOpened status={STATUS_LOADING} />
    )
    expect(componet).toMatchSnapshot()
  })

  it('render opened Toast -- props status : error ', () => {
    const componet = renderToString(<AtToast isOpened status={STATUS_ERROR} />)
    expect(componet).toMatchSnapshot()
  })
})

describe('Toast Behavior ', () => {
  it('click Toast', async () => {
    const componet = renderIntoDocument(<AtToast isOpened />)
    const dom = findDOMNode(componet, 'at-toast')
    const bodyDom = dom.querySelector('.toast-body')

    expect(componet.state.isOpened).toBeTruthy()
    Simulate.click(bodyDom)
    process.nextTick(() => {
      expect(componet.state.isOpened).toBeFalsy()
    })
  })

  it('Toast duration', async () => {
    const componet = renderIntoDocument(<AtToast duration={4000} isOpened />)

    expect(componet.state.isOpened).toBeTruthy()
    expect(componet.props.duration).toEqual(4000)

    await delay(4000)

    process.nextTick(() => {
      expect(componet.state.isOpened).toBeFalsy()
    })
  })
})
