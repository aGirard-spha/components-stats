// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import DatabaseExport from 'mdi-material-ui/DatabaseExport'

const PlusButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Exporter' IconComponent={DatabaseExport} {...props} />
  )
}
export default PlusButton
