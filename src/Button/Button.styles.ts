import { makeStyles, fade } from '@material-ui/core'
import { merge } from 'lodash'
const variants = ['text', 'outlined', 'contained']
const colors = ['error', 'warning', 'info', 'success']

const variantsColors = variants.reduce((accu, variant) => {
  accu.push(...colors.map(color => [variant, color]))
  return accu
}, [])

export const isCustomColor = (color: string) => colors.includes(color)

const isOutlined = (variant: string) => variant === variants[1]
const isContained = (variant: string) => variant === variants[2]

export const styleName = (variant: string, color: string) => `${variant}${color.substring(0, 1).toUpperCase()}${color.substring(1)}`

const template = (variant: string, color: string, theme: any) =>
  mergeAll([
    {
      color: theme.palette[color].main
    },
    isContained(variant) && {
      color: theme.palette[color].contrastText,
      backgroundColor: theme.palette[color].main
    },
    isOutlined(variant) && {
      border: '1px solid',
      borderColor: fade(theme.palette[color].main, 0.5)
    },
    {
      '&:hover': mergeAll([
        {
          backgroundColor: fade(
            theme.palette[color].main,
            theme.palette.action.hoverOpacity
          )
        },
        isContained(variant) && {
          backgroundColor: theme.palette[color].dark
        },
        isOutlined(variant) && {
          border: '1px solid',
          borderColor: theme.palette[color].main
        },
        {
          // reset on touch devices
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      ])
    }
  ])

const mergeAll = (array: any[]) => {
  return array.reduce((accu, x) => {
    return merge(accu, accu, x)
  }, {})
}

const createColorStyles = (template: any, theme: any) => {
  const res = variantsColors.map(variantColor => {
    return { [styleName(variantColor[0], variantColor[1])]: template(variantColor[0], variantColor[1], theme) }
  })
  return mergeAll(res)
}

export const useStyles = makeStyles(theme => ({
  ...createColorStyles(template, theme)
}))
