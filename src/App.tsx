import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import onboardingScreens from "./pages/onboardingScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<onboardingScreens.ScreenThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
