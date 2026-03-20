import { UserPlus, Mail, CheckCircle2, AlertTriangle, GitBranch, Database } from "lucide-react";

export function Module1Slide() {
  return (
    <div className="w-full max-w-6xl max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-3">Module 1: Automated Vendor Onboarding</h1>
      <p className="text-lg text-blue-600 mb-8">
        Streamlining SCM operations while ensuring 100% compliance
      </p>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg text-slate-800">SCM Initiation</h3>
          </div>
          <p className="text-sm text-slate-600">
            SCM team triggers invite via unique secure link—vendors receive email with self-service portal access
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <UserPlus className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg text-slate-800">Vendor Self-Service</h3>
          </div>
          <p className="text-sm text-slate-600">
            Vendors input data and upload documents—reducing manual data entry workload for internal staff by 90%
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg text-slate-800">Auto Verification</h3>
          </div>
          <p className="text-sm text-slate-600">
            Real-time API validation for PAN and GST—staff only reviews pre-verified, clean data
          </p>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 rounded-xl p-6">
        <h3 className="text-xl text-slate-800 mb-4">Internal Team Benefits & Controls</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <span className="text-slate-800 font-semibold">Instant Validation:</span>
              <span className="text-slate-600 ml-2">
                System flags discrepancies immediately—SCM team sees only compliant applications, saving hours of manual verification
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <GitBranch className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <span className="text-slate-800 font-semibold">Custom Approval Workflows:</span>
              <span className="text-slate-600 ml-2">
                Management configures multi-level approvals based on vendor type, contract value, and organizational hierarchy
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <span className="text-slate-800 font-semibold">Collaboration Tools:</span>
              <span className="text-slate-600 ml-2">
                Internal staff can request clarifications or additional documents directly within the system—full audit trail maintained
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <span className="text-slate-800 font-semibold">Seamless ERP Sync:</span>
              <span className="text-slate-600 ml-2">
                One-click push to ERP (SAP, Oracle, Tally) or bulk export—no manual re-entry, eliminating errors and saving time
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-5 text-center">
        <p className="text-lg">
          <span className="font-semibold">For SCM & Management:</span> Reduce onboarding time from weeks to days, with zero manual data entry and complete compliance assurance
        </p>
      </div>
    </div>
  );
}