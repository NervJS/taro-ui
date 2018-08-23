import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtProgress from '../../../.temp/components/activity-indicator/index'

describe('Progress Snap', () => {
  it('render initial Progress', () => {
    const componet = renderToString(<AtProgress />)
    expect(componet).toMatchSnapshot()
  })

  it('render Progress -- props percent', () => {
    const componet = renderToString(<AtProgress percent={25} />)
    expect(componet).toMatchSnapshot()
  })

  it('render Progress -- props isHidePercent', () => {
    const componet = renderToString(<AtProgress isHidePercent />)
    expect(componet).toMatchSnapshot()
  })

  it('render Progress -- props strokeWidth ', () => {
    const componet = renderToString(<AtProgress strokeWidth={10} />)
    expect(componet).toMatchSnapshot()
  })

  it('render Progress -- props color ', () => {
    const componet = renderToString(<AtProgress color='#FF4949' />)
    expect(componet).toMatchSnapshot()
  })

  it('render Progress -- props status(progress) ', () => {
    const componet = renderToString(<AtProgress status='progress' />)
    expect(componet).toMatchSnapshot()
  })

  it('render Progress -- props status(error) ', () => {
    const componet = renderToString(<AtProgress status='error' />)
    expect(componet).toMatchSnapshot()
  })

  it('render Progress -- props status(success) ', () => {
    const componet = renderToString(<AtProgress status='success' />)
    expect(componet).toMatchSnapshot()
  })
})
