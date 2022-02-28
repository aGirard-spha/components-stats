import React, { forwardRef } from 'react'
import { useGlobalStyles, useFlexStyles } from '../styles'
import { withStyles } from '@material-ui/core'
import clsx from 'clsx'
import { StackProps } from './Stack.types'

const SPACINGS = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10]
function getOffset (val: any, div = 1) {
  const parse = parseFloat(val)
  return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`
}

const styles = (theme: any) => {
  const styles: any = {
  }

  SPACINGS.forEach((spacing) => {
    const themeSpacing = theme.spacing(spacing)

    if (themeSpacing === 0) {
      return
    }

    styles[`spacing-${spacing}`] = {
      '& > *': {
        marginTop: getOffset(themeSpacing, 2),
        marginBottom: getOffset(themeSpacing, 2),
        '&:first-child': { marginTop: 0 },
        '&:last-child': { marginBottom: 0 }
      }
    }
  })

  return styles
}

const Stack: React.FC<StackProps> = forwardRef(({ spacing, classes, align, justify, fullHeight = true, fullWidth = true, component = 'div', className, ...rest }, ref) => {
  const globalClasses = useGlobalStyles()
  const flexClasses = useFlexStyles()
  const Component = component
  return (
    <Component
      ref={ref}
      className={clsx(
        className,
        flexClasses.root,
        flexClasses.column,
        {
          [classes[`spacing-${String(spacing)}`]]: true,
          [globalClasses.fullHeight]: fullHeight,
          [globalClasses.fullWidth]: fullWidth,
          [flexClasses.justifyCenter]: justify === 'center',
          [flexClasses.justifyStart]: justify === 'flex-start',
          [flexClasses.justifyEnd]: justify === 'flex-end',
          [flexClasses.justifyBetween]: justify === 'space-between',
          [flexClasses.justifyAround]: justify === 'space-around',
          [flexClasses.alignCenter]: align === 'center',
          [flexClasses.alignStart]: align === 'flex-start',
          [flexClasses.alignEnd]: align === 'flex-end'
        }
      )}
      {...rest}
    />
  )
})

export default withStyles(styles, { name: 'Stack' })(Stack)
