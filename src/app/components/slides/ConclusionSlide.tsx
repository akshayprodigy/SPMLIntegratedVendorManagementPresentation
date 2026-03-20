import logo from "@/assets/aea7723317227b55894b1a977ad95840207704bd.png";
import { CheckCircle2, Mail, Phone, Globe } from "lucide-react";

export function ConclusionSlide() {
  const benefits = [
    "70% reduction in vendor onboarding time",
    "100% compliance with automated GST/PAN verification",
    "Real-time budget visibility and control",
    "90% reduction in payment disputes",
    "Complete audit trail for regulatory compliance",
    "Seamless ERP integration with existing systems",
  ];

  return (
    <div className="w-full max-w-6xl max-h-[var(--slide-card-max-height)] overflow-y-auto bg-white rounded-2xl shadow-2xl p-12">
      <div className="flex items-center gap-4 mb-8">
        <img src={logo} alt="Innocore Labs" className="w-20 h-20 object-contain" />
        <div>
          <h1 className="text-4xl text-slate-800">Transform Your Vendor Management</h1>
          <p className="text-lg text-blue-600 mt-1">Partner with Innocore Labs</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-4 flex items-start gap-3 border border-blue-100"
          >
            <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">{benefit}</span>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 mb-8">
        <h2 className="text-2xl mb-4 text-center">Why Choose Innocore Labs?</h2>
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-2">2+</div>
            <div className="text-sm text-blue-100">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl mb-2">7+</div>
            <div className="text-sm text-blue-100">Successful Projects</div>
          </div>
          <div>
            <div className="text-3xl mb-2">99.9%</div>
            <div className="text-sm text-blue-100">System Uptime</div>
          </div>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-6">
        <h3 className="text-xl text-slate-800 mb-4 text-center">Get in Touch</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-3 justify-center">
            <Mail className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-xs text-slate-500">Email</div>
              <div className="text-sm text-slate-800">admin@innocorelabs.com</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Phone className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-xs text-slate-500">Phone</div>
              <div className="text-sm text-slate-800">+91 9804039639</div>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <Globe className="w-5 h-5 text-blue-600" />
            <div>
              <div className="text-xs text-slate-500">Website</div>
              <a
                className="text-sm text-slate-800 hover:underline"
                href="https://www.innocorelabs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.innocorelabs.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-2xl text-slate-800">Thank You</p>
        <p className="text-lg text-slate-600 mt-2">
          Let's build the future of vendor management together
        </p>
      </div>
    </div>
  );
}
