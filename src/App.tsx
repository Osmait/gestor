import {BrowserRouter,Route,Routes}from "react-router-dom"
import { AuthProvider } from "./Context/AuthProvider"
import { BuggetProvider } from "./Context/BudgetProvider"
import { RouteProtect } from "./layout/RouteProtect"
import { Index } from "./page/Index"
import { Login } from "./page/Login"
function App() {


  return (
  <BrowserRouter>
  <AuthProvider>
    <BuggetProvider>
  <Routes>
    <Route path="/login" element= {<Login/>}/>
    <Route path="/" element = {<RouteProtect/>}>
    <Route index element={<Index/>}/>
    </Route>
  </Routes>
    </BuggetProvider>
  </AuthProvider>
  </BrowserRouter>
  )
}

export default App
