import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

describe('AtToast 测试在 weapp 环境，h5类似 -> ', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'weapp'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)
  const AtToast = jest.requireActual('../../components/toast').default

  it('展示：单行文本', () => {
    const component = renderer.create(
      <AtToast isOpened={true} text='基础提示' />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：多行文本', () => {
    const component = renderer.create(
      <AtToast
        isOpened={true}
        text='这是文字多一些的情况，希望行数能够多一些达到超过但行的标准！这下应该有两行了吧'
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：自定义内容模态框', () => {
    const component = renderer.create(
      <AtToast isOpened={true}>
        这里是正文内容，欢迎加入58安居客。。
        这里是正文内容，欢迎加入58安居客。。
        这里是正文内容，欢迎加入58安居客。。
      </AtToast>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('交互：测试提示持续时间短', async () => {
    const { getByTestId } = render(
      <AtToast isOpened={true} text='基础提示' duration='short' />
    )
    const container = getByTestId('at-toast')
    expect(container.className).toContain('at-toast--active')
    const body = getByTestId('at-toast-body')
    // await delay(2000)

    setTimeout(() => {
      expect(container.className).not.toContain('at-toast--active')
      expect(body.className).toContain('at-toast--inactive')
    }, 2000)
  })
  it('交互：测试提示持续时间长', async () => {
    const { getByTestId } = render(
      <AtToast isOpened={true} text='基础提示' duration='long' />
    )
    const container = getByTestId('at-toast')
    expect(container.className).toContain('at-toast--active')
    const body = getByTestId('at-toast-body')
    // await delay(3500)
    setTimeout(() => {
      expect(container.className).not.toContain('at-toast--active')
      expect(body.className).toContain('at-toast--inactive')
    }, 3500)
  })
  it('交互：测试提示持续时间自动', async () => {
    const { getByTestId } = render(
      <AtToast isOpened={true} text='基础提示七个字' />
    )
    const container = getByTestId('at-toast')
    expect(container.className).toContain('at-toast--active')

    setTimeout(() => {
      expect(container.className).toContain('at-toast--inactive')
    }, 2000)
  })
  it('交互：测试提示持续时自动', async () => {
    const { getByTestId } = render(
      <AtToast isOpened={true} text='基础提示八个字了' />
    )
    const container = getByTestId('at-toast')
    expect(container.className).toContain('at-toast--active')

    setTimeout(() => {
      expect(container.className).toContain('at-toast--inactive')
    }, 3500)
  })
  it('交互：传入onClick事件时，回调函数能够触发', () => {
    const onClickFn = jest.fn()

    const { getByTestId } = render(
      <AtToast
        isOpened={true}
        text='基础提示'
        duration='short'
        onClick={onClickFn}
      />
    )
    const toastBody = getByTestId('at-toast-body')
    expect(toastBody.parentElement?.className).toContain('at-toast--active')
    fireEvent.click(toastBody)
    expect(onClickFn).toBeCalledTimes(1)
  })
  it('交互：传入onClose事件时，回调函数能够触发', async () => {
    const onCloseFn = jest.fn()

    const { getByTestId } = render(
      <AtToast
        isOpened={true}
        text='基础提示'
        duration='short'
        onClose={onCloseFn}
      />
    )
    const container = getByTestId('at-toast')
    expect(container.className).toContain('at-toast--active')

    setTimeout(() => {
      expect(container.className).toContain('at-toast--inactive')
      expect(onCloseFn).toBeCalledTimes(1)
    }, 2000)
  })
})
