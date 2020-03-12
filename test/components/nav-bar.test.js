import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import { Text } from '@tarojs/components'
import AtNavBar from '../../.temp/components/nav-bar/index'

describe('AtNavBar Snap', () => {
  it('render initial AtNavBar', () => {
    const component = renderToString(<AtNavBar />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props className', () => {
    const component = renderToString(<AtNavBar className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props customStyle', () => {
    const component = renderToString(<AtNavBar customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props fixed', () => {
    const component = renderToString(<AtNavBar fixed />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props color', () => {
    const component = renderToString(<AtNavBar color='#fff' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftIconType', () => {
    const component = renderToString(<AtNavBar leftIconType='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftIconType', () => {
    const component = renderToString(
      <AtNavBar leftIconType={{ value: 'test', color: 'red', size: 36 }} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftText', () => {
    const component = renderToString(<AtNavBar leftText='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props title', () => {
    const component = renderToString(<AtNavBar title='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props title', () => {
    const component = renderToString(
      <AtNavBar>
        <Text>test</Text>
      </AtNavBar>
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props leftText', () => {
    const component = renderToString(<AtNavBar leftText='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightFirstIconType', () => {
    const component = renderToString(<AtNavBar rightFirstIconType='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightFirstIconType', () => {
    const component = renderToString(
      <AtNavBar
        rightFirstIconType={{ value: 'test', color: 'red', size: 36 }}
      />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightSecondIconType', () => {
    const component = renderToString(<AtNavBar rightSecondIconType='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtNavBar -- props rightSecondIconType', () => {
    const component = renderToString(
      <AtNavBar
        rightSecondIconType={{ value: 'test', color: 'red', size: 36 }}
      />
    )
    expect(component).toMatchSnapshot()
  })
})
