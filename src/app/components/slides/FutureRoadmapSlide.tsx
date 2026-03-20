import { Brain, ScanLine, Sparkles, TrendingUp } from "lucide-react";

export function FutureRoadmapSlide() {
  return (
    <div className="w-full max-w-6xl max-h-[var(--slide-card-max-height)] overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-3">Future Roadmap: AI Integration</h1>
      <p className="text-lg text-blue-600 mb-8">
        Enhancements to be implemented in Phase 2
      </p>

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 border-2 border-purple-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <ScanLine className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl text-slate-800">OCR Data Entry</h3>
          </div>
          <p className="text-slate-600 mb-4">
            AI-powered scanning of vendor invoices to automatically match line items against
            Purchase Orders
          </p>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-slate-700">Extract invoice data automatically</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-slate-700">Match with PO line items</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-slate-700">Reduce manual data entry by 95%</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-slate-700">Support multiple formats (PDF, images)</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 border-2 border-blue-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl text-slate-800">Intelligent Approvals</h3>
          </div>
          <p className="text-slate-600 mb-4">
            AI workflows to flag unusual invoice amounts or detect duplicate entries automatically
          </p>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Anomaly detection in invoice amounts</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Duplicate invoice identification</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Predictive approval recommendations</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-slate-700">Risk scoring for vendor transactions</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-5 border border-slate-200">
          <h4 className="text-sm font-semibold text-slate-800 mb-2">Machine Learning</h4>
          <p className="text-xs text-slate-600">
            Learn from historical data to improve accuracy over time
          </p>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-5 border border-slate-200">
          <h4 className="text-sm font-semibold text-slate-800 mb-2">Natural Language</h4>
          <p className="text-xs text-slate-600">
            Process unstructured data from emails and documents
          </p>
        </div>
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-5 border border-slate-200">
          <h4 className="text-sm font-semibold text-slate-800 mb-2">Predictive Analytics</h4>
          <p className="text-xs text-slate-600">
            Forecast budget needs and identify spending patterns
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white rounded-xl p-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <TrendingUp className="w-6 h-6" />
          <p className="text-xl">Expected Impact</p>
        </div>
        <p className="text-lg">
          AI integration will reduce processing time by an additional 50% and improve accuracy to 99.5%
        </p>
      </div>
    </div>
  );
}
