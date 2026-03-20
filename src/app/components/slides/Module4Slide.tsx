import { Shield, FileSearch, BarChart4, Lock } from "lucide-react";

export function Module4Slide() {
  return (
    <div className="w-full max-w-6xl max-h-[var(--slide-card-max-height)] overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-3">
        Module 4: Audit, Governance & Reporting
      </h1>
      <p className="text-lg text-blue-600 mb-8">
        Full transparency for management and auditors
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <FileSearch className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Full Audit Trail</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Every single action timestamped and logged with user identity
          </p>
          <div className="bg-white rounded-lg p-3 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-slate-700">Approvals & Rejections</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-slate-700">Document Edits & Uploads</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-slate-700">"Send Back" Requests</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-slate-700">Status Changes</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <BarChart4 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Admin Dashboard</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Dedicated interface for authorized personnel to view analytics
          </p>
          <div className="space-y-2">
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-1">Vendor Performance</div>
              <div className="text-sm text-slate-700">
                Turnaround times & compliance ratings
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-1">Aging Invoices</div>
              <div className="text-sm text-slate-700">
                Drill-down reports on pending payments
              </div>
            </div>
            <div className="bg-white rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-1">Budget Utilization</div>
              <div className="text-sm text-slate-700">
                Real-time Budget vs. Actual spend
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Lock className="w-6 h-6" />
            <h3 className="text-lg">Permission-Based Access</h3>
          </div>
          <p className="text-sm text-slate-200">
            Reports and audit logs accessible only to employees with specific management
            permissions, ensuring data security
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-6 h-6" />
            <h3 className="text-lg">100% Audit Readiness</h3>
          </div>
          <p className="text-sm text-blue-50">
            Database-level logging for all transaction states ensures complete compliance with
            internal and external audits
          </p>
        </div>
      </div>
    </div>
  );
}
