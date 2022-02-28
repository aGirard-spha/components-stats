import * as React from 'react'
import {
  Dialog as DialogMUI,
  DialogContent,
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  fade
} from '@material-ui/core'
import { DialogProps } from '@material-ui/core/Dialog'
import { DialogContentProps } from '@material-ui/core/DialogContent'
import { blueGrey, grey } from '@material-ui/core/colors'
import { Color } from 'csstype'
import CancelIconButton from '../IconButton/CancelIconButton'
import { IconButtonProps } from '../IconButton/IconButton.types'
import { invertColor } from '../_shared'
import clsx from 'clsx'

export interface DialogProps2 extends DialogProps {
  /**
   * Le titre de la boîte de dialogue
   * @default Information
   */
  title?: string;
  /**
   * Propriétés passé au composant DialogContent material-ui
   */
  contentProps?: DialogContentProps;
  /**
   * Propriétés passé au bouton fermer
   */
  closeButtonProps?: IconButtonProps;
  /**
   * Propriétés passé au composant Dialog material-ui
   */
  DialogProps?: DialogProps;
  /**
   * Permet d'identifier de manière unique le dialogue ainsi
   * que le formulaire
   */
  name?: string;
  /**
   * Couleur de la barre de Titre
   */
  backgroundToolbar?: Color;
  /**
   * Composants à droite, avant le bouton "Fermer"
   */
  rightComponent?: any;

  onClose?: any;

}

const useStyles = makeStyles(theme => ({
  title: {
    flex: 1,
    color: invertColor(theme.palette.primary.main, true)
  },
  button: {
    color: invertColor(theme.palette.primary.main, true),
    border: `1px solid ${invertColor(theme.palette.primary.main, true)}`,
    '&:hover': {
      border: '1px solid white',
      backgroundColor: fade(theme.palette.primary.main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }
  },
  bar: {
    position: 'relative'
  }
}))

/**
 * Interface Dialog hérite de Dialog de la librairie material-UI
 */
const DialogFull = (props: DialogProps2) => {
  const {
    children,
    onClose,
    open,
    title = 'Information',
    fullWidth = true,
    DialogProps = {},
    contentProps = {},
    maxWidth = 'sm',
    closeButtonProps,
    id,
    name,
    rightComponent
  } = props
  const classes = useStyles()
  const { className: closeButtonPropsClassname, ...restCloseButtonProps } = (closeButtonProps ?? {})
  return (
    <DialogMUI
      open={open}
      onClose={onClose}
      id={`${id || name}-dialog`}
      aria-labelledby='dialog-title'
      aria-describedby='dialog-description'
      fullWidth={fullWidth}
      fullScreen
      maxWidth={maxWidth}
      data-dialogstoppropagation
      {...DialogProps}
    >
      <AppBar color='primary' className={classes.bar}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            {title}
          </Typography>
          {rightComponent}
          <CancelIconButton color='default' className={clsx(classes.button, closeButtonPropsClassname)} title='Fermer' onClick={onClose} {...restCloseButtonProps} />
        </Toolbar>
      </AppBar>
      {open && (
        <>
          <DialogContent {...contentProps}>{children}</DialogContent>
        </>
      )}
    </DialogMUI>
  )
}

export default DialogFull
