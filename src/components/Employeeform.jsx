import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { DEPARTMENT } from "../assets/department"
import { Loader2Icon } from "lucide-react"



const Employeeform = ({ initialData, onsuccuss, onCancel }) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const isEditMode = !!initialData;
    const handleSubmit = async (e) => {
        e.preventDefault()
    }


    return (

        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl animate-fade-in">
            {/* {personal Information } */}
            <div className="card p-5 sm:p-6">
                <h3 className="font-medium mb-6 pb-4 border-b border-slate-100">Personal Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">
                    <div>
                        <label className="block mb-2">First Name</label>
                        <input name="firstName" required defaultValue={initialData?.firstName} />
                    </div>
                    <div>
                        <label className="block mb-2">Last Name</label>
                        <input name="lastName" required defaultValue={initialData?.lastName} />
                    </div>
                    <div>
                        <label className="block mb-2">Phone Number</label>
                        <input name="phone" required defaultValue={initialData?.phone} />
                    </div>
                    <div>
                        <label className="block mb-2">Join Date</label>
                        <input type="date" name='joinDate' required defaultValue={initialData?.joinDate ? new Date(initialData.joinDate).toISOString().split("T")[0] : ""} />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="bio" className="block mb-2">
                            Bio (optional)
                        </label>

                        <textarea
                            id="bio"
                            name="bio"
                            defaultValue={initialData?.bio || ""}
                            rows={3}
                            placeholder="Brief description..."
                            className="w-full border rounded-lg p-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                </div>
            </div>
            {/* {Emaployee Details} */}
            <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-6 border-b pb-3">
                    Employee Details
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                    {/* Department */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">
                            Department
                        </label>
                        <select
                            name="department"
                            defaultValue={initialData?.department || ""}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            <option value="">Select Department</option>
                            {DEPARTMENT.map((deptName) => (
                                <option key={deptName} value={deptName}>
                                    {deptName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Position */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">
                            Position
                        </label>
                        <input
                            type="text"
                            name="position"
                            required
                            defaultValue={initialData?.position}
                            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Basic Salary */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">
                            Basic Salary
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                            <input
                                type="number"
                                name="basicSalary"
                                min="0"
                                step="1"
                                required
                                defaultValue={initialData?.basicSalary || ""}
                                className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Allowances */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">
                            Allowances
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                            <input
                                type="number"
                                name="allowances"
                                min="0"
                                step="1"
                                required
                                defaultValue={initialData?.allowances || ""}
                                className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Deductions */}
                    <div>
                        <label className="block text-sm font-medium mb-1 text-gray-600">
                            Deductions
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-2.5 text-gray-500">₹</span>
                            <input
                                type="number"
                                name="deductions"
                                min="0"
                                step="1"
                                required
                                defaultValue={initialData?.deductions || ""}
                                className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Status */}

                    {isEditMode && (
                        <div>
                            <label className="block text-sm font-medium mb-1 text-gray-600">
                                Status
                            </label>
                            <select
                                name="employmentStatus"
                                defaultValue={initialData?.employmentStatus}
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            >
                                <option value="ACTIVE">Active</option>
                                <option value="INACTIVE">Inactive</option>
                            </select>
                        </div>
                    )}
                </div>
            </div>

            {/*{Account setup}*/}

            <div className="card p-5 sm:p-6">
                <h3 className="text-base font-medium text-slate-900 mb-6 pb-4 border-b border-slate-100">
                    Personal Information
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-slate-700">

                    {/* Email (Full Width) */}
                    <div className="sm:col-span-2">
                        <label className="block mb-2">Work Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            defaultValue={initialData?.email}
                            className="w-full border border-gray-300 rounded-lg px-3 h-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        />
                    </div>

                    {/* Password */}
                    {!isEditMode && (
                        <div>
                            <label className="block mb-2">Temporary Password</label>
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full border border-gray-300 rounded-lg px-3 h-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                    )}

                    {isEditMode && (
                        <div>
                            <label className="block mb-2">Change Password (optional)</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Leave blank to keep current"
                                className="w-full border border-gray-300 rounded-lg px-3 h-10 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                            />
                        </div>
                    )}

                    {/* System Role */}
                    <div>
                        <label className="block mb-2">System Role</label>
                        <select
                            name="role"
                            defaultValue={initialData?.user?.role || "EMPLOYEE"}
                            className="w-full border border-gray-300 rounded-lg px-3 h-10 bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                        >
                            <option value="EMPLOYEE">Employee</option>
                            <option value="ADMIN">Admin</option>
                        </select>
                    </div>

                </div>
            </div>

            {/* {buttons} */}

            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-2">

                <button
                    type="button"
                    onClick={() => (onCancel ? onCancel() : navigate(-1))}
                    className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-900 text-white px-4 py-2 rounded flex items-center justify-center disabled:opacity-50"
                >
                    {loading && (
                        <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                    )}
                    {isEditMode ? "Update Employee" : "Create Employee"}
                </button>
            
            </div>
        </form>
    )
}

export default Employeeform