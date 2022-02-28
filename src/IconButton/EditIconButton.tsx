// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Pencil from 'mdi-material-ui/Pencil'

const PlusButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Modifier' IconComponent={Pencil} {...props} />
  )
}
export default PlusButton
