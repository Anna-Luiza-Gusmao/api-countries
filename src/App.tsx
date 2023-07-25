import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from "react-router-dom"
import { Routers } from "./Routers"
import { Header } from "./components/Header"

export function App() {
  const {
    chosenTheme,
    renderHeader
  } = Header()

  return (
    <ThemeProvider theme={chosenTheme}>
      <BrowserRouter>
        {renderHeader}
        <Routers />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
