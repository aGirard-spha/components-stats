// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import Button from './IconButton'
import Refresh from 'mdi-material-ui/Refresh'

const RefreshButton: React.FC<IconButtonProps> = (props) => {
  return (
    <Button color='primary' title='Recharger' IconComponent={Refresh} {...props} />
  )
}
export default RefreshButton
