import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtIndexes from '../../.temp/components/indexes/index'

describe('AtIndexes Snap', () => {
  it('render initial AtIndexes', () => {
    const component = renderToString(<AtIndexes />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIndexes -- props className', () => {
    const component = renderToString(<AtIndexes className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIndexes -- props customStyle', () => {
    const component = renderToString(<AtIndexes customStyle='color:red;' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIndexes -- props animation', () => {
    const component = renderToString(<AtIndexes animation />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIndexes -- props topKey', () => {
    const component = renderToString(<AtIndexes topKey='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtIndexes -- props children', () => {
    const component = renderToString(<AtIndexes>children</AtIndexes>)
    expect(component).toMatchSnapshot()
  })

  it('render AtIndexes -- props list', () => {
    const list = [
      {
        title: 'A',
        key: 'A',
        items: [
          {
            name: '阿坝'
          },
          {
            name: '阿里'
          },
          {
            name: '阿拉善'
          },
          {
            name: '阿拉善'
          },
          {
            name: '阿拉善'
          },
          {
            name: '阿拉善'
          },
          {
            name: '阿拉善'
          }
        ]
      },
      {
        title: 'B',
        key: 'B',
        items: [
          {
            name: '百度'
          },
          {
            name: '白色'
          },
          {
            name: '百强'
          }
        ]
      }
    ]
    const component = renderToString(<AtIndexes list={list} />)
    expect(component).toMatchSnapshot()
  })
})
