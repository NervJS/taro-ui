import { ComponentClass } from 'react'

import AtComponent from './base'

interface Item {
  name: string

  [propName: string]: any
}

interface ListItem {
  title: string

  key: string

  items: Array<Item>
}

interface AtIndexesProps extends AtComponent {
  animation?: boolean

  topKey?: string

  isVibrate?: boolean

  isShowToast?: boolean

  list: Array<ListItem>

  onClick?: (item: Item) => void
}

declare const AtIndexes: ComponentClass<AtIndexesProps>

export default AtIndexes
