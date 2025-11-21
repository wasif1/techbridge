import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Index from "./pages/Index";
import HRServices from "./pages/services/HRServices";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import SupplyChain from "./pages/services/SupplyChain";
import SaaSProducts from "./pages/services/SaaSProducts";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(217, 91%, 60%)',
    },
  },
  typography: {
    fontFamily: 'inherit',
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/hr" element={<HRServices />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/supply-chain" element={<SupplyChain />} />
            <Route path="/services/saas" element={<SaaSProducts />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
