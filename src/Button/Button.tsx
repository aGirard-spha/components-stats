// Generated with util/create-component.js
import React from 'react'
import { ButtonProps } from './Button.types'
import { Button } from '@material-ui/core'
import clsx from 'clsx'
import { useStyles, styleName, isCustomColor } from './Button.styles'
import Tooltip from '../Tooltip'
const defaultColors = ['inherit', 'primary', 'secondary', 'default']

const Buttons: React.FC<ButtonProps> = (props) => {
  const {
    title,
    IconComponent,
    iconPosition = 'right',
    iconComponentProps = {},
    useIcon = false,
    icon = false,
    color = 'default',
    variant = 'outlined',
    className,
    tooltipProps = {},
    ...rest
  } = props

  const classes: any = useStyles()
  const customColor = isCustomColor(color)
  const usedColor: any = customColor ? 'default' : defaultColors.find((x: string) => x === color)

  let ButtonComponent
  const styleNameUsed = styleName(variant, color)
  if (icon) {
    return (
      ButtonComponent = (
        <Button
          color={usedColor}
          variant={variant} className={clsx(className, {
            [classes[styleNameUsed]]: customColor
          })}
          {...rest}
        >
          <IconComponent {...iconComponentProps} />
        </Button>
      )
    )
  } else {
    ButtonComponent = (
      <Button
        variant={variant}
        endIcon={useIcon && iconPosition === 'right' && <IconComponent {...iconComponentProps} />}
        startIcon={useIcon && iconPosition === 'left' && <IconComponent {...iconComponentProps} />}
        color={usedColor}
        className={clsx(className, {
          [classes[styleNameUsed]]: customColor
        })}
        {...rest}
      >
        {title}
      </Button>
    )
  }

  if (icon) {
    return (
      <Tooltip title={title} {...tooltipProps}>
        {ButtonComponent}
      </Tooltip>
    )
  }

  return ButtonComponent
}
export default Buttons
