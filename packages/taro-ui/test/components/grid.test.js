import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'
import AtGrid from '../../.temp/components/grid/index'

const IMAGE_DATA = [
  {
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
    value: '领取中心'
  },
  {
    image:
      'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
    value: '找折扣'
  },
  {
    image:
      'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
    value: '领会员'
  },
  {
    image:
      'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
    value: '新品首发'
  },
  {
    value: '支持Icon',
    iconInfo: {
      size: 30,
      color: 'red',
      value: 'bookmark'
    }
  }
]

const ICON_DATA = [
  {
    icon: 'bell',
    value: '领取中心'
  },
  {
    icon: 'bookmark',
    value: '找折扣'
  },
  {
    icon: 'calendar',
    value: '领会员'
  },
  {
    icon: 'bell',
    value: 'subtract'
  }
]

describe('Grid Snap', () => {
  it('render image Grid', () => {
    const component = renderToString(<AtGrid data={IMAGE_DATA} />)
    expect(component).toMatchSnapshot()
  })

  it('render no border of image Grid', () => {
    const component = renderToString(<AtGrid data={IMAGE_DATA} />)
    expect(component).toMatchSnapshot()
  })

  it('render rect image Grid', () => {
    const component = renderToString(<AtGrid mode='rect' data={IMAGE_DATA} />)
    expect(component).toMatchSnapshot()
  })

  it('render icon Grid', () => {
    const component = renderToString(<AtGrid data={ICON_DATA} />)
    expect(component).toMatchSnapshot()
  })

  it('render rect icon Grid', () => {
    const component = renderToString(<AtGrid mode='rect' data={ICON_DATA} />)
    expect(component).toMatchSnapshot()
  })

  it('render rect icon Grid -- props columnNum', () => {
    const component = renderToString(
      <AtGrid mode='rect' columnNum={4} data={ICON_DATA} />
    )
    expect(component).toMatchSnapshot()
  })
})

describe('Grid Behavior ', () => {
  it('Grid onClick', () => {
    const onClick = jest.fn()

    const component = renderIntoDocument(
      <AtGrid mode='rect' columnNum={4} data={ICON_DATA} onClick={onClick} />
    )
    const componentDom = findDOMNode(component, 'at-grid')
    const itemDom = componentDom.querySelector('.at-grid-item')

    Simulate.click(itemDom)
    expect(onClick).toBeCalled()
  })
})
