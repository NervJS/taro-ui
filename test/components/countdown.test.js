import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtCountDown from '../../.temp/components/countdown/index'

describe('AtCountDown Snap', () => {
  it('render initial AtCountDown', () => {
    const component = renderToString(<AtCountDown />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props className', () => {
    const component = renderToString(<AtCountDown className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props className', () => {
    const component = renderToString(<AtCountDown customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props isCard', () => {
    const component = renderToString(<AtCountDown isCard />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props format', () => {
    const component = renderToString(
      <AtCountDown format={{ hours: ':', minutes: ':', seconds: '' }} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props day', () => {
    const component = renderToString(<AtCountDown day={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props hours', () => {
    const component = renderToString(<AtCountDown hours={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props format', () => {
    const component = renderToString(<AtCountDown minutes={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props seconds', () => {
    const component = renderToString(<AtCountDown seconds={1} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- props isShowDay', () => {
    const component = renderToString(<AtCountDown isShowDay />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- hours > 24 and show day', () => {
    const component = renderToString(<AtCountDown isShowDay hours={25} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCountDown -- hours > 24 and not show day', () => {
    const component = renderToString(
      <AtCountDown isShowDay={false} hours={25} />
    )
    expect(component).toMatchSnapshot()
  })
})
