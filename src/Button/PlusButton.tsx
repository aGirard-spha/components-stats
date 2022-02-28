// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Plus from 'mdi-material-ui/Plus'

const PlusButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Ajouter' IconComponent={Plus} {...props} />
  )
}
export default PlusButton
