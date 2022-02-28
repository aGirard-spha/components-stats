// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import Button from './Button'
import Refresh from 'mdi-material-ui/Refresh'

const RefreshButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button color='primary' title='Recharger' IconComponent={Refresh} {...props} />
  )
}
export default RefreshButton
