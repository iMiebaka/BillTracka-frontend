import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import auth from "./pages/auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<auth.PhoneNumberLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
