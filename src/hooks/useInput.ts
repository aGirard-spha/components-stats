import { useState } from 'react'

/**
 * This callback type is called `callback` and is displayed as a global symbol.
 *
 * @callback callback
 */

/**
 * Hook utilitaire pour les champs 'Texte'
 * @param  {any} initialValue ""
 * @param {string} type  "string"
 * @param {callback} [callback] Fonction de rappel
 */
export const useInput = (
  initialValue: any = '',
  callback: any = null
): any => {
  const [value, setValue] = useState(initialValue)
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    setValue(newValue)
    if (callback) callback(newValue)
  }
  const forceChange = (newValue: string | number) => {
    setValue(newValue)
    if (callback) callback(newValue)
  }
  return [value, onChange, forceChange]
}

export default useInput
