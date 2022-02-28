// Generated with util/create-component.js
import React from 'react'
import { IconButtonProps } from './IconButton.types'
import { IconButton as IconButtonMUI } from '@material-ui/core'
import clsx from 'clsx'
import Tooltip from '../Tooltip'
import { useStyles, isCustomColor, styleName } from './IconButton.styles'
const defaultColors = ['inherit', 'primary', 'secondary', 'default']

const IconButton: React.FC<IconButtonProps> = (props) => {
  const {
    title,
    IconComponent,
    iconComponentProps = { },
    color = 'default',
    size = 'small',
    variant = 'outlined',
    className,
    tooltipProps,
    ...rest
  } = props

  const classes: any = useStyles()
  const customColor = isCustomColor(color)
  const usedColor: any = customColor ? 'default' : defaultColors.find((x: string) => x === color)

  return (
    <Tooltip title={title} {...tooltipProps}>
      <IconButtonMUI
        size={size}
        color={usedColor}
        className={clsx(className, classes[styleName(variant, color)])}
        {...rest}
      >
        {IconComponent && <IconComponent fontSize='inherit' {...iconComponentProps} />}
      </IconButtonMUI>
    </Tooltip>
  )
}
export default IconButton
