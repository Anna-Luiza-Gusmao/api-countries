import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { lightTheme } from "./styles/themes/light"

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
