import { ThemeProvider } from "@/components/theme-provider.jsx";
import  { Outlet } from "react-router-dom";
import { PoemPage } from "./pages";

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <PoemPage />
    </ThemeProvider>
  )
}

export default App;