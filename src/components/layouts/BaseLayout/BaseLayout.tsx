import React from 'react'
// local libs
import { Header } from '../Header'
import { BaseLayoutContainer, BaseWrapper, PageContent } from './styles'
//types
import type { BaseLayoutProps } from './types'

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <BaseLayoutContainer>
      <BaseWrapper>
        <Header />
        <PageContent>{children}</PageContent>
      </BaseWrapper>
    </BaseLayoutContainer>
  )
}
