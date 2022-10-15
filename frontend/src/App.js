import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import NotFound from './pages/NotFound';
import Layout from './components/Layout';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  typography: {
    fontFamily: "Nunito,Roboto,sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes element={<Layout />}>
        {/* <Route path="/" element={<App />} /> */}
        {/* <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
