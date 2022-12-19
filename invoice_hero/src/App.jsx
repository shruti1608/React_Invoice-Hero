import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import CurrencySettings from "./pages/CurrencySettings";
import Dashboard from "./pages/dashboard";
import Pricing from "./pages/Pricing";
import Settings from "./pages/settings";
import Support from "./pages/support";
import TaxSettings from "./pages/taxSettings";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />
          <Route
            path="/settings/currency-settings"
            element={<CurrencySettings />}
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/settings/tax-settings" element={<TaxSettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
