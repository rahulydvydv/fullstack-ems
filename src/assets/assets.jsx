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
  // Dummy Leave Data
  export const dummyLeaveData = [
    {
      id: 1,
      employeeId: 2,
      name: "Vidhayak Yadav",
      type: "Sick Leave",
      startDate: "2026-04-10",
      endDate: "2026-04-12",
      status: "Approved",
      reason: "Fever and cold"
    },
    {
      id: 2,
      employeeId: 3,
      name: "Sansad Yadav",
      type: "Casual Leave",
      startDate: "2026-04-15",
      endDate: "2026-04-16",
      status: "Pending",
      reason: "Personal work"
    },
    {
      id: 3,
      employeeId: 4,
      name: "MukhyaMantri Sharma",
      type: "Earned Leave",
      startDate: "2026-04-18",
      endDate: "2026-04-20",
      status: "Rejected",
      reason: "Insufficient leave balance"
    }
  ];

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

export const getDayTypeDisplay = (status) => {
  const map = {
    PRESENT: "Work Day",
    LATE: "Late Arrival",
    ABSENT: "Absent",
    "ON LEAVE": "Leave"
  };

  return map[String(status).toUpperCase()] || "-";
};