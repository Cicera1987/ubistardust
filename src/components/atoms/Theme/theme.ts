import {extendTheme } from "@stardust-ds/react";

export const theme = {
  color: {
    primary: {
      pure: "red",
    },
    ubistart: "blue",
  },
};

export default extendTheme({
  neutrals: {
    gray1: "#CCC",
    pureBlack: "#000",
    pureWhite: "#FFF",
  },

  colors: {
    transparent: "transparent",
    primary: {
      pure: "red",
    },  
  },
  
});

export const customTheme = extendTheme(theme);
