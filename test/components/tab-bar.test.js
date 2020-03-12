import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'
import AtTabBar from '../../.temp/components/tab-bar/index'

describe('AtTabBar Snap', () => {
  const tabList = [
    { title: '待办事项', iconType: 'bullet-list', text: 'new' },
    { title: '拍照', iconType: 'camera' },
    { title: '文件夹', iconType: 'folder', text: '100', max: '99' },
    {
      title: '领取中心',
      image:
        'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
      selectedImage:
        'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
      text: 'new'
    }
  ]

  it('render initial AtTabBar', () => {
    const componet = renderToString(<AtTabBar />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props customStyle', () => {
    const componet = renderToString(<AtTabBar customStyle='color:red;' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props className', () => {
    const componet = renderToString(<AtTabBar className='test' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props fixed', () => {
    const componet = renderToString(<AtTabBar fixed />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props backgroundColor', () => {
    const componet = renderToString(<AtTabBar backgroundColor='red' />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props tabList', () => {
    const componet = renderToString(<AtTabBar tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props current', () => {
    const componet = renderToString(<AtTabBar current='2' tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props iconSize', () => {
    const componet = renderToString(
      <AtTabBar iconSize='26' tabList={tabList} />
    )
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props fontSize', () => {
    const componet = renderToString(
      <AtTabBar fontSize='26' tabList={tabList} />
    )
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props color', () => {
    const componet = renderToString(<AtTabBar color='red' tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props selectedColor', () => {
    const componet = renderToString(
      <AtTabBar selectedColor='red' tabList={tabList} />
    )
    expect(componet).toMatchSnapshot()
  })

  it('render AtTabBar -- props scroll', () => {
    const componet = renderToString(<AtTabBar scroll tabList={tabList} />)
    expect(componet).toMatchSnapshot()
  })
})
