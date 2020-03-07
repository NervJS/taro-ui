import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import AtList from '../../../.temp/components/list/index'
import AtListItem from '../../../.temp/components/list/item/index'

describe('List Snap', () => {
  it('render completed List', () => {
    const component = renderToString(
      <AtList>
        <AtListItem title='标题文字' />
        <AtListItem title='标题文字' arrow='right' />
        <AtListItem title='标题文字' note='描述信息' />
        <AtListItem title='禁用状态' disabled extraText='详细信息' />
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
        <AtListItem
          arrow='right'
          note='描述信息'
          iconInfo={{
            size: 25,
            color: '#78A4FA',
            value: 'calendar'
          }}
          title='标题文字'
          extraText='详细信息'
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
        <AtListItem title='标题文字' isSwitch />
        <AtListItem title='标题文字' isSwitch disabled />
        <AtListItem title='标题文字' switchIsCheck isSwitch />
        <AtListItem title='标题文字' switchIsCheck isSwitch disabled />
      </AtList>
    )
    expect(component).toMatchSnapshot()
  })

  it('render completed List -- no border', () => {
    const component = renderToString(
      <AtList hasBorder={false}>
        <AtListItem title='标题文字' hasBorder={false} />
        <AtListItem title='标题文字' hasBorder={false} />
      </AtList>
    )
    expect(component).toMatchSnapshot()
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

  it('ListItem onSwitchChange && onClick', () => {
    const onClick = jest.fn()
    const onChange = jest.fn()

    const component = renderIntoDocument(
      <AtList>
        <AtListItem
          title='标题文字'
          isSwitch
          onClick={onClick}
          onSwitchChange={onChange}
        />
      </AtList>
    )

    const componentDom = findDOMNode(component, 'at-list')
    const itemDom = componentDom.querySelector('.at-list__item').children[0]
    const itemSwitchDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch'
    ).children[0]

    itemSwitchDom.value = true

    Simulate.change(itemSwitchDom)
    expect(onChange).toBeCalled()
    expect(onClick).not.toBeCalled()

    onClick.mockReset()
    onChange.mockReset()

    Simulate.click(itemDom)
    expect(onClick).toBeCalled()
    expect(onChange).not.toBeCalled()
  })

  it('ListItem disabled onSwitchChange && onClick', () => {
    const onClick = jest.fn()
    const onChange = jest.fn()

    const component = renderIntoDocument(
      <AtList>
        <AtListItem
          isSwitch
          disabled
          title='标题文字'
          onClick={onClick}
          onSwitchChange={onChange}
        />
      </AtList>
    )

    const componentDom = findDOMNode(component, 'at-list')
    const itemDom = componentDom.querySelector('.at-list__item').children[0]
    const itemSwitchDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch'
    ).children[0]

    itemSwitchDom.value = true

    Simulate.change(itemSwitchDom)
    expect(onChange).not.toBeCalled()

    onClick.mockReset()
    onChange.mockReset()

    Simulate.click(itemDom)
    expect(onClick).not.toBeCalled()
  })

  it('ListItem switch was checked', () => {
    const checkedComponent = renderIntoDocument(
      <AtList>
        <AtListItem isSwitch switchIsCheck title='标题文字' />
      </AtList>
    )

    const componentDom = findDOMNode(checkedComponent, 'at-list')
    const itemSwitchInputDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch input'
    )
    expect(itemSwitchInputDom.style._length).toBeGreaterThan(0)
  })

  it('ListItem switch was unchecked', () => {
    const checkedComponent = renderIntoDocument(
      <AtList>
        <AtListItem isSwitch title='标题文字' />
      </AtList>
    )

    const componentDom = findDOMNode(checkedComponent, 'at-list')
    const itemSwitchInputDom = componentDom.querySelector(
      '.at-list__item .item-extra__switch input'
    )
    expect(itemSwitchInputDom.style._length).toEqual(0)
  })
})
