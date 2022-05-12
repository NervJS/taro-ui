import React from 'react'
import renderer from 'react-test-renderer'
import { cleanup, fireEvent, render } from '@testing-library/react'

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

describe('AtInput 测试在 weapp 环境，h5类似 -> ', () => {
  const OLD_ENV = { ...process.env }
  process.env.TARO_ENV = 'weapp'

  afterAll(() => {
    process.env = { ...OLD_ENV } // Restore old environment
    jest.resetModules()
  })

  afterEach(cleanup)
  const AtInput = jest.requireActual('../../components/input').default
  const AtIcon = jest.requireActual('../../components/icon').default

  it('展示: base', () => {
    const component = renderer.create(<AtInput />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：带标题', () => {
    const component = renderer.create(
      <AtInput title='标题' placeholder='请输入' />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：必填', () => {
    const component = renderer.create(
      <AtInput title='标题' required placeholder='请输入' />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：最大长度', () => {
    const component = renderer.create(
      <AtInput title='标题' maxlength={10} placeholder='请输入' />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：可清除', () => {
    const component = renderer.create(
      <AtInput title='标题' maxlength={10} placeholder='请输入' clearable />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：标题自定义icon', () => {
    const component = renderer.create(
      <AtInput
        title='标题'
        maxlength={10}
        prefix={
          <AtIcon
            className='at-input-icon'
            value='curtain_icon_cancel'
            size={16}
          />
        }
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：右侧带配置icon', () => {
    const component = renderer.create(
      <AtInput
        required
        title='右区icon'
        placeholder='请输入'
        iconName='curtain_icon_cancel'
        iconSize={24}
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：右侧带配置按钮', () => {
    const component = renderer.create(
      <AtInput title='标题' placeholder='请输入' buttonTxt='功能按钮' />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('展示：右侧自定义', () => {
    const component = renderer.create(
      <AtInput title='标题' placeholder='请输入'>
        右侧自定义
      </AtInput>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
