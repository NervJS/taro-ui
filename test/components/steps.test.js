import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtSteps from '../../.temp/components/steps/index'

describe('AtSteps Snap', () => {
  const items1 = [
    {
      title: '步骤一',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'sound',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14'
      }
    },
    {
      title: '步骤二',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'shopping-cart',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14'
      }
    },
    {
      title: '步骤三',
      desc: '这里是额外的信息，最多两行',
      icon: {
        value: 'camera',
        activeColor: '#fff',
        inactiveColor: '#78A4FA',
        size: '14'
      }
    }
  ]

  const items2 = [
    {
      title: '步骤一',
      desc: '这里是额外的信息，最多两行',
      success: true
    },
    {
      title: '步骤二',
      desc: '这里是额外的信息，最多两行'
    },
    {
      title: '步骤三',
      desc: '这里是额外的信息，最多两行',
      error: true
    }
  ]

  it('render initial AtSteps', () => {
    const componet = renderToString(<AtSteps />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSteps -- props customStyle', () => {
    const componet = renderToString(<AtSteps customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSteps -- props className', () => {
    const componet = renderToString(<AtSteps className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtSteps -- props items', () => {
    const componet1 = renderToString(<AtSteps items={items1} />)
    expect(componet1).toMatchSnapshot()
    const componet2 = renderToString(<AtSteps items={items2} />)
    expect(componet2).toMatchSnapshot()
  })

  it('render AtSteps -- props current', () => {
    const componet1 = renderToString(<AtSteps items={items1} current={1} />)
    expect(componet1).toMatchSnapshot()
  })
})
