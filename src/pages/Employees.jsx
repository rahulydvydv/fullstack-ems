import { useCallback, useEffect, useState } from "react"
import { dummyEmployeeData } from "../assets/assets"
import { Plus, Search, X } from "lucide-react"
import { DEPARTMENT } from "../assets/department"
import EmployeeCard from "../components/EmployeeCard"
import Employeeform from "../components/Employeeform"

const Employees = () => {
  const [employees, setEmployees] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("");
  const [selectDept, setSelectDept] = useState("")
  const [editEmployee, setEditEmployee] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false)


  const fetchEmployees = useCallback(async () => {
    setLoading(true)
    setEmployees(dummyEmployeeData.filter((emp) => (selectDept ? emp.department === selectDept : emp)))
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  useEffect(() => {
    fetchEmployees();
  }, [])

  const filtered = employees.filter((emp) => `${emp.firstName} ${emp.lastName} ${emp.position}`.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="animate-fade-in p-6 max-w-7xl mx-auto">

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">

        <div>
          <h1 className="text-2xl font-bold text-slate-900">Employees</h1>
          <p className="text-slate-500">Manage your team members</p>
        </div>

        <button onClick={() => setShowCreateModal(true)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow w-full sm:w-auto justify-center">
          <Plus size={16} /> Add Employee
        </button>
      </div>
      {/* {search bar} */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">

        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />

          <input
            placeholder="Search employee..."
            className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>

        <select
          value={selectDept}
          onChange={(e) => setSelectDept(e.target.value)}
          className="px-4 py-3 border border-slate-200 rounded-xl bg-white shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Department</option>
          {DEPARTMENT.map((deptName) => (
            <option key={deptName} value={deptName}>
              {deptName}
            </option>
          ))}
        </select>

      </div>
      {/* {employee card} */}
      {loading ? (
        <div className="flex justify-center p-12">
          <div className="animate-spin h-8 w-8 border-2 border-indigo-600 border-t-transparent rouded-full" />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {filtered.length === 0 ? (
            <p className="col-span-full text-center py-16 text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
              NO employees found
            </p>
          ) : (
            filtered.map((emp) => (
              <EmployeeCard
                key={emp.id}
                employee={emp}
                onDelete={fetchEmployees}
                onEdit={(e) => setEditEmployee(e)}
              />
            ))
          )}
        </div>
      )}
      {/* {Create Employee Model} */}
      {showCreateModal && (
        <div className=" fixed bg-black/40 backdrop-blur-sm inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto" onClick={() =>
          setShowCreateModal(false)}>
          <div className="fixed inset-0" />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-6 pb-0">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Add New Employee</h2>
                <p className="text-sm text-slate-500 mt-0.5"> Create a user account and empployee profile</p>
              </div>
              <button onClick={() => setShowCreateModal(false)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
                <X className='w-5 h-5' />
              </button>
            </div>
            <div className="p-6">
              <Employeeform
                onsuccuss={() => {
                  setShowCreateModal(false);
                  fetchEmployees();
                }} onCancel={() => setShowCreateModal(false)} />
            </div>
          </div>

        </div>
      )}
      {/* {Edit Employee Model} */}

      {editEmployee && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 overflow-y-auto bg-black/40 backdrop-blur-sm" onClick={() => setEditEmployee(null)}>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl my-8 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className=" flex items-center justify-between p-6 pb-0">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Edit Employee</h2>
                <p className="text-sm text-slate-500 mt-0.5">Update employee details</p>
              </div>
              <button onClick={() => setEditEmployee(null)} className="p-2 rounded-lg hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600">
                <X className='w-5 h-5' />
              </button>
            </div>
            <div className="p-6">
              <Employeeform
                initialData={editEmployee} onsuccuss={() => {
                  setEditEmployee(null);
                  fetchEmployees();
                }} onCancel={() => setEditEmployee(null)} />

            </div>

          </div>

        </div>



      )
      }
    </div >
  )
}

export default Employees