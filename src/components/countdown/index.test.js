import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtCountdown from '../../../.temp/components/countdown/index'

describe('AtCountdown Snap', () => {
  it('render initial AtCountdown', () => {
    const component = renderToString(<AtCountdown />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props className', () => {
    const component = renderToString(<AtCountdown className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props className', () => {
    const component = renderToString(<AtCountdown customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props isCard', () => {
    const component = renderToString(<AtCountdown isCard />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props format', () => {
    const component = renderToString(<AtCountdown format={{ hours: ':', minutes: ':', seconds: '' }} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props day', () => {
    const component = renderToString(<AtCountdown day={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props hours', () => {
    const component = renderToString(<AtCountdown hours={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props format', () => {
    const component = renderToString(<AtCountdown minutes={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props seconds', () => {
    const component = renderToString(<AtCountdown seconds={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountdown -- props isShowDay', () => {
    const component = renderToString(<AtCountdown isShowDay />)
    expect(component).toMatchSnapshot()
  })
})
