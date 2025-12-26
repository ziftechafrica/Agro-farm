
import React, { useState } from 'react';
import Layout from './components/Layout';
import Marketplace from './components/Marketplace';
import Dashboard from './components/Dashboard';
import ELearning from './components/ELearning';
import Logistics from './components/Logistics';
import CryptoWallet from './components/CryptoWallet';
import Contact from './components/Contact';
import Policy from './components/Policy';
import ChatBot from './components/ChatBot';
import Auth from './components/Auth';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <div className="space-y-16 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <section className="relative rounded-[3rem] overflow-hidden h-[500px] md:h-[650px] flex items-center shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop" 
                alt="AgroPulse Hero" 
                className="absolute inset-0 w-full h-full object-cover brightness-[0.45] transition-transform duration-[20s] group-hover:scale-110"
              />
              <div className="relative z-10 px-8 lg:px-20 max-w-4xl text-white space-y-8">
                <div className="inline-flex items-center space-x-2 bg-green-600/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-bold tracking-widest uppercase">The Future of Agriculture</span>
                </div>
                <h1 className="text-5xl md:text-8xl font-black leading-[1.1] tracking-tight">
                  Empowering <span className="text-green-500">Farmers,</span> <br />
                  Bridging <span className="text-slate-300">Markets.</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 leading-relaxed max-w-2xl font-medium">
                  Join Africa's premier ecosystem for digital agriculture. Seamlessly trade crops, master advanced farming techniques, and manage global assets.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={() => setActiveTab('shop')} 
                    className="bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-600/30 hover:-translate-y-1 active:scale-95 text-center"
                  >
                    Start Trading
                  </button>
                  <button 
                    onClick={() => setActiveTab('learning')} 
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all hover:-translate-y-1 active:scale-95 text-center"
                  >
                    Explore Academy
                  </button>
                </div>
              </div>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { label: 'Verified Traders', value: '12,000+', color: 'text-green-600', icon: '✅' },
                { label: 'Crops Traded', value: '85k Tons', color: 'text-amber-600', icon: '🌾' },
                { label: 'Student Growth', value: '45%', color: 'text-blue-600', icon: '🎓' },
                { label: 'AgroCoin MC', value: '$2.4M', color: 'text-purple-600', icon: '💎' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm text-center hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <h4 className={`text-2xl md:text-4xl font-black mb-1 ${stat.color}`}>{stat.value}</h4>
                  <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </section>

            <section className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Integrated Ecosystem</h2>
                <p className="text-slate-500 font-medium">Everything you need to run a modern, profitable enterprise in one unified, professional platform.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { title: 'Global Market', desc: 'Connect directly with international buyers using our secure P2P trading protocols.', icon: '🌍' },
                  { title: 'Smart Logistics', desc: 'Real-time IoT tracking for every shipment, from farm gate to international port.', icon: '🚚' },
                  { title: 'Blockchain Finance', desc: 'Instant settlements via AgroCoin ($AGC) powered by ZIFTECH AFRICA technology.', icon: '⛓️' },
                ].map((feature) => (
                  <div key={feature.title} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm hover:border-green-500/30 transition-all group hover:shadow-2xl">
                    <div className="text-5xl mb-8 group-hover:scale-125 transition-transform duration-500 ease-out inline-block">{feature.icon}</div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{feature.title}</h3>
                    <p className="text-slate-500 leading-relaxed font-medium">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        );
      case 'shop': return <Marketplace />;
      case 'stats': return <Dashboard />;
      case 'learning': return <ELearning />;
      case 'logistics': return <Logistics />;
      case 'crypto': return <CryptoWallet />;
      case 'contact': return <Contact />;
      case 'policy': return <Policy />;
      case 'auth': return <Auth onAuthSuccess={() => setActiveTab('home')} />;
      default: return null;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      <div className="transition-all duration-500">
        {renderContent()}
      </div>
      <ChatBot />
    </Layout>
  );
};

export default App;
