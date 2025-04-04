import { ThemeProvider } from "@/components/theme-provider.jsx";
import  { Outlet } from "react-router-dom";
import Footer from '@/components/Footer.jsx';
function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Outlet />
      <Footer />
    </ThemeProvider>
     
  )
}

export default App;