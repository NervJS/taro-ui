import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtAvatar from '../../.temp/components/avatar/index'

describe('Avatar Snap', () => {
  it('render Avatar -- props size(large) ', () => {
    const component = renderToString(<AtAvatar size='large' />)
    expect(component).toMatchSnapshot()
  })

  it('render Avatar -- props size(normal) ', () => {
    const component = renderToString(<AtAvatar size='normal' />)
    expect(component).toMatchSnapshot()
  })

  it('render Avatar -- props size(small) ', () => {
    const component = renderToString(<AtAvatar size='small' />)
    expect(component).toMatchSnapshot()
  })

  it('render Avatar -- props circle', () => {
    const component = renderToString(<AtAvatar circle />)
    expect(component).toMatchSnapshot()
  })

  it('render Avatar -- props image', () => {
    const component = renderToString(
      <AtAvatar image='https://jdc.jd.com/img/100' />
    )
    expect(component).toMatchSnapshot()
  })

  it('render Avatar -- props text', () => {
    const component = renderToString(<AtAvatar text='凹凸实验室' />)
    expect(component).toMatchSnapshot()
  })
})
