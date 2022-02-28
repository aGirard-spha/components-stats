import React, { forwardRef } from 'react'
import { useGlobalStyles, useFlexStyles } from '../styles'
import { withStyles } from '@material-ui/core'
import clsx from 'clsx'
import { StackHorizontalProps } from './StackHorizontal.types'

const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getOffset (val: any, div = 1) {
  const parse = parseFloat(val)
  return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`
}

const styles = (theme: any) => {
  const styles: any = {}

  SPACINGS.forEach((spacing) => {
    const themeSpacing = theme.spacing(spacing)

    if (themeSpacing === 0) {
      return
    }

    styles[`spacing-${spacing}`] = {
      '& > *': {
        marginLeft: getOffset(themeSpacing, 2),
        marginRight: getOffset(themeSpacing, 2),
        '&:first-child': { marginLeft: 0 },
        '&:last-child': { marginRight: 0 }
      }
    }
  })

  return styles
}

const StackHorizontal: React.FC<StackHorizontalProps> = forwardRef(({ children, spacing = '0', align = 'center', classes, justify = 'center', component = 'div', fullHeight = true, fullWidth = true, className, ...rest }, ref) => {
  const globalClasses = useGlobalStyles()
  const flexClasses = useFlexStyles()
  const Component = component
  return (
    <Component
      ref={ref}
      {...rest}
      className={clsx(className,
        flexClasses.root,
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
      children={children}
    />
  )
})

export default withStyles(styles, { name: 'StackHorizontal' })(StackHorizontal)
