import { Shield, Zap, Database, Smartphone } from "lucide-react";

export function TechnicalFlowSlide() {
  return (
    <div className="w-full max-w-6xl max-h-full overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <h1 className="text-4xl text-slate-800 mb-8">Technical Flow & Security</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg text-slate-800">Security</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Role-Based Access Control (RBAC)
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Secure Link Expiry for vendor invites
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  SSL/TLS encrypted data transmission
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Multi-factor authentication support
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg text-slate-800">Integrations</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  RESTful APIs for ERP synchronization
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  GST/PAN verification API integration
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  SAP, Oracle, Tally compatibility
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  CSV/Excel export for legacy systems
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Database className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg text-slate-800">Data Integrity</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Database-level logging for all transactions
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  100% Audit readiness with immutable logs
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Automated backup & disaster recovery
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  GDPR & data privacy compliance
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg text-slate-800">User Experience</h3>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Mobile-responsive dashboard design
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Intuitive interface for vendors & approvers
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Real-time notifications & alerts
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                <span className="text-slate-700">
                  Multi-language support capability
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-5 text-center">
        <p className="text-lg">
          Built on cloud-native architecture for scalability, reliability, and 99.9% uptime SLA
        </p>
      </div>
    </div>
  );
}
