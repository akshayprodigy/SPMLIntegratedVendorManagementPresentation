import { Target, TrendingUp, Shield, Eye } from "lucide-react";

export function ExecutiveSummarySlide() {
  return (
    <div className="w-full max-w-6xl max-h-[var(--slide-card-max-height)] overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-8">Executive Summary</h1>

      <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8 mb-8 border border-blue-100">
        <p className="text-lg text-slate-700 leading-relaxed">
          The proposed solution is a <span className="text-blue-600 font-semibold">centralized digital ecosystem</span> designed
          to streamline the lifecycle of vendor engagement—from initial onboarding and budget-linked
          CAPEX to Procurement Orders (PO) and automated invoicing. By integrating automated
          verification (GST/PAN), dynamic approval workflows, and comprehensive audit logging, the
          system ensures <span className="text-blue-600 font-semibold">100% compliance</span> and <span className="text-blue-600 font-semibold">real-time financial visibility</span>.
        </p>
      </div>

      <h2 className="text-2xl text-slate-800 mb-6">Key Benefits</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-slate-800 mb-2">End-to-End Automation</h3>
              <p className="text-slate-600">
                From vendor onboarding to payment release, eliminating manual intervention and
                reducing processing time by 70%
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-slate-800 mb-2">Budget Control</h3>
              <p className="text-slate-600">
                Real-time tracking of budget vs. actual spend with automatic alerts for
                unbudgeted requests
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-slate-800 mb-2">100% Compliance</h3>
              <p className="text-slate-600">
                Automated GST/PAN verification, approval workflows, and complete audit trails
                for regulatory compliance
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl text-slate-800 mb-2">Real-Time Visibility</h3>
              <p className="text-slate-600">
                Management dashboards with vendor performance metrics, aging invoices, and
                financial analytics
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
