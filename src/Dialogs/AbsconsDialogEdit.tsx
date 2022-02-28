import * as React from 'react'
import Dialog from './Dialog'
import { CancelButton, ValidateButton } from '../Button'
import { ButtonProps } from '../Button/Button.types'
import { DialogProps } from './Dialogs.types'
import { CancelIconButton } from '../IconButton'
import { makeStyles } from '@material-ui/core'
import AbsconsDialog from './AbsconsDialog'
export interface IDialogEdit extends DialogProps {
  children?: React.ReactNode;
  /**
   * Propriétés passé au bouton fermer
   */
  cancelButtonProps?: ButtonProps;
  /**
   * Propriétés passé au bouton valider
   */
  validateButtonProps?: ButtonProps;
  /**
   * Le titre de la boîte de dialogue
   * @default Modifier
   */
  title?: string;
}

const useStyles = makeStyles({
    actions: {
      background: '#FBFBFB',
      justifyContent: 'unset'
    },
    fullHeight: { height: '100%' },
    closeIcon: { textAlign: 'right', position: 'absolute', right: '16px', top: '12px' }
  })


const AbsconsDialogEdit = (props: IDialogEdit) => {
  const {
    children,
    name,
    actions,
    onClose,
    cancelButtonProps,
    validateButtonProps,
    closeButtonProps,
    title,
    haveButton = true,
    buttonsVariant = 'outlined',
    id,
    ...rest
  } = props

  const classes = useStyles()

  const realTitle = title
  const realName = `${id || name}-edit`
  const formId = `${realName}-form`

  let trueActions = haveButton ? actions || (
    <>
      <CancelButton onClick={onClose} variant={buttonsVariant} {...cancelButtonProps} />
      <ValidateButton variant={buttonsVariant} form={formId} {...validateButtonProps} />
    </>) : <CancelIconButton title='Fermer' tooltipProps={{ className: classes.closeIcon }} key='close' {...closeButtonProps} onClick={onClose} />
  

//   const trueActions = actions || (
//     <>
//       <CancelButton onClick={onClose} variant={buttonsVariant} {...cancelButtonProps} />
//       <ValidateButton variant={buttonsVariant} form={formId} {...validateButtonProps} />
//     </>
//   )
  return (
    <AbsconsDialog
      {...rest}
      actions={trueActions}
      onClose={onClose}
      name={realName}
      id={realName}
      title={realTitle}
      haveButton={haveButton}
    >
      {children}
    </AbsconsDialog>
  )
}

export default AbsconsDialogEdit
