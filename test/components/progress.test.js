import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtProgress from '../../.temp/components/activity-indicator/index'

describe('Progress Snap', () => {
  it('render initial Progress', () => {
    const component = renderToString(<AtProgress />)
    expect(component).toMatchSnapshot()
  })

  it('render Progress -- props percent', () => {
    const component = renderToString(<AtProgress percent={25} />)
    expect(component).toMatchSnapshot()
  })

  it('render Progress -- props isHidePercent', () => {
    const component = renderToString(<AtProgress isHidePercent />)
    expect(component).toMatchSnapshot()
  })

  it('render Progress -- props strokeWidth ', () => {
    const component = renderToString(<AtProgress strokeWidth={10} />)
    expect(component).toMatchSnapshot()
  })

  it('render Progress -- props color ', () => {
    const component = renderToString(<AtProgress color='#FF4949' />)
    expect(component).toMatchSnapshot()
  })

  it('render Progress -- props status(progress) ', () => {
    const component = renderToString(<AtProgress status='progress' />)
    expect(component).toMatchSnapshot()
  })

  it('render Progress -- props status(error) ', () => {
    const component = renderToString(<AtProgress status='error' />)
    expect(component).toMatchSnapshot()
  })

  it('render Progress -- props status(success) ', () => {
    const component = renderToString(<AtProgress status='success' />)
    expect(component).toMatchSnapshot()
  })
})
