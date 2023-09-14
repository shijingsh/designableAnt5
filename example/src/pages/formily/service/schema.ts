import { Engine } from '@liukefu/designable-core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@liukefu/designable-formily-transformer'
import { message } from 'antd'

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  message.success('保存成功!')
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(
        JSON.parse(localStorage.getItem('formily-schema') as any)
      )
    )
  } catch {}
}
