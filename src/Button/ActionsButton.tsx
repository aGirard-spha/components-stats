// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import DotsVertical from 'mdi-material-ui/DotsVertical'

const ActionsButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Actions' IconComponent={DotsVertical} {...props} />
  )
}
export default ActionsButton
