
import { useEffect, useState } from "react"
import Loading from "../components/Loading"
import EmployeesDashboard from "../components/EmployeesDashboard"
import AdminDashboard from "../components/AdminDashboard"

const Dashboard = () => {
  const [data,setData] = useState(null)
  const [loading , setLoading] = useState(true)
 const dummyemployeeDashboadData = {
  role: "Admin",
  Employee: {
    firstname: "John",
    lastname: "Doe",
    position: "Developer",
    department: "HR"
  },
  currentMonthAttendance: 18,
  pendingLeaves: 1,
  latestPayslip: {
    netSalary: 30000
  }
}


  useEffect(()=>{
    setData(dummyemployeeDashboadData)
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])

  if(loading)return <Loading/>
  if(!data)return <p className="text-center text-slate-500 py-12">Failed to load Dashboard</p>
  if(data.role ==="Admin"){
    return <AdminDashboard data={data}/>
  }
  else{
    return <EmployeesDashboard data={data}/>
  }
}

export default Dashboard