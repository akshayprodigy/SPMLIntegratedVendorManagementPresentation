import { FileText, LayoutDashboard, CheckCircle, Clock, Users, Bell } from "lucide-react";

export function Module2Slide() {
  return (
    <div className="w-full max-w-6xl max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-3">Module 2: PO & Invoice Management</h1>
      <p className="text-lg text-blue-600 mb-8">
        Empowering management and SCM teams with complete control and visibility
      </p>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">SCM Team Dashboard</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Centralized control panel for purchase order creation, tracking, and management
          </p>
          <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Create POs with milestone definitions</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Real-time PO status tracking</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Batch PO generation and amendments</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Vendor performance metrics at a glance</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Management Dashboard</h3>
          </div>
          <p className="text-slate-600 mb-4">
            Executive overview for approvals, budget monitoring, and strategic decisions
          </p>
          <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Multi-level approval workflows</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Department-wise PO analytics</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">Budget vs. actual spend comparison</span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <span className="text-slate-700">One-click approval/rejection with comments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-6 mb-6">
        <h3 className="text-xl text-slate-800 mb-4">PO Workflow for Internal Teams</h3>
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-800">PO Creation</span>
            </div>
            <p className="text-xs text-slate-600">
              SCM team creates POs with milestones (30% Advance, 40% Progress, 30% Final)
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-800">Approval Queue</span>
            </div>
            <p className="text-xs text-slate-600">
              Stakeholders receive notifications for pending approvals based on DOP
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Bell className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-800">Track & Monitor</span>
            </div>
            <p className="text-xs text-slate-600">
              Real-time status updates visible to all authorized internal staff
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-slate-800">Invoice Processing</span>
            </div>
            <p className="text-xs text-slate-600">
              Automated matching prevents over-billing, flags discrepancies for review
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-5 text-center">
        <p className="text-lg">
          <span className="font-semibold">For Internal Teams:</span> Reduce PO processing time by 70% with automated workflows, real-time tracking, and instant approvals—all from a unified dashboard
        </p>
      </div>
    </div>
  );
}
