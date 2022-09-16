import React from "react";
import { useCustomTheme } from "./src/styles/theme";
import { ThemeProvider } from "styled-components";

export const useWrapWithProvider = ({
  element,
}: {
  element: React.ReactNode;
}) => {
  const theme = useCustomTheme();
  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </React.StrictMode>
  );
};
