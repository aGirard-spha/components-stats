// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Delete from 'mdi-material-ui/Delete'

const DeleteButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='error' title='Supprimer' IconComponent={Delete} {...props} />
  )
}
export default DeleteButton
