import * as React from 'react'
import { makeStyles } from '@material-ui/core'
import clsx from 'clsx'
import Typography from './Typography'
import { TypographyProps } from './Typography.types'

const useStyles = makeStyles({
  root: {
    fontWeight: 500
  }
})

const BoldTypography: React.FC<TypographyProps> = (props) => {
  const { className, ...rest } = props
  const classes = useStyles()
  return <Typography {...rest} className={clsx(className, classes.root)} />
}

export default BoldTypography
