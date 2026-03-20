import { DollarSign, TrendingUp, AlertCircle, BarChart3, Eye, Shield } from "lucide-react";

export function Module3Slide() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-3">Module 3: Budget & CAPEX Management</h1>
      <p className="text-lg text-blue-600 mb-8">
        Giving management complete control over financial planning and expenditure
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Real-Time Budget Control</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Management dashboard with live visibility into budget allocation and utilization
          </p>
          <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
              <span className="text-slate-700">Department/Project-wise budget tracking</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
              <span className="text-slate-700">Instant alerts on budget threshold breach</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
              <span className="text-slate-700">Visual analytics: Budget vs. Actual spend</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
              <span className="text-slate-700">Forecast future expenses based on trends</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">CAPEX Approval Control</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Multi-level approval workflows ensuring management oversight on every expenditure
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-green-600" />
                <span className="text-sm font-semibold text-green-800">Budgeted CAPEX</span>
              </div>
              <p className="text-xs text-green-700">
                Fast-track approval for pre-approved items—management notified, no delays
              </p>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold text-amber-800">Unbudgeted CAPEX</span>
              </div>
              <p className="text-xs text-amber-700">
                Escalated to senior management with justification, ensuring full control
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-6 mb-6">
        <h3 className="text-xl text-slate-800 mb-4">Management Controls & Analytics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <DollarSign className="w-6 h-6 text-blue-600" />
              <h4 className="text-base font-semibold text-slate-800">Budget Upload</h4>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Finance team uploads annual budgets at FY start by department/project/cost center
            </p>
            <div className="text-xs text-blue-600 bg-blue-50 rounded p-2">
              Excel import or manual entry with validation
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              <h4 className="text-base font-semibold text-slate-800">Live Dashboard</h4>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Executives view spend patterns, utilization rates, and pending approvals in real-time
            </p>
            <div className="text-xs text-blue-600 bg-blue-50 rounded p-2">
              Drill-down by category, vendor, or time period
            </div>
          </div>

          <div className="bg-white rounded-lg p-5 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h4 className="text-base font-semibold text-slate-800">Smart Alerts</h4>
            </div>
            <p className="text-sm text-slate-600 mb-3">
              Automated notifications when budgets reach 75%, 90%, or exceed 100% utilization
            </p>
            <div className="text-xs text-blue-600 bg-blue-50 rounded p-2">
              Email & in-app notifications for stakeholders
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-5 text-center">
        <p className="text-lg">
          <span className="font-semibold">Budget-to-Spend Linkage:</span> Every PO is automatically validated against approved budgets, preventing unauthorized spending and ensuring 100% financial governance
        </p>
      </div>
    </div>
  );
}
