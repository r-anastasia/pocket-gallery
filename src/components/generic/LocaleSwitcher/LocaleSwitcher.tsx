import { useRouter } from 'next/router'
import Select from 'react-select'
// local libs
import { customStylesForSelect } from './styles'
// types

export const LocaleSwitcher = () => {
  const router = useRouter()
  const { locales } = router
  //const otherLocales = locales?.filter((locale) => locale !== activeLocale)
  const options = locales?.map((locale) => ({
    value: `${locale}`,
    label: `${locale}`,
  }))

  //console.log('activeLocale', activeLocale)

  return (
    <Select
      styles={customStylesForSelect}
      //components={{ Option }}
      defaultValue={options?.[0]}
      options={options}
    />
  )
}
