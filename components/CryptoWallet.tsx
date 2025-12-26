
import React from 'react';

const CryptoWallet: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-green-200 text-sm font-medium tracking-widest uppercase">My AgroCoin Balance</span>
            <div className="flex items-baseline space-x-2">
              <h2 className="text-5xl font-bold">12,450.00</h2>
              <span className="text-2xl opacity-80 font-semibold">$AGC</span>
            </div>
            <p className="text-green-100 opacity-70">≈ $3,735.00 USD</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-white text-green-700 px-6 py-3 rounded-2xl font-bold hover:bg-green-50 transition-colors">Send</button>
            <button className="bg-green-500/30 backdrop-blur text-white border border-white/20 px-6 py-3 rounded-2xl font-bold hover:bg-white/10 transition-colors">Receive</button>
          </div>
        </div>
        
        {/* Decor */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-400/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-bold text-slate-800 mb-6 flex items-center justify-between">
            Market Trends
            <span className="text-xs font-normal text-slate-500 bg-slate-100 px-2 py-1 rounded">24h History</span>
          </h3>
          <div className="space-y-6">
            {[
              { name: 'AgroCoin ($AGC)', price: '0.30', change: '+5.4%', symbol: 'AGC' },
              { name: 'Binance Coin (BNB)', price: '584.20', change: '-1.2%', symbol: 'BNB' },
              { name: 'TON Coin', price: '7.12', change: '+12.8%', symbol: 'TON' },
              { name: 'USDT (AgroStable)', price: '1.00', change: '0.0%', symbol: 'USDT' },
            ].map((coin) => (
              <div key={coin.symbol} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-600">{coin.symbol[0]}</div>
                  <div>
                    <p className="font-bold text-slate-800">{coin.name}</p>
                    <p className="text-xs text-slate-500 uppercase">{coin.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">${coin.price}</p>
                  <p className={`text-xs font-medium ${coin.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>{coin.change}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Payment Gateway</h3>
          <p className="text-sm text-slate-500 mb-6">Convert your crop earnings to crypto or withdraw to your local bank instantly.</p>
          <div className="space-y-4">
            <div className="p-4 border-2 border-green-100 rounded-2xl bg-green-50/30 flex items-center justify-between cursor-pointer hover:border-green-500 transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold">BNB</div>
                <span className="font-semibold text-slate-700">Binance Smart Chain</span>
              </div>
              <div className="w-4 h-4 border-2 border-green-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
            </div>
            <div className="p-4 border rounded-2xl flex items-center justify-between cursor-pointer hover:border-slate-400 transition-all">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">TON</div>
                <span className="font-semibold text-slate-700">The Open Network (TON)</span>
              </div>
            </div>
            <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-colors mt-4">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoWallet;
