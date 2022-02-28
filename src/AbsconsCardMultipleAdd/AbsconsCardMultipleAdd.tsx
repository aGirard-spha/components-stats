import React from 'react'
import { FormHelperText, Checkbox, Divider, Box, IconButton } from '@material-ui/core'
import clsx from 'clsx'
import { PlusIconButton, DeleteIconButton } from '../IconButton'
import Card from '../Card'
import StackHorizontal from '../StackHorizontal'
import Stack from '../Stack'
import { useFlexStyles, useGlobalStyles } from '../styles'
import { FormCheckbox } from '../Checkboxes'
import { Body2Typography, BoldTypography } from '../Typography'
import Paper from '../Paper'
import { AbsconsCardMultipleAddProps } from './AbsconsCardMultipleAdd.types'

const AbsconsCardMultipleAdd: React.FC<AbsconsCardMultipleAddProps> = props => {
  const {
    title = 'Ajout Multiple',
    disabled = false,
    onClickAdd,
    onClickRemove,
    children,
    className,
    error,
    hasDivider = false,
    plusButtonProps = {},
    headerComponent,
    titleComponent = BoldTypography,
    variantButton = 'outlined',
    ...rest
  } = props
  const flexClasses = useFlexStyles()
  return (
    <>
      <Stack spacing={1}>
        <StackHorizontal fullHeight={false} justify='space-between'>
          <Box component={titleComponent}>{title}</Box>
          <StackHorizontal spacing={1} fullWidth={false}>
            {headerComponent}
            <PlusIconButton variant={variantButton} disabled={disabled} onClick={onClickAdd} {...plusButtonProps} />
          </StackHorizontal>
        </StackHorizontal>
        <Divider />
        <Stack spacing={1.5}>
          {React.Children.map(children, (child, index) => {
            return (
              <>
                <StackHorizontal fullHeight={false} spacing={2} key={index}>
                  <div className={flexClasses.remainingSpace}>{child}</div>
                  <DeleteIconButton
                    variant={variantButton}
                    disabled={disabled}
                    onClick={() => onClickRemove(index)}
                  />
                </StackHorizontal>
                {hasDivider
                  ? (
                    <Divider />
                  )
                  : null}
              </>
            )
          })}
        </Stack>
      </Stack>
      {error && <FormHelperText error={!!error}>{error}</FormHelperText>}
    </>
  )
}

export default AbsconsCardMultipleAdd
