import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import homePage from "./pages/homePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="" element={<Extra />} /> */}
        <Route path="" element={<homePage.LandingPage />}>
          <Route path="" element={<homePage.AddClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
