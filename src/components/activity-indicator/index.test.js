import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtActivityIndicator from '../../../.temp/components/activity-indicator/index'

describe('ActivityIndicator Snap', () => {
  it('render initial ActivityIndicator', () => {
    const component = renderToString(<AtActivityIndicator />)
    expect(component).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props size', () => {
    const component = renderToString(<AtActivityIndicator size={32} />)
    expect(component).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props color', () => {
    const component = renderToString(<AtActivityIndicator color='#13CE66' />)
    expect(component).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props content ', () => {
    const component = renderToString(<AtActivityIndicator content='加载中...' />)
    expect(component).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props mode ', () => {
    const component = renderToString(<AtActivityIndicator mode='center' />)
    expect(component).toMatchSnapshot()
  })

  it('render ActivityIndicator -- props isOpened ', () => {
    const component = renderToString(<AtActivityIndicator isOpened />)
    expect(component).toMatchSnapshot()
  })
})
