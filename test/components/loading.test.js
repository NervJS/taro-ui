import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtLoading from '../../.temp/components/loading/index'

describe('AtLoading Snap', () => {
  it('render initial AtLoading', () => {
    const component = renderToString(<AtLoading />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoading -- props size', () => {
    const component = renderToString(<AtLoading size={15} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoading -- props color', () => {
    const component = renderToString(<AtLoading color='#fff' />)
    expect(component).toMatchSnapshot()
  })
})
