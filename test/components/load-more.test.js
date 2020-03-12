import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtLoadMore from '../../.temp/components/load-more/index'

describe('AtLoadMore Snap', () => {
  it('render initial AtLoadMore', () => {
    const component = renderToString(<AtLoadMore />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props customStyle', () => {
    const component = renderToString(<AtLoadMore customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props className', () => {
    const component = renderToString(<AtLoadMore className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === more', () => {
    const component = renderToString(<AtLoadMore status='more' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === loading', () => {
    const component = renderToString(<AtLoadMore status='loading' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props status === noMore', () => {
    const component = renderToString(<AtLoadMore status='noMore' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props moreText ', () => {
    const component = renderToString(
      <AtLoadMore moreText='moreText' status='more' />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props loadingText ', () => {
    const component = renderToString(
      <AtLoadMore loadingText='loadingText' status='loading' />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props noMoreText ', () => {
    const component = renderToString(
      <AtLoadMore noMoreText='noMoreText' status='noMore' />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props noMoreTextStyle', () => {
    const component = renderToString(<AtLoadMore noMoreTextStyle='color:red' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtLoadMore -- props moreBtnStyle', () => {
    const component = renderToString(<AtLoadMore moreBtnStyle='color:red' />)
    expect(component).toMatchSnapshot()
  })
})
