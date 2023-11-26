import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Home from "./pages/homePage/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
