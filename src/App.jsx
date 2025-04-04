import { ThemeProvider } from "@/components/theme-provider.jsx";
import  { Outlet } from "react-router-dom";

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Outlet />
    </ThemeProvider>
  )
}

export default App;