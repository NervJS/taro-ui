import Nerv, { findDOMNode } from 'nervjs'
import { renderToString } from 'nerv-server'
import { Simulate, renderIntoDocument } from 'nerv-test-utils'

import { Button } from '@tarojs/components'

import AtModal from '../../../.temp/components/modal/index'
import AtModalAction from '../../../.temp/components/modal/action/index'
import AtModalHeader from '../../../.temp/components/modal/header/index'
import AtModalContent from '../../../.temp/components/modal/content/index'

describe('Modal Snap', () => {
  it('render initial Modal', () => {
    const componet = renderToString(
      <AtModal>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(componet).toMatchSnapshot()
  })

  it('render opened Modal', () => {
    const componet = renderToString(
      <AtModal isOpened>
        <AtModalHeader>标题</AtModalHeader>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(componet).toMatchSnapshot()
  })

  it('render opened Modal -- not header', () => {
    const componet = renderToString(
      <AtModal isOpened>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>取消</Button>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(componet).toMatchSnapshot()
  })

  it('render opened Modal -- single button', () => {
    const componet = renderToString(
      <AtModal isOpened>
        <AtModalContent>
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </AtModalContent>
        <AtModalAction>
          <Button>确定</Button>
        </AtModalAction>
      </AtModal>
    )
    expect(componet).toMatchSnapshot()
  })

  it('render opened  Modal -- simple', () => {
    const componet = renderToString(
      <AtModal
        isOpened
        title='标题'
        cancleText='取消'
        confirmText='确认'
        content='欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室'
      />
    )
    expect(componet).toMatchSnapshot()
  })
})

describe('Modal Behavior ', () => {
  it('Modal onClose & onCancle & onClick', () => {
    const onCancle = jest.fn()
    const onConfirm = jest.fn()

    const component = renderIntoDocument(
      <AtModal
        isOpened
        title='标题'
        cancleText='取消'
        confirmText='确认'
        onCancle={onCancle}
        onConfirm={onConfirm}
        content='欢迎加入京东凹凸实验室\n\r欢迎加入京东凹凸实验室'
      />
    )
    const componentDom = findDOMNode(component, 'at-modal')

    const cancleDom = componentDom.querySelector(
      '.at-modal-footer__action button:first-child'
    )
    const confirmDom = componentDom.querySelector(
      '.at-modal-footer__action button:last-child'
    )

    Simulate.click(cancleDom)
    expect(onCancle).toBeCalled()

    Simulate.click(confirmDom)
    expect(onConfirm).toBeCalled()
  })
})
