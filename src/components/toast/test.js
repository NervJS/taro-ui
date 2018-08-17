import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
// import {
//   // Simulate,
//   findRenderedDOMComponentWithClass,
//   renderIntoDocument
// } from 'nerv-test-utils'

import AtToast from '../../../.temp/components/toast/index'

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const ICON = 'loading'
const TEXT = '测试数据Text'
const IMAGE = 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png'

const STATUS_ERROR = 'error'
const STATUS_SUCCESS = 'success'
const STATUS_LOADING = 'loading'

describe('Toast', () => {
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

  it('click Toast', async () => {
    // const onClick = jest.fn()
    // const componet = renderIntoDocument(<AtToast isOpened />)
    // const dom = findRenderedDOMComponentWithClass(componet, 'at-toast')
    // const bodyDom = dom.querySelector('.toast-body')

    // Simulate.click(bodyDom)
    // expect(componet.state.isOpened).toBeFalsy()
  })
})
