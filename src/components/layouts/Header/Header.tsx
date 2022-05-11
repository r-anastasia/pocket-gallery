import { useTranslation } from 'next-i18next'
// local libs
import { Link, LocaleSwitcher } from 'src/components/generic'
import { HeaderContainer, HeaderWrapper, Navigation, Logo } from './styles'

export const Header = () => {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <Link href="/" padding="5px 10px">
          <Logo>Pocket gallery</Logo>
        </Link>
        <Navigation>
          <Link href="/" padding="5px 10px">
            {t('header.navigation.link1')}
          </Link>
          <Link href="/" padding="5px 10px">
            {t('header.navigation.link2')}
          </Link>
        </Navigation>
        <LocaleSwitcher />
      </HeaderWrapper>
    </HeaderContainer>
  )
}
