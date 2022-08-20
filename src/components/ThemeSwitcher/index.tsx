import { Moon, Sun } from 'phosphor-react'
import { useThemeSwitcher } from '../../hooks/useThemeSwitcher'
import { ThemeSwitcherContainer } from './styles'

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeSwitcher()

  return (
    <ThemeSwitcherContainer type="button" onClick={toggleTheme}>
      {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
    </ThemeSwitcherContainer>
  )
}
