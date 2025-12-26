
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">Have questions about our market, logistics, or AgroCoin? Our team of experts is here to help you grow your business.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: '📍', label: 'Our Hub', text: '123 Agri-Tech Valley, CA 90210' },
          { icon: '📞', label: 'Call Us', text: '+1 (555) AGRO-HELP' },
          { icon: '✉️', label: 'Email Support', text: 'support@agropulse.io' },
        ].map((item) => (
          <div key={item.label} className="bg-white p-8 rounded-3xl border shadow-sm text-center hover:scale-105 transition-transform">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h4 className="font-bold text-slate-800 mb-1">{item.label}</h4>
            <p className="text-sm text-slate-500">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-3xl border shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 p-8 lg:p-12 space-y-6">
          <h2 className="text-2xl font-bold text-slate-800">Send us a message</h2>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500" />
              <input type="text" placeholder="Last Name" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500" />
            <select className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500">
              <option>General Inquiry</option>
              <option>Technical Support</option>
              <option>Billing & Payment</option>
              <option>Partnerships</option>
            </select>
            <textarea rows={4} placeholder="How can we help?" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-green-500"></textarea>
            <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition-colors">
              Submit Request
            </button>
          </form>
        </div>
        <div className="md:w-1/2 bg-green-600 p-8 lg:p-12 text-white flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6">
            <div>
              <h5 className="font-bold text-green-100 mb-1">How do I withdraw my AgroCoin?</h5>
              <p className="text-sm opacity-80">You can withdraw directly to your TON or BNB wallet, or swap for local currency via our P2P gateway.</p>
            </div>
            <div>
              <h5 className="font-bold text-green-100 mb-1">What is the delivery timeline?</h5>
              <p className="text-sm opacity-80">Local deliveries (under 500km) are completed within 24 hours of pickup confirmation.</p>
            </div>
            <div>
              <h5 className="font-bold text-green-100 mb-1">Are all sellers verified?</h5>
              <p className="text-sm opacity-80">Yes, every producer on AgroPulse undergoes a multi-step background check and farm inspection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
