// Generated with util/create-component.js
import React from 'react'

import TextFieldA from './TextField'
import StandardTextFieldA from './StandardTextField'
import OutlinedTextFieldA from './OutlinedTextField'
import FilledTextFieldA from './FilledTextField'

import DateFieldA from './DateField'
import DateTimeFieldA from './DateTimeField'
import NumberFieldA from './NumberField'
import SearchFieldA from './SearchField'
import LoginFieldA from './LoginField'
import PasswordFieldA from './PasswordField'

export default {
  title: 'TextField'
}

export const DefaultTextField = () => <TextFieldA />
export const StandardTextField = () => <StandardTextFieldA />
export const OutlinedTextField = () => <OutlinedTextFieldA />
export const FilledTextField = () => <FilledTextFieldA />

export const DateField = () => <DateFieldA />
export const DateTimeField = () => <DateTimeFieldA />
export const NumberField = () => <NumberFieldA min={0} max={2} step={0.1} />
export const SearchField = () => <SearchFieldA min={0} max={2} step={0.1} />
export const LoginField = () => <LoginFieldA />
export const PasswordField = () => <PasswordFieldA />
