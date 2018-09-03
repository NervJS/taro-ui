import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtActivityIndicator from '../../../.temp/components/activity-indicator/index'

describe('ActivityIndicator Snap', () => {
  it('render initial ActivityIndicator', () => {
    const componet = renderToString(<AtActivityIndicator />)
    expect(componet).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props size', () => {
    const componet = renderToString(<AtActivityIndicator size={32} />)
    expect(componet).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props color', () => {
    const componet = renderToString(<AtActivityIndicator color='#13CE66' />)
    expect(componet).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props content ', () => {
    const componet = renderToString(<AtActivityIndicator content='加载中...' />)
    expect(componet).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props mode ', () => {
    const componet = renderToString(<AtActivityIndicator mode='center' />)
    expect(componet).toMatchSnapshot()
  })
})
