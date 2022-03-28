import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

describe('AtNavBar 测试在 h5 环境，rn类似 -> ', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'weapp'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)

  const AtNavBar = jest.requireActual('../../components/navbar').default

  it('展示：默认导航栏', () => {
    const component = renderer.create(<AtNavBar title='自定义标题' />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：左边自定义（最多四个字）', () => {
    const component = renderer.create(<AtNavBar title='标题' leftIcon='取消' />)

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('展示：右边自定义（最多四个字）', () => {
    const component = renderer.create(
      <AtNavBar title='标题' extra='右边内容' />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('交互：点击左侧区域', () => {
    const onBackFn = jest.fn()

    const { getByText } = render(
      <AtNavBar title='标题' leftIcon='返回' onBack={onBackFn} />
    )

    fireEvent.click(getByText('返回'))
    expect(onBackFn).toBeCalledTimes(1)
  })
})
