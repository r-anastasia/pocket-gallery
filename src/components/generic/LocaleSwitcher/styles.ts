import { StylesConfig } from 'react-select'
// types
import type { LocaleSwitcherData } from './types'

export const customStylesForSelect: StylesConfig<LocaleSwitcherData> = {
  container: (provided) => ({
    ...provided,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '12px',
    fontWeight: '500',
  }),
  control: (provided) => ({
    ...provided,
    backgroundColor: 'none',
    border: 'none',
    cursor: 'pointer',
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: '#FFFFFF',
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    width: 'none',
    margin: '0px',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: 'none',
    border: 'none',
    cursor: state.isSelected ? 'not-allowed' : 'pointer',
    color: state.isSelected ? '#ffffff91' : '#FFFFFF',
    padding: '8px 7px',
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: 'none',
    border: 'none',
    boxShadow: 'none',
    padding: '0px',
  }),
  singleValue: (provided) => ({
    ...provided,
    margin: '0px',
    color: '#FFFFFF',
  }),
}
