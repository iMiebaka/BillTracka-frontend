import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import homePage from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<homePage.InvoiceAdded />} />
        {/* <Route path="" element={<homePage.LandingPage />}>
          <Route path="" element={<homePage.AddInvoice />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
