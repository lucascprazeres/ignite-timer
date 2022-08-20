import { createContext, ReactElement, useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme, lightTheme } from '../styles/themes'

type Theme = 'light' | 'dark'

type ThemeSwitcherContextData = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeSwitcherContext = createContext({} as ThemeSwitcherContextData)

export function useThemeSwitcher(): ThemeSwitcherContextData {
  const context = useContext(ThemeSwitcherContext)

  return context
}

interface ThemeSwitcherProviderProps {
  children: ReactElement[]
}

export function ThemeSwitcherProvider(props: ThemeSwitcherProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeSwitcherContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeSwitcherContext.Provider>
  )
}
