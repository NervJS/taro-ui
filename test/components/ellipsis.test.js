import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtEllipsis from '../../.temp/components/ellipsis/index'

describe('AtDivider Snap', () => {
  it('render AtEllipsis -- props lines', () => {
    const component = renderToString(
      <AtEllipsis lines={2}>测试测试测试测试</AtEllipsis>
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtEllipsis -- props text', () => {
    const component = renderToString(
      <AtEllipsis text='测试测试测试测试测试' lines={2} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props expand', () => {
    const component = renderToString(
      <AtEllipsis text='测试测试测试测试测试' lines={2} expand />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtDivider -- props btnText', () => {
    const component = renderToString(
      <AtEllipsis
        text='测试测试测试测试测试'
        lines={2}
        expand
        btnText='查看全部'
      />
    )
    expect(component).toMatchSnapshot()
  })
})
