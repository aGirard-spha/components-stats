// Generated with util/create-component.js
import React, { forwardRef } from 'react'
import { Paper as PaperMUI, PaperProps as PaperPropsMUI, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles({
  root: {
    boxShadow: '0px 0px 2px rgba(0, 0, 0, .2)',
    borderRadius: '12px'
  }
})

const Paper: React.FC<Omit<PaperPropsMUI, 'elevation'> & { elevate?: boolean }> = forwardRef((props, ref) => {
  const { className, elevate = true, ...rest } = props
  const classes = useStyles()
  return (
    <PaperMUI className={clsx(className, { [classes.root]: elevate })} elevation={0} ref={ref} {...rest} />
  )
})

export default Paper
