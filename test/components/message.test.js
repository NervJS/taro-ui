import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtMessage from '../../.temp/components/message/index'

describe('AtMessage Snap', () => {
  it('render initial AtMessage', () => {
    const component = renderToString(<AtMessage />)
    expect(component).toMatchSnapshot()
  })

  it('render AtMessage -- props className', () => {
    const component = renderToString(<AtMessage className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtMessage -- props customStyle', () => {
    const component = renderToString(<AtMessage customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })
})
