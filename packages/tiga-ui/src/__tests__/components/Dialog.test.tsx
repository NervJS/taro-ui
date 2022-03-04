import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('AtDialog 测试在 weapp 环境，h5类似 -> ', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'weapp'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)

  const AtDialog = jest.requireActual('../../components/dialog').default

  it('展示：基础模态框', () => {
    const component = renderer.create(
      <AtDialog
        isOpened={true}
        title='基础模态框'
        content='模块框内容'
        primaryText='主要操作'
        secondaryText='次要操作'
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：单个按钮模态框', () => {
    const component = renderer.create(
      <AtDialog isOpened={true} title='单个按钮模态框' content='模块框内容' />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：三个按钮模态框', () => {
    const component = renderer.create(
      <AtDialog
        isOpened={true}
        title='三个按钮模态框'
        content='模块框内容'
        primaryText='主要操作'
        secondaryText='次要操作'
        tertiaryText='辅助操作'
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：自定义内容模态框', () => {
    const component = renderer.create(
      <AtDialog isOpened={true} title='自定义模态框'>
        这里是正文内容，欢迎加入58安居客。。
        这里是正文内容，欢迎加入58安居客。。
        这里是正文内容，欢迎加入58安居客。。
      </AtDialog>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：无标题时，用户确认的内容，需控制在25字之内', () => {
    const component = renderer.create(
      <AtDialog isOpened={true} content='样式使用标题的样式'></AtDialog>
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('交互：默认点击 mask 不关闭弹窗', () => {
    const onCloseFn = jest.fn()

    const { getByTestId } = render(
      <AtDialog
        isOpened={true}
        title='三个按钮模态框'
        content='模块框内容'
        onClose={onCloseFn}
      />
    )

    const overlay = getByTestId('at-dialog__overlay')

    expect(overlay.parentElement?.className).toContain('active')
    fireEvent.click(overlay)
    expect(overlay.parentElement?.className).toContain('active')
    expect(onCloseFn).not.toBeCalled()
  })

  it('交互：closeOnClickOverlay 是 true 时，点击 mask 关闭弹窗且触发关闭的事件处理函数', () => {
    const onCloseFn = jest.fn()

    const { getByTestId } = render(
      <AtDialog
        closeOnClickOverlay
        isOpened={true}
        title='三个按钮模态框'
        content='模块框内容'
        onClose={onCloseFn}
      />
    )

    const overlay = getByTestId('at-dialog__overlay')

    expect(overlay.parentElement?.className).toContain('active')
    fireEvent.click(overlay)
    expect(overlay.parentElement?.className).not.toContain('active')
    expect(onCloseFn).toBeCalledTimes(1)
  })

  it('交互：绑定的所有事件处理函数都能触发', () => {
    const primaryFn = jest.fn()
    const secondaryFn = jest.fn()
    const tertiaryFn = jest.fn()
    const onCloseFn = jest.fn()

    const { getByText } = render(
      <AtDialog
        isOpened={true}
        title='三个按钮模态框'
        content='模块框内容'
        primaryText='主要操作'
        secondaryText='次要操作'
        tertiaryText='辅助操作'
        onPrimary={primaryFn}
        onSecondary={secondaryFn}
        onTertiary={tertiaryFn}
        onClose={onCloseFn}
      />
    )

    const primary = getByText(/主要操作/)
    const secondary = getByText(/次要操作/)
    const tertiary = getByText(/辅助操作/)

    fireEvent.click(primary)
    fireEvent.click(secondary)
    fireEvent.click(tertiary)

    expect(primaryFn).toBeCalledTimes(1)
    expect(secondaryFn).toBeCalledTimes(1)
    expect(tertiaryFn).toBeCalledTimes(1)
  })
})
