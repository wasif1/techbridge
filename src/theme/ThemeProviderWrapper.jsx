import React, { createContext, useMemo, useState, useContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeToggleContext = createContext();

export function useThemeToggle() {
  return useContext(ThemeToggleContext);
}

export function ThemeProviderWrapper({ children }) {
  const [mode, setMode] = useState("light");
  const toggle = () => setMode((m) => (m === "light" ? "dark" : "light"));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: { main: "#1976D2" },
          background: { default: mode === "light" ? "#f5f7fb" : "#121212" },
        },
        components: {
          MuiButton: { defaultProps: { disableElevation: true } },
        },
      }),
    [mode]
  );

  return (
    <ThemeToggleContext.Provider value={{ mode, toggle }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeToggleContext.Provider>
  );
}
