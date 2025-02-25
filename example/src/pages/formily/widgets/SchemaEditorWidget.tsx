import React from 'react'
import {
  transformToSchema,
  transformToTreeNode,
} from '@liukefu/designable-formily-transformer'
import { TreeNode, ITreeNode } from '@liukefu/designable-core'
import { MonacoInput } from '@liukefu/designable-react-settings-form'

export interface ISchemaEditorWidgetProps {
  tree: TreeNode
  onChange?: (tree: ITreeNode) => void
}

export const SchemaEditorWidget: React.FC<ISchemaEditorWidgetProps> = (
  props
) => {
  return (
    <MonacoInput
      {...props}
      value={JSON.stringify(transformToSchema(props.tree), null, 2)}
      onChange={(value) => {
        props.onChange?.(transformToTreeNode(JSON.parse(value)))
      }}
      language="json"
    />
  )
}
