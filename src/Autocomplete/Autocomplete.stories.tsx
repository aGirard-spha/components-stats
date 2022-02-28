// Generated with util/create-component.js
import React, { useState } from 'react'
import AutocompleteA from './Autocomplete'
import AutocompleteAddA from './AutocompleteAdd'

const suggestions = [
  { name: '' },
  { name: 'Afghanistan' },
  { name: 'Aland Islands' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'American Samoa' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Anguilla' },
  { name: 'Antarctica' },
  { name: 'Antigua and Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Aruba' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin' },
  { name: 'Bermuda' },
  { name: 'Bhutan' },
  { name: 'Bolivia, Plurinational State of' },
  { name: 'Bonaire, Sint Eustatius and Saba' },
  { name: 'Bosnia and Herzegovina' },
  { name: 'Botswana' },
  { name: 'Bouvet Island' },
  { name: 'Brazil' },
  { name: 'British Indian Ocean Territory' },
  { name: 'Brunei Darussalam' }
].map((x, idx) => ({ id: idx, name: x.name || '[VIDE]' }))

export default {
  title: 'Autocomplete'
}
export const Autocomplete = () => {
  const [state, setState] = useState(null)
  return (
    <AutocompleteA
      keys={['name']}
      value={state}
      onSelect={setState}
      suggestions={suggestions}
      labelFromKeys={['name']}
      textfieldProps={{ id: 'test', label: 'Test' }}
    />
  )
}

export const AutocompleteAdd = () => {
  const [state, setState] = useState(null)

  return (
    <AutocompleteAddA
      value={state}
      onSelect={setState}
      id='test'
      keys={['name']}
      suggestions={suggestions}
      labelFromKeys={['name']}
      textfieldProps={{ label: 'Test' }}
    />
  )
}
