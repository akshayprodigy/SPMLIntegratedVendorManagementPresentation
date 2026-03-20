import { AlertCircle, ArrowRight } from "lucide-react";

export function ProblemStatementSlide() {
  const problems = [
    {
      title: "Manual Vendor Onboarding",
      description: "Time-consuming data entry, document verification delays, and compliance gaps",
    },
    {
      title: "Disconnected Budget & Procurement",
      description: "No real-time visibility into budget utilization and unplanned expenses",
    },
    {
      title: "Complex PO & Invoice Tracking",
      description: "Manual invoice matching, payment delays, and lack of milestone tracking",
    },
    {
      title: "Limited Audit Visibility",
      description: "Difficulty tracking approvals, changes, and maintaining compliance records",
    },
  ];

  const solutions = [
    "Automated verification with GST/PAN API integration",
    "Real-time budget tracking with CAPEX linkage",
    "Milestone-based invoicing with automated matching",
    "Complete audit trail with timestamped logs",
  ];

  return (
    <div className="w-full max-w-6xl max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-8">The Challenge</h1>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-2xl text-red-600 mb-6 flex items-center gap-3">
            <AlertCircle className="w-7 h-7" />
            Current Pain Points
          </h2>
          <div className="space-y-4">
            {problems.map((problem, index) => (
              <div key={index} className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-lg text-slate-800 mb-2">{problem.title}</h3>
                <p className="text-sm text-slate-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl text-blue-600 mb-6 flex items-center gap-3">
            <ArrowRight className="w-7 h-7" />
            Our Solution Approach
          </h2>
          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4 flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-slate-700 pt-1">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 text-center">
        <p className="text-xl">
          A centralized digital ecosystem that transforms vendor management from a manual,
          error-prone process into an automated, compliant, and transparent workflow
        </p>
      </div>
    </div>
  );
}
