import { Popover, PopoverProps } from '@material-ui/core'
import React from 'react'
import Paper from '../Paper'

const AbsconsPopover: React.FC<PopoverProps> = (props) => {
  const { PaperProps = {}, ...rest } = props
  return (
    <Popover
      {...rest}
      PaperProps={{ ...PaperProps, component: Paper }}
    />
  )
}

export default AbsconsPopover
