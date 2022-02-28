// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import EyePlus from 'mdi-material-ui/EyePlus'

const MoreButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Voir Plus' IconComponent={EyePlus} {...props} />
  )
}
export default MoreButton
