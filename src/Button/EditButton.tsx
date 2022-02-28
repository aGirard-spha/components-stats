// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Pencil from 'mdi-material-ui/Pencil'

const PlusButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Modifier' IconComponent={Pencil} {...props} />
  )
}
export default PlusButton
