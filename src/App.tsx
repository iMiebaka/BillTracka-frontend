import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import auth from "./pages/auth";
import homePage from "./pages/homePage";
import frontendRoute from "./services/routes/frontend";
import morePage from "./pages/morePage";
import { MasterContextProvider } from "./store/main";

function App() {
  return (
    <MasterContextProvider>
      <BrowserRouter>
        <Routes>
          {/* <Route path={frontendRoute.landingPage} element={<homePage.Home />} /> */}
          <Route path={frontendRoute.login} element={<auth.EmailLogin />} />
          <Route path={frontendRoute.register} element={<auth.EmailSignUp />} />
          <Route
            path={frontendRoute.landingPage}
            element={<homePage.LandingPage />}
          >
            <Route path={""} element={<homePage.Home />} />
            <Route
              path={frontendRoute.taskSummary}
              element={<homePage.Task />}
            />
            <Route
              path={frontendRoute.invoiceSummary}
              element={<homePage.Invoice />}
            />
            <Route
              path={frontendRoute.clientSummary}
              element={<homePage.Client />}
            />
            <Route
              path={frontendRoute.more}
              element={<morePage.LandingPage />}
            />
          </Route>
          <Route path={frontendRoute.report} element={<morePage.Products />} />
          <Route path={frontendRoute.invoiceCreated} element={<homePage.InvoiceAdded />} />
          <Route
            path={frontendRoute.reminder}
            element={<morePage.Reminders />}
          />
          <Route path={frontendRoute.taskNew} element={<homePage.AddTask />} />
          <Route
            path={frontendRoute.clientNew}
            element={<homePage.AddClient />}
          />
          <Route
            path={frontendRoute.invoiceNew}
            element={<homePage.AddInvoice />}
          />
        </Routes>
      </BrowserRouter>
    </MasterContextProvider>
  );
}

export default App;
