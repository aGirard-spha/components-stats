// Generated with util/create-component.js
import React, { Fragment } from 'react'
import DialogA from './Dialog'
import DialogAddA from './DialogAdd'
import AbsconsDialogAddA from './AbsconsDialogAdd'
import AbsconsDialogEditA from './AbsconsDialogEdit'
import DialogFullA from './DialogFull'
import DialogEditA from './DialogEdit'
import AbsconsDialogA from './AbsconsDialog'
import useDialog from '../hooks/useDialog'
import Button, { ValidateButton } from '../Button'
import Typography from '../Typography'
import Form from '../Form'
import { TextField } from '@material-ui/core'
export default {
  title: 'Dialogs'
}
export const Dialog = () => {
  const { open, handleOnClick, handleOnClose } = useDialog()
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <DialogA disableBackdropClick name='test' title='coucou' haveButton open={open} onClose={handleOnClose}>
        <Typography>Test</Typography>
        <TextField>coucou</TextField>
      </DialogA>
    </>
  )
}

export const DialogAdd = () => {
  const { open, handleOnClick, handleOnClose } = useDialog()
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <DialogAddA name='test' id='test' open={open} onClose={handleOnClose}><Form id='test-add-form' onSubmit={handleOnClose} /></DialogAddA>
    </>
  )
}

export const EditDialog = () => {
  const { open, handleOnClick, handleOnClose } = useDialog()
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <DialogEditA name='test2' open={open} onClose={handleOnClose}><Form id='test-add-form' onSubmit={handleOnClose} /></DialogEditA>
    </>
  )
}

export const DialogFull = () => {
  const { open, handleOnClick, handleOnClose } = useDialog()
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <DialogFullA name='test' id='test' open={open} onClose={handleOnClose}><Form id='test-add-form' onSubmit={handleOnClose} /></DialogFullA>
    </>
  )
}

export const AbsconsDialog = () => {
  const { open, handleOnClick, handleOnClose } = useDialog()
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <AbsconsDialogA
        name='test'
        id='test'
        haveButton={false}
        open={open}
        type='Add'
      >
        <Form id='test-add-form' onSubmit={handleOnClose} />
      </AbsconsDialogA>
    </>
  )
}

export const AbsconsDialogAdd = () => {
  const { open, handleOnClick, handleOnClose } = useDialog()
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <AbsconsDialogAddA name='test' id='test' open={open} haveButton={false} title='yes' onClose={handleOnClose}><Form id='test-add-form' onSubmit={handleOnClose} /></AbsconsDialogAddA>
    </>
  )
}

export const AbsconsEditDialog = () => {
  const { open, handleOnClick, handleOnClose } = useDialog()
  return (
    <>
      <Button title='Ouvrir' onClick={handleOnClick} />
      <AbsconsDialogEditA name='test2' haveButton={false} open={open} onClose={handleOnClose}><Form id='test-add-form' onSubmit={handleOnClose} /></AbsconsDialogEditA>
    </>
  )
}
