import { makeStyles, fade } from '@material-ui/core'
import { merge } from 'lodash'
import { invertColor } from '../_shared'
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
      color: invertColor(theme.palette[color].main, true),
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
          backgroundColor: theme.palette[color].dark,
          color: invertColor(theme.palette[color].dark, true)
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
  ...createColorStyles(template, theme),
  disabled: {},
  outlinedPrimary: {
    color: theme.palette.primary.main,
    border: `1px solid ${fade(theme.palette.primary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.main}`,
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
  outlinedSecondary: {
    color: theme.palette.secondary.main,
    border: `1px solid ${fade(theme.palette.secondary.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${theme.palette.secondary.main}`,
      backgroundColor: fade(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    },
    '&$disabled': {
      border: `1px solid ${theme.palette.action.disabled}`
    }
  },
  containedPrimary: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.primary.main
      }
    }
  },
  /* Styles applied to the root element if `variant="contained"` and `color="secondary"`. */
  containedSecondary: {
    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  }
}))
