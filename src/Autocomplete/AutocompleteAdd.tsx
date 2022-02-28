// Generated with util/create-component.js
import React, { useCallback } from 'react'
import { Autocomplete as AutocompleteMUI } from '@material-ui/lab'
import { AutocompleteProps } from './Autocomplete.types'
import Fuse from 'fuse.js'
import TextField from '../TextField'
import Typography from '../Typography'

const getOptionLabel = (option: any, labelFromKeys: any) => {
  const label = option.label ? option.label : typeof labelFromKeys === 'function' ? labelFromKeys(option) : labelFromKeys
    .map((key: string) => key.split('.').reduce((accu: any, currentSubKey) => accu[currentSubKey], option))
    .join(' ')
    .trim()
  return label
}

const AutocompleteAdd = <T extends {}>(props: AutocompleteProps<T>) => {
  const {
    label,
    error,
    required,
    helperText, value, defaultValue, suggestions = [], threshold = 0.6, labelFromKeys = ['label'], keys = ['label'], textfieldProps = { variant: 'outlined' }, onSelect, ...rest
  } = props

  const filterOptions = useCallback((options, { inputValue }) => {
    let currentValue
    if (value || defaultValue) {
      currentValue = defaultValue || value
    }
    if (!currentValue && !inputValue) return suggestions
    const fuse = new Fuse(options, {
      shouldSort: true,
      keys,
      threshold,
      ignoreLocation: true
    })
    if (inputValue) {
      return [{
        id: '-1',
        isNew: true,
        label: inputValue
      }, ...fuse.search(inputValue)]
    }
    const label = getOptionLabel(currentValue, labelFromKeys)
    return fuse.search(label)
  }, [suggestions, keys, threshold, labelFromKeys, defaultValue, value])

  const handleOnChange = (_: any, value: any) => {
    if (value) onSelect({ ...value, label: getOptionLabel(value, labelFromKeys) })
    else onSelect(undefined)
  }

  return (
    <AutocompleteMUI
      value={value || null}
      defaultValue={defaultValue || null}
      onChange={handleOnChange}
      size='small'
      options={suggestions}
      filterOptions={filterOptions}
      openOnFocus
      getOptionSelected={(option, value) => value ? option.id === value.id : null}
      renderInput={(params) => <TextField {...params} label={label} error={error} helperText={helperText} required={required} {...textfieldProps} />}
      getOptionLabel={(option) => getOptionLabel(option, labelFromKeys)}
      renderOption={option => {
        const label = getOptionLabel(option, labelFromKeys)
        const isNew = option.id === '-1'
        if (isNew) {
          return (
            <>
              <Typography variant='subtitle2' color='primary' noWrap>AJOUTER&nbsp;:&nbsp;"{label}"</Typography>
            </>
          )
        }
        return (
          <Typography variant='body2' noWrap>{label}</Typography>
        )
      }}
      noOptionsText='Aucune Valeur'
      closeText='Fermer'
      {...rest}
    />
  )
}
export default AutocompleteAdd
