import { customTheme } from "../atoms/Theme/theme";

type Theme = typeof customTheme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}