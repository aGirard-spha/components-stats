import { useState } from 'react'

/**
 * Hook utilitaire pour les champs 'Boîte à Cocher'
 */
export const useCheckboxInput = (initialValue: boolean = false, callback: any = null): any => {
  const [checked, setChecked] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
    setChecked(checked)
    if (callback) callback(checked)
  }
  return { checked, onChange, handleOnChange: onChange }
}

export default useCheckboxInput
