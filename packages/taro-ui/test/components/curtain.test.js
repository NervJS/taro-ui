import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtCurtain from '../../.temp/components/curtain/index'

describe('AtCurtain Snap', () => {
  it('render initial AtCurtain', () => {
    const component = renderToString(<AtCurtain />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCurtain -- props className', () => {
    const component = renderToString(<AtCurtain className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCurtain -- props customStyle', () => {
    const component = renderToString(<AtCurtain customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtCurtain -- props isOpened', () => {
    const component0 = renderToString(<AtCurtain isOpened> test </AtCurtain>)
    expect(component0).toMatchSnapshot()
    const component1 = renderToString(
      <AtCurtain isOpened={false}> test </AtCurtain>
    )
    expect(component1).toMatchSnapshot()
  })

  it('render AtCurtain -- props closeBtnPosition', () => {
    const component0 = renderToString(
      <AtCurtain closeBtnPosition='top'> test </AtCurtain>
    )
    expect(component0).toMatchSnapshot()
    const component1 = renderToString(
      <AtCurtain closeBtnPosition='bottoms'> test </AtCurtain>
    )
    expect(component1).toMatchSnapshot()
  })
})
