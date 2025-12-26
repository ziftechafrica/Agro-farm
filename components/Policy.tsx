
import React from 'react';

const Policy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-12 prose prose-slate">
      <h1 className="text-4xl font-bold mb-8">Platform Policy</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Privacy Policy</h2>
        <p className="text-slate-600 mb-4">Your privacy is critical to us. AgroPulse collects only the necessary data to facilitate agricultural trade and logistics.</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Data Collection:</strong> We collect business details, farm locations, and transaction history.</li>
          <li><strong>Usage:</strong> Data is used to optimize logistic routes and provide market insights.</li>
          <li><strong>Protection:</strong> All financial and personal data is encrypted using AES-256 standards.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Trading & Commerce</h2>
        <p className="text-slate-600 mb-4">By trading on AgroPulse, you agree to our fair pricing standards and quality assurance protocols.</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>All produce must meet the quality grade specified in the listing.</li>
          <li>Payment is held in escrow until the buyer confirms delivery receipt.</li>
          <li>Disputes are handled by the AgroPulse Mediation Board.</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Crypto-Asset Disclosure</h2>
        <p className="text-slate-600 mb-4">AgroCoin ($AGC) is a utility token used within the ecosystem. Trading crypto-assets involves risk.</p>
        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
          <p className="text-sm text-amber-800 font-medium">Risk Warning: The value of digital assets can be volatile. Only invest what you can afford to lose. AgroPulse is not responsible for market fluctuations on external exchanges like Binance or TON-DEX.</p>
        </div>
      </section>

      <p className="text-xs text-slate-400 italic">Last updated: May 20, 2024</p>
    </div>
  );
};

export default Policy;
