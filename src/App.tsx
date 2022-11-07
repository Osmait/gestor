import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/AuthProvider";
import { BuggetProvider } from "./Context/BudgetProvider";
import { AuthLayout } from "./layout/AuthLayout";
import { RouteProtect } from "./layout/RouteProtect";
import { CreateBill } from "./page/CreateBill";
import { CreateIncome } from "./page/CreateIncome";
import { Index } from "./page/Index";
import { Login } from "./page/Login";
import { Registro } from "./page/Registro";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <BuggetProvider>
          <Routes>
            <Route path="/login" element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path="/registrar" element={<Registro />} />

            <Route path="/" element={<RouteProtect />}>
              <Route index element={<Index />} />
              <Route path="/create-bill" element={<CreateBill />} />
              <Route path="/create-income" element={<CreateIncome />} />
              <Route path="/bill/edite/:id" element={<CreateBill />} />
              <Route path="/income/edite/:id" element={<CreateIncome />} />
            </Route>
          </Routes>
        </BuggetProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
