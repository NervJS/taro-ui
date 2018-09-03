import Nerv from 'nervjs'
import { renderToString } from 'nerv-server'

import AtTimeline from '../../../.temp/components/timeline/index'

describe('AtTimeline Snap', () => {
  it('render AtNoticebar -- props pending', () => {
    const component = renderToString(<AtTimeline pending items={[{ title: '刷牙洗脸' }, { title: '吃早餐' }, { title: '上班' }, { title: '睡觉' }]}>
    </AtTimeline>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props items', () => {
    const component = renderToString(<AtTimeline items={[{ title: '刷牙洗脸' }, { title: '吃早餐' }, { title: '上班' }, { title: '睡觉' }]}>
    </AtTimeline>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props item.color', () => {
    const component = renderToString(<AtTimeline items={[{ title: '刷牙洗脸' }, { title: '吃早餐', color: 'green' }, { title: '上班', color: 'red' }, { title: '睡觉', color: 'yellow' }]}>
    </AtTimeline>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props item.icon', () => {
    const component = renderToString(<AtTimeline items={[{ title: '刷牙洗脸', icon: 'check-circle' }, { title: '吃早餐', icon: 'clock' }, { title: '上班', icon: 'clock' }, { title: '睡觉', icon: 'clock' }]}>
    </AtTimeline>)
    expect(component).toMatchSnapshot()
  })

  it('render AtNoticebar -- props item.content', () => {
    const component = renderToString(<AtTimeline pending items={[{ title: '刷牙洗脸', content: ['大概8:00'], icon: 'check-circle' }, { title: '吃早餐', content: ['牛奶+面包', '餐后记得吃药'], icon: 'clock' }, { title: '上班', content: ['查看邮件', '写PPT', '发送PPT给领导'], icon: 'clock' }, { title: '睡觉', content: ['不超过23:00'], icon: 'clock' }]}>
    </AtTimeline>)
    expect(component).toMatchSnapshot()
  })
})

