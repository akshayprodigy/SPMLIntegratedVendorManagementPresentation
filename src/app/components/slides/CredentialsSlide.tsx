import logo from "@/assets/aea7723317227b55894b1a977ad95840207704bd.png";
import { Building2, CheckCircle2 } from "lucide-react";

export function CredentialsSlide() {
  const clients = [
    {
      name: "CMRI",
      project: "WorkFlow Digitization ",
      highlights: [
        "Capex Mangement System with real-time budget tracking",
        "Vendor Onboarding and Non-PO Invoice Processing",
        "Insurance and Internal Claim Processing",
        "Travel Request and Expense Management System",
        "Integration with SAP for seamless data flow and reporting",
      ],
    },
    {
      name: "Neo Sym",
      project: "Vendor Management Portal",
      highlights: [
       "Vendor Onboarding and Non-PO Invoice Processing",
      ],
    },
    {
      name: "United Explorations",
      project: "HRMS & Project Management Portal",
      highlights: [
        "Employee Onboarding and Project Assignment System",
        "Tracking of Project Progress and Resource Allocation",
        "Integration with Payroll and Finance Systems for streamlined operations",
      ],
    },
  ];

  return (
    <div className="w-full max-w-6xl max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <div className="flex items-center gap-4 mb-8">
        <img src={logo} alt="Innocore Labs" className="w-20 h-20 object-contain" />
        <h1 className="text-4xl text-slate-800">Our Work & Credentials</h1>
      </div>

      <p className="text-lg text-slate-600 mb-8">
        Trusted by leading organizations to deliver mission-critical digital solutions
      </p>

      <div className="space-y-6">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-6 border border-blue-100"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl text-slate-800 mb-1">{client.name}</h3>
                <p className="text-blue-600 mb-4">{client.project}</p>
                <div className="space-y-2">
                  {client.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-blue-600 text-white rounded-xl p-4 text-center">
        <p className="text-lg">
          And many more clients across healthcare, manufacturing, retail, and technology sectors
        </p>
      </div>
    </div>
  );
}
