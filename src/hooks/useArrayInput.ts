import { useState } from 'react'
import { uniqueId } from 'lodash'

const useArrayInput = <T extends {}>(
  initialValue: Array<T>,
  addValueTemplate: any,
  mustHaveOne?: boolean,
  callback: any = null
): any => {
  const [value, setValue] = useState(
    initialValue || (mustHaveOne ? [{ id: uniqueId(), ...addValueTemplate }] : [])
  )
  const addValue = () => {
    const newArray = [...value, { id: uniqueId(), ...addValueTemplate }]
    setValue(newArray)
    if (callback) callback(newArray)
  }
  const addExplicitValue = (newValue: T) => {
    const newArray = [...value, { ...newValue }]
    setValue(newArray)
    if (callback) callback(newArray)
  }
  const removeValue = (idx: number) => {
    const newArray = [...value.slice(0, idx), ...value.slice(idx + 1)]
    setValue(newArray)
    if (callback) callback(newArray)
  }
  const updateValue = (idx: number, key: string, newValue: T) => {
    const newArray = [
      ...value.slice(0, idx),
      { ...value[idx], [key]: newValue },
      ...value.slice(idx + 1)
    ]
    setValue(newArray)
    if (callback) callback(newArray)
  }
  return { value, addValue, addExplicitValue, removeValue, updateValue, setValue }
}

export default useArrayInput
