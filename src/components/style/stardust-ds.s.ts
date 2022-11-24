import { customTheme } from "../atoms/Theme/theme";

type Theme = typeof customTheme;

declare module "@stardust-ds/react" {
  export interface StardustTheme extends Theme {}
  export function useTheme(): Theme;
}