
import { ThemeProvider, extendTheme } from "@stardust-ds/react";

export const theme = {
  color: {
    primary: {
      pure: "red",
    },
    ubistart: "blue",
  },
};


export const customTheme = extendTheme(theme);
