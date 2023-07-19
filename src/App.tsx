import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"

export function App() {
  const {
    chosenTheme,
    renderHeader
  } = Header()

  return (
    <ThemeProvider theme={chosenTheme}>
      {renderHeader}
      
      <GlobalStyle />
    </ThemeProvider>
  )
}
