import * as React from 'react'
import { CancelButton, ValidateButton } from '../Button'
import Dialog from './Dialog'
import { ButtonProps } from '../Button/Button.types'
import { DialogProps } from './Dialogs.types'

export interface IDialogDelete extends DialogProps {
  children?: React.ReactNode;
  /**
   * Propriétés à passer au bouton fermer
   */
  cancelButtonProps?: ButtonProps;
  /**
   * Propriétés à passer au bouton valider
   */
  validateButtonProps?: ButtonProps;
  /**
   * Le titre de la boîte de dialogue
   * @default Supprimer
   */
  title?: string;
  onClick?: any
}

const DialogDelete = (props: IDialogDelete) => {
  const {
    children,
    name,
    actions,
    title,
    onClose,
    onClick,
    cancelButtonProps,
    validateButtonProps,
    id,
    buttonsVariant = 'outlined',
    ...rest
  } = props
  const realtitle = title || 'Supprimer'
  const realname = `${id || name}-delete`
  const trueActions = actions || (
    <>
      <CancelButton onClick={onClose} variant={buttonsVariant} {...cancelButtonProps} />
      <ValidateButton onClick={onClick} variant={buttonsVariant} type='button' {...validateButtonProps} />
    </>
  )
  return (
    <Dialog
      {...rest}
      actions={trueActions}
      title={realtitle}
      onClose={onClose}
      name={realname}
      id={realname}
    >
      {children}
    </Dialog>
  )
}

export default DialogDelete
