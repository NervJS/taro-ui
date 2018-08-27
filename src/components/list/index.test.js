import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtList from '../../../.temp/components/list/index'
import AtListItem from '../../../.temp/components/list/item/index'

describe('List Snap', () => {
  it('render completed List', () => {
    const componet = renderToString(
      <AtList>
        <AtListItem title='标题文字' />
        <AtListItem title='标题文字' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' />
        <AtListItem title='标题文字' note='描述信息' arrow='right' />
        <AtListItem title='标题文字' extraText='详细信息' arrow='right' />
        <AtListItem
          arrow='right'
          note='描述信息'
          title='标题文字标题文字标题文字标题文字标题文字'
          extraText='详细信息详细信息详细信息详细信息'
        />
        <AtListItem
          title='标题文字'
          note='描述信息'
          extraText='详细信息'
          arrow='right'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <AtListItem title='标题文字' isSwitch />
      </AtList>
    )
    expect(componet).toMatchSnapshot()
  })

  it('render completed List -- no border', () => {
    const componet = renderToString(
      <AtList hasBorder={false}>
        <AtListItem title='标题文字' hasBorder={false} />
        <AtListItem title='标题文字' hasBorder={false} />
      </AtList>
    )
    expect(componet).toMatchSnapshot()
  })
})

describe('List Behavior ', () => {
  it('ListItem onClick', () => {
    const onClick = jest.fn()

    const component = renderIntoDocument(
      <AtList>
        <AtListItem title='标题文字' onClick={onClick} />
      </AtList>
    )
    const componentDom = findDOMNode(component, 'at-list')
    const itemDom = componentDom.querySelector('.at-list__item')

    Simulate.click(itemDom)
    expect(onClick).toBeCalled()
  })

  it('ListItem onSwitchChange', () => {
    const onChange = jest.fn()

    const component = renderIntoDocument(
      <AtList>
        <AtListItem title='标题文字' isSwitch onSwitchChange={onChange} />
      </AtList>
    )

    const componentDom = findDOMNode(component, 'at-list')
    const itemSwitchDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch'
    ).children[0]

    Simulate.click(itemSwitchDom)
    expect(onChange).toBeCalled()
  })
})
