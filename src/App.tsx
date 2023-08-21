import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Em construção...</h1>
      <GlobalStyle />
    </ThemeProvider>
  );
}
