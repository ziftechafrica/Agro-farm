
import React, { useState } from 'react';
import { NavIcon, ICONS } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: ICONS.home },
    { id: 'shop', label: 'Market', icon: ICONS.shop },
    { id: 'stats', label: 'Live Data', icon: ICONS.stats },
    { id: 'learning', label: 'E-Learning', icon: ICONS.learning },
    { id: 'logistics', label: 'Logistics', icon: ICONS.truck },
    { id: 'crypto', label: 'Wallet', icon: ICONS.crypto },
    { id: 'contact', label: 'Support', icon: ICONS.contact },
    { id: 'policy', label: 'Policy', icon: ICONS.policy },
  ];

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 relative overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => handleTabChange('home')}
          >
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform shadow-lg shadow-green-600/20">A</div>
            <span className="text-xl font-bold text-slate-800 tracking-tight">AgroPulse</span>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navItems.slice(0, 6).map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === item.id 
                    ? 'bg-green-600 text-white shadow-md shadow-green-600/20' 
                    : 'text-slate-600 hover:bg-slate-100 hover:text-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => handleTabChange('auth')}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-green-600 transition-all hover:shadow-lg active:scale-95"
            >
              Get Started
            </button>
            <button 
              className="md:hidden text-slate-600 p-2 hover:bg-slate-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <NavIcon d="M4 6h16M4 12h16M4 18h16" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`fixed inset-y-0 right-0 w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xl font-bold text-slate-800">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`w-full flex items-center space-x-4 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeTab === item.id 
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' 
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <div className={`${activeTab === item.id ? 'text-white' : 'text-green-600'}`}>
                  <NavIcon d={item.icon} />
                </div>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          <div className="pt-6 mt-6 border-t border-slate-100">
            <button 
              onClick={() => handleTabChange('auth')}
              className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold text-sm shadow-xl"
            >
              Account Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                <span className="text-xl font-bold text-white tracking-tight">AgroPulse</span>
              </div>
              <p className="text-sm leading-relaxed mb-6">Empowering global agriculture through blockchain technology, smart logistics, and real-time market insights.</p>
              <div className="flex space-x-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer text-white">𝕏</div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer text-white">f</div>
                <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer text-white">in</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Marketplace</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => handleTabChange('shop')} className="hover:text-green-500 transition-colors">Trade Crops</button></li>
                <li><button onClick={() => handleTabChange('logistics')} className="hover:text-green-500 transition-colors">Book Logistics</button></li>
                <li><button onClick={() => handleTabChange('crypto')} className="hover:text-green-500 transition-colors">AgroCoin ($AGC)</button></li>
                <li><button onClick={() => handleTabChange('stats')} className="hover:text-green-500 transition-colors">Real-time Data</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-3 text-sm font-medium">
                <li><button onClick={() => handleTabChange('contact')} className="hover:text-green-500 transition-colors">Help Center</button></li>
                <li><button onClick={() => handleTabChange('learning')} className="hover:text-green-500 transition-colors">Academy</button></li>
                <li><button onClick={() => handleTabChange('policy')} className="hover:text-green-500 transition-colors">Legal & Privacy</button></li>
                <li><button onClick={() => handleTabChange('contact')} className="hover:text-green-500 transition-colors">Contact Support</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Newsletter</h4>
              <p className="text-sm mb-6">Stay ahead of market fluctuations. Join 10k+ farmers.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="bg-slate-800 border-none rounded-xl px-4 py-3 text-sm w-full focus:ring-2 focus:ring-green-500 text-white placeholder:text-slate-500" 
                />
                <button className="bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-800 text-center text-sm font-medium">
            @ 2025 Agropulse Designed and Owned by <a href="https://ziftech.africa" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-400 underline decoration-green-500/30 underline-offset-4 transition-colors">ZIFTECH AFRICA</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
