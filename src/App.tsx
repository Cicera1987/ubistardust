import {ThemeProvider} from "@stardust-ds/react"
import { customTheme } from "./components/atoms/Theme/theme";
import Routers from "./routers/Router";




function App() {
  return (
    <ThemeProvider theme={customTheme.neutrals}>
      <Routers/>
    </ThemeProvider>
  );
}

export default App;
