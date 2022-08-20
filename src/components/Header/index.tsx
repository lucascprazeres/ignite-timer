import { HeaderContainer, Link, LogoContainer, Navigation } from './styles'

import igniteLogo from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { ThemeSwitcher } from '../ThemeSwitcher'

export function Header() {
  return (
    <HeaderContainer>
      <LogoContainer>
        <img src={igniteLogo} alt="" />
        <ThemeSwitcher />
      </LogoContainer>
      <Navigation>
        <Link to="/" title="Timer">
          <Timer size={24} />
        </Link>
        <Link to="/history" title="Histórico">
          <Scroll size={24} />
        </Link>
      </Navigation>
    </HeaderContainer>
  )
}
