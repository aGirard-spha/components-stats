// Generated with util/create-component.js
import React from 'react'
import { CardProps } from './Card.types'
import CardMUI from '@material-ui/core/Card'
import Paper from '../Paper'
import { CardHeader, CardContent, Theme, makeStyles, Divider } from '@material-ui/core'
import clsx from 'clsx'
import StackHorizontal from '../StackHorizontal'
import Stack from '../Stack'
import { useFlexStyles } from '../styles'

const useStyles = makeStyles((theme: Theme) => ({
  header: {
    '& > *': {
      alignSelf: 'unset'
    },
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  },
  content: {
    padding: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&:last-child': {
      paddingBottom: theme.spacing(2)
    }
  },
  root: {
  }
}))

const Card: React.FC<CardProps> = (props) => {
  const { headerProps = {}, contentProps = {}, children, className, hasDivider, ...rest } = props
  const { className: classNameHeader, action, ...restHeaderProps } = headerProps
  const { className: classNameContent, ...restContentProps } = contentProps
  const classes = useStyles()
  const flexClasses = useFlexStyles()
  return (
    <CardMUI component={Paper} className={clsx(classes.root, className)} {...rest}>
      <Stack spacing={0.5}>
        <CardHeader
          className={clsx(classes.header, classNameHeader)} {...restHeaderProps} action={(
            <StackHorizontal style={{ paddingTop: '8px', paddingRight: '8px' }} fullWidth={false} spacing={2}>{action}</StackHorizontal>
          )}
        />
        {hasDivider && <Divider />}
        <CardContent className={clsx(classes.content, flexClasses.remainingSpace, classNameContent)} {...restContentProps}>
          {children}
        </CardContent>
      </Stack>
    </CardMUI>
  )
}

export default Card
