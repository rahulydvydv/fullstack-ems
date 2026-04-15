// src/data/dummyData.js

export const dummyEmployeeData = [
  {
    id: 1,
    firstName: "karan",
    lastName: "Prasad",
    email: "john.doe@example.com",
    phone: "9876543210",
    position: "Frontend Developer",
    department: "Engineering",
    salary: 40000,
    status: "Active"
  },
  {
    id: 2,
    firstName: "Vidhayak",
    lastName: "Yadav",
    email: "jane.smith@example.com",
    phone: "9123456780",
    position: "UI/UX Designer",
    department: "Design",
    salary: 35000,
    status: "Active"
  },
  {
    id: 3,
    firstName: "Sansad",
    lastName: "Yadav",
    email: "rahul.verma@example.com",
    phone: "9988776655",
    position: "Backend Developer",
    department: "Engineering",
    salary: 45000,
    status: "On Leave"
  },
  {
    id: 4,
    firstName: "MukhyaMantri",
    lastName: "Sharma",
    email: "priya.sharma@example.com",
    phone: "9090909090",
    position: "HR Manager",
    department: "HR",
    salary: 30000,
    status: "Active"
  }
]
// Admin Dashboard Dummy Data

export const dummyAdminData = {
  role: "Admin",
  admin: {
    firstName: "Rahul",
    lastName: "Yadav",
    email: "rahul.admin@example.com"
  },
  totalEmployees: 24,
  totalDepartment: 5,
  todayAttendance: 18,
  pendingLeaves: 3,
  recentActivities: [
    {
      id: 1,
      action: "Added new employee",
      name: "Amit Kumar",
      time: "2 hours ago"
    },
    {
      id: 2,
      action: "Approved leave",
      name: "Priya Sharma",
      time: "5 hours ago"
    },
    {
      id: 3,
      action: "Updated payroll",
      name: "System",
      time: "1 day ago"
    }
  ]
}