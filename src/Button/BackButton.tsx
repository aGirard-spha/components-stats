// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import ArrowLeft from 'mdi-material-ui/ArrowLeft'

const BackButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Retour' IconComponent={ArrowLeft} {...props} iconPosition='left' />
  )
}
export default BackButton
