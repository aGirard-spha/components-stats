import * as React from 'react'
import { Tooltip as TooltipMUI } from '@material-ui/core'
import { TooltipProps as TooltipPropsMUI } from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const useStyles = makeStyles({
  root2: { display: 'inline' },
  tooltip: { display: 'inherit' },
  root: { whiteSpace: 'pre' }
})

interface TooltipProps extends TooltipPropsMUI {
  /**
   * Les propriétés passées au titre
   */
  titleProps?: any;
}

const Tooltip = (props: TooltipProps) => {
  const { title, titleProps = {}, children, ...rest } = props
  const classes = useStyles()
  const titleClassName = clsx(titleProps.className, classes.root)
  if (typeof title === 'string') {
    return (
      <div className={classes.root2}>
        <TooltipMUI
          className={classes.tooltip}
          {...rest}
          title={
            <div {...titleProps} className={titleClassName}>
              {title}
            </div>
          }
        >
          <div>{children}</div>
        </TooltipMUI>
      </div>

    )
  }
  return (
    <div className={classes.root2}>
      <TooltipMUI className={clsx(classes.root, classes.tooltip)} {...rest} title={title}>
        <div>{children}</div>
      </TooltipMUI>
    </div>
  )
}

export default Tooltip
