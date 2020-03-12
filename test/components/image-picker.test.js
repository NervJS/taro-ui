import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtImagePicker from '../../.temp/components/image-picker/index'

describe('AtImagePicker Snap', () => {
  const files = [
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
      id: '2122'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
      id: '2121'
    }
  ]
  it('render initial AtImagePicker', () => {
    const component = renderToString(<AtImagePicker isTest />)
    expect(component).toMatchSnapshot()
  })

  it('render AtImagePicker -- props className', () => {
    const component = renderToString(<AtImagePicker isTest className='test' />)
    expect(component).toMatchSnapshot()
  })

  it('render AtImagePicker -- props customStyle', () => {
    const component = renderToString(
      <AtImagePicker isTest customStyle='color: red' />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtImagePicker -- props files', () => {
    const component = renderToString(<AtImagePicker isTest files={files} />)
    expect(component).toMatchSnapshot()
  })

  it('render AtImagePicker -- props length', () => {
    const component = renderToString(
      <AtImagePicker isTest length={5} files={files} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtImagePicker -- props mode', () => {
    const component = renderToString(
      <AtImagePicker isTest mode='top' files={files} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtImagePicker -- props showAddBtn', () => {
    const component = renderToString(
      <AtImagePicker isTest showAddBtn={false} files={files} />
    )
    expect(component).toMatchSnapshot()
  })

  it('render AtImagePicker -- props multiple', () => {
    const component = renderToString(<AtImagePicker isTest multiple />)
    expect(component).toMatchSnapshot()
  })
})
