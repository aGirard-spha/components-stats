// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import DatabaseExport from 'mdi-material-ui/DatabaseExport'

const PlusButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Exporter' IconComponent={DatabaseExport} {...props} />
  )
}
export default PlusButton
