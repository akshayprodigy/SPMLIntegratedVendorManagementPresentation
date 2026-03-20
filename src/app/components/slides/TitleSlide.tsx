import logo from "@/assets/aea7723317227b55894b1a977ad95840207704bd.png";

export function TitleSlide() {
  return (
    <div className="w-full max-w-5xl max-h-[var(--slide-card-max-height)] overflow-y-auto bg-white rounded-2xl shadow-2xl p-16 text-center">
      <div className="flex justify-center mb-8">
        <img src={logo} alt="Innocore Labs" className="w-64 h-64 object-contain" />
      </div>
      <h1 className="text-5xl mb-6 text-slate-800">
        Integrated Vendor Management & SCM Portal
      </h1>
      <p className="text-2xl text-blue-600 mb-8">
        Streamlining Vendor Lifecycle from Onboarding to Payment
      </p>
      <div className="text-lg text-slate-500">
        Presented by Innocore Labs
      </div>
    </div>
  );
}
