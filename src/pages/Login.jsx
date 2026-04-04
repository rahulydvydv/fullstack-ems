import { Link } from "react-router-dom";
import LoginLeftside from "../components/LoginLeftside"
import { User as UserIcon, Shield as ShieldIcon, ArrowRight } from "lucide-react";

const Login = () => {
  const portalOptions = [
    {
      to: "login/admin",
      title: "Admin Portal",
      description: "Manage employees, department, payroll, and system configuration.",
      icon: ShieldIcon
    },
    {
      to: "login/employee",
      title: "Employee Portal",
      description: "View your profile, track attendance, request time off, and access payslips",
      icon: UserIcon
    }
  ]

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      
      <LoginLeftside />

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen">
        
        <div className="w-full max-w-md animate-fade-in relative z-10">
          
          {/* Header */}
          <div>
            <h2 className="text-3xl font-medium text-slate-900 mb-3">
              Welcome Back
            </h2>
            <p className="text-slate-500">
              Select your portal to securely access the system.
            </p>
          </div>

          {/* Portal List */}
          <div className="space-y-4 mt-6">
            {portalOptions.map((portal) => {
              const Icon = portal.icon;

              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="group block bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-6 transition-all duration-300 hover:border-indigo-400 hover:bg-indigo-50"
                >
                  <div className="flex items-center justify-between">
                    
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-5 h-5 text-indigo-600" />
                        <h3 className="text-lg font-medium text-slate-800 group-hover:text-indigo-600">
                          {portal.title}
                        </h3>
                      </div>
                      <p className="text-sm text-slate-500">
                        {portal.description}
                      </p>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all duration-300" />
                  
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Footer */}

          <div className="mt-12 text-center md:text-left text-sm text-slate-400">
            <p>
              ©{new Date().getUTCFullYear()}GreatStack. All rights reserved.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Login