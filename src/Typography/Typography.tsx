import * as React from 'react'
import TypographyMUI from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'
import toStartCase from '../_shared/toStartCase'
import reactToString from '../_shared/reactToString'
import { TypographyProps } from './Typography.types'

const useStyles = makeStyles({
  none: { textTransform: 'none' },
  uppercase: { textTransform: 'uppercase' },
  lowercase: { textTransform: 'lowercase' },
  capitalize: { textTransform: 'capitalize' }
})

const Typography: React.FC<TypographyProps> = (props) => {
  const { textTransform = 'none', className, children, ...rest } = props

  const classes = useStyles()
  switch (textTransform) {
    case 'firstletteruppercase': {
      const str = reactToString(children)
      return (
        <TypographyMUI className={clsx(className)} {...rest}>
          {str.substring(0, 1).toUpperCase()}{str.substring(1)}
        </TypographyMUI>
      )
    }
    case 'titlecase':
      return (
        <TypographyMUI className={clsx(className)} {...rest}>
          {reactToString(children)}
        </TypographyMUI>
      )
    case 'tostartcase':
      return (
        <TypographyMUI className={clsx(className)} {...rest}>
          {toStartCase(reactToString(children))}
        </TypographyMUI>
      )
    case 'javascriptuppercase':
      return (
        <TypographyMUI className={clsx(className)} {...rest}>
          {reactToString(children).toUpperCase()}
        </TypographyMUI>
      )
    case 'capitalize':
      return (
        <TypographyMUI className={clsx(classes.capitalize, className)} {...rest}>
          {children}
        </TypographyMUI>
      )
    case 'uppercase':
      return (
        <TypographyMUI className={clsx(classes.uppercase, className)} {...rest}>
          {children}
        </TypographyMUI>
      )
    case 'lowercase':
      return (
        <TypographyMUI className={clsx(classes.lowercase, className)} {...rest}>
          {children}
        </TypographyMUI>
      )
    default:
      return (
        <TypographyMUI className={clsx(classes.none, className)} {...rest}>
          {children}
        </TypographyMUI>
      )
  }
}

export default Typography
