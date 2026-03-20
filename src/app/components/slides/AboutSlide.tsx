import logo from "@/assets/aea7723317227b55894b1a977ad95840207704bd.png";
import { Cpu, Zap, Shield, Users } from "lucide-react";

export function AboutSlide() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-12">
      <div className="flex items-center gap-4 mb-8">
        <img src={logo} alt="Innocore Labs" className="w-20 h-20 object-contain" />
        <h1 className="text-4xl text-slate-800">About Innocore Labs</h1>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Innovation First</h3>
          </div>
          <p className="text-slate-600">
            We deliver cutting-edge digital solutions that transform business operations
            and drive efficiency.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Agile Execution</h3>
          </div>
          <p className="text-slate-600">
            Rapid development cycles with continuous integration to deliver solutions
            faster without compromising quality.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Security & Compliance</h3>
          </div>
          <p className="text-slate-600">
            Enterprise-grade security with full audit trails and compliance management
            built into every solution.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl text-slate-800">Client Success</h3>
          </div>
          <p className="text-slate-600">
            Dedicated support and continuous improvement to ensure our clients achieve
            their business objectives.
          </p>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-xl p-6 text-center">
        <p className="text-lg">
          <span className="font-semibold">Our Mission:</span> To empower organizations with
          intelligent automation and seamless digital ecosystems that eliminate manual
          processes and maximize operational efficiency.
        </p>
      </div>
    </div>
  );
}
