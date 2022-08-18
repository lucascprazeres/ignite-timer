import { HeaderContainer, Link, Navigation } from './styles'

import igniteLogo from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={igniteLogo} alt="" />
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
