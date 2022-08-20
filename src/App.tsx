import { BrowserRouter } from 'react-router-dom'
import { ThemeSwitcherProvider } from './hooks/useThemeSwitcher'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeSwitcherProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeSwitcherProvider>
  )
}

export default App
