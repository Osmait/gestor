import {BrowserRouter,Route,Routes}from "react-router-dom"
import { AuthProvider } from "./Context/AuthProvider"
import { BuggetProvider } from "./Context/BudgetProvider"
import { AuthLayout } from "./layout/AuthLayout"
import { RouteProtect } from "./layout/RouteProtect"
import { CreateBill } from "./page/CreateBill"
import { CreateIncome } from "./page/CreateIncome"
import { Index } from "./page/Index"
import { Login } from "./page/Login"
function App() {


  return (
  <BrowserRouter>
  <AuthProvider>
    <BuggetProvider>
  <Routes>
    
    <Route path="/login" element= {<AuthLayout/>}>
    <Route index element={<Login/>}/>
    </Route>
    
    
    <Route path="/" element = {<RouteProtect/>}>
    <Route index element={<Index/>}/>
    <Route path="/create-bill" element ={<CreateBill/>}/>
    <Route path="/create-income" element={<CreateIncome/>}/>
    </Route>
  </Routes>
    </BuggetProvider>
  </AuthProvider>
  </BrowserRouter>
  )
}

export default App
