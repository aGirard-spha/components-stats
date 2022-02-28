// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Plus from 'mdi-material-ui/Plus'

const PlusButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Ajouter' IconComponent={Plus} {...props} />
  )
}
export default PlusButton
