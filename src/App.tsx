import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './contexts/CyclesContext'
import { ThemeSwitcherProvider } from './hooks/useThemeSwitcher'
import { Router } from './Router'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeSwitcherProvider>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeSwitcherProvider>
  )
}

export default App
