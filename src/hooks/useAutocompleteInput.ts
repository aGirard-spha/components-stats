import * as React from 'react'
/**
 * Hook utilitaire pour les champs 'Autocomplete'
 * @param initialValue {any} null
 * @param callback {any} null
 */
export const useAutocompleteInput = (initialValue: any = null, callback: any = null) => {
  const [value, setValue] = React.useState(initialValue)
  const onSelect = (item: any) => {
    setValue(item)
    if (callback) callback(item)
  }
  return { value, onSelect }
}

export default useAutocompleteInput
