import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtAvatar from '../../../.temp/components/avatar/index'

describe('Avatar Snap', () => {
  it('render Avatar -- props size(large) ', () => {
    const componet = renderToString(<AtAvatar size='large' />)
    expect(componet).toMatchSnapshot()
  })

  it('render Avatar -- props size(normal) ', () => {
    const componet = renderToString(<AtAvatar size='normal' />)
    expect(componet).toMatchSnapshot()
  })

  it('render Avatar -- props size(small) ', () => {
    const componet = renderToString(<AtAvatar size='small' />)
    expect(componet).toMatchSnapshot()
  })

  it('render Avatar -- props circle', () => {
    const componet = renderToString(<AtAvatar circle />)
    expect(componet).toMatchSnapshot()
  })

  it('render Avatar -- props image', () => {
    const componet = renderToString(<AtAvatar image='https://jdc.jd.com/img/100' />)
    expect(componet).toMatchSnapshot()
  })

  it('render Avatar -- props text', () => {
    const componet = renderToString(<AtAvatar text='凹凸实验室' />)
    expect(componet).toMatchSnapshot()
  })
})
