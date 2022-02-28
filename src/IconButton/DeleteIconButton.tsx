// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Delete from 'mdi-material-ui/Delete'

const DeleteButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='error' title='Supprimer' IconComponent={Delete} {...props} />
  )
}
export default DeleteButton
