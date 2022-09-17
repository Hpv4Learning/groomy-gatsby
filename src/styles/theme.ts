import { createGlobalStyle } from "styled-components";

export const useCustomTheme = () => ({
  colors: {
    yellow: {
      300: "#FDFBF7",
      400: "#FAF3E3",
      500: "#FDE8A2",
    },
    orange: {
      400: "#F16529",
      hover: "#F28354",
    },
    purple: {
      400: "#55328C",
      hover: "#61468C",
    },
  },
  shadow: {
    light: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    heavy: "drop-shadow(0px 80px 60px rgba(0, 0, 0, 0.15))",
  },
  fontWeight: {
    semibold: 400,
    heavy: 700,
  },
});

export type ThemeType = ReturnType<typeof useCustomTheme>;

export const GlobalStyle = createGlobalStyle({
  body: {
    fontFamily: "Poppins",
  },
});
