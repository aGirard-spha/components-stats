import React, { useMemo } from 'react'
import {
  Dialog as DialogMUI,
  DialogTitle,
  DialogContent,
  DialogActions,
  makeStyles
} from '@material-ui/core'
import Draggable from 'react-draggable'
import { PaperProps } from '@material-ui/core/Paper'
import CloseButton from '../Button/CancelButton'
import clsx from 'clsx'
import StackHorizontal from '../StackHorizontal'
import { DialogProps } from './Dialogs.types'
import Paper from '../Paper'
import { CancelIconButton } from '../IconButton'

const useStyles = makeStyles({
  actions: {
    background: '#FBFBFB',
    justifyContent: 'unset'
  },
  fullHeight: { height: '100%' },
  closeIcon: { textAlign: 'right', position: 'absolute', right: '16px', top: '12px' }
})

function PaperComponent (props: PaperProps) {
  const { draggable, ...rest } = props
  if (draggable) {
    return (
      <Draggable handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...rest} />
      </Draggable>
    )
  } else {
    return <Paper {...rest} />
  }
}

/**
 * Interface Dialog hérite de Dialog de la librairie material-UI
 */
const Dialog: React.FC<DialogProps> = (props) => {
  const {
    children,
    onClose,
    open,
    actions,
    title = undefined,
    fullWidth = true,
    DialogProps = {},
    titleProps = {},
    contentProps = {},
    maxWidth,
    closeButtonProps,
    actionsProps,
    name,
    id,
    full,
    hint,
    disableBackdropClick = false,
    draggable = false,
    buttonsVariant = 'outlined',
    haveButton = true
  } = props
  const classes = useStyles()

  const trueActions = useMemo(() => {
    return actions || <CloseButton title='Fermer' key='close' variant={buttonsVariant} {...closeButtonProps} onClick={onClose} />
  }, [actions, closeButtonProps, onClose, buttonsVariant, haveButton])

  const closeActions = useMemo(() => {
    return actions || <CancelIconButton title='Fermer' tooltipProps={{ className: classes.closeIcon }} key='close' {...closeButtonProps} onClick={onClose} />
  }, [actions, closeButtonProps, onClose])

  return (
    <DialogMUI
      role='dialog'
      open={open}
      onClose={onClose}
      id={`${id || name}-dialog`}
      PaperComponent={PaperComponent}
      aria-labelledby='draggable-dialog-title'
      aria-describedby='dialog-description'
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      disableBackdropClick={disableBackdropClick}
      PaperProps={{ draggable, className: clsx({ [classes.fullHeight]: full }) }}
      {...DialogProps}
    >
      {!haveButton && (
        <>
          {closeActions}
        </>
      )}
      {title && (
        <DialogTitle id='draggable-dialog-title' {...titleProps}>
          {title}
        </DialogTitle>
      )}

      {open && (
        <>
          <DialogContent {...contentProps} style={{ height: full ? '100%' : 'auto', paddingBottom: !haveButton ? '16px' : undefined }}>
            {children}
          </DialogContent>
          {haveButton ? (
            <DialogActions {...actionsProps} className={classes.actions}>
              <StackHorizontal spacing={2}>
                {hint}
              </StackHorizontal>
              <StackHorizontal justify='flex-end' spacing={2}>
                {trueActions}
              </StackHorizontal>
            </DialogActions>
          ) : null}
        </>
      )}
    </DialogMUI>
  )
}

export default Dialog
