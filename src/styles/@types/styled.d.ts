import "styled-components"
import { lightTheme } from "../themes/light"

type LightThemeType = typeof lightTheme

declare module "styled-components" {
  export interface DefaultTheme extends LightThemeType {}
}
