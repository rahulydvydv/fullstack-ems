import { Toaster } from "react-hot-toast"
import { Route, Routes , Navigate , } from "react-router-dom"
import Layout from "./pages/Layout"
import Login from "./pages/Login"
import Addendance from "./pages/Addendance"
import Leave from "./pages/Leave"
import Settings from "./pages/Settings"
import Payslips from "./pages/Payslips"
import PrintPayslip from "./pages/PrintPayslip"
import Dashboard from "./pages/Dashboard"
import Employees from "./pages/Employees"
import Loginform from "./components/Loginform"

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/login/admin" element={<Loginform roll="adimi" tittle="Admin Portal"  subtitle="Sign in to manage the organization" />} />
        <Route path="/login/employee" element={<Loginform role="employee" tittle="Employee Portal"  subtitle="Sign in  to access your account" />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Addendance />} />
          <Route path="/leave" element={<Leave/>} />
          <Route path="/payslips" element={<Payslips/>} />
          <Route path = "/settings" element = {<Settings/>} />

        </Route>
        <Route path="/print/payslips/:id" element={<PrintPayslip />} />
         <Route path = "/*" element = {<Navigate to = "/dashboard" replace />} />

      </Routes>

    </>
  )
}

export default App