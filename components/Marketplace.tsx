
import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';
import { Product, CartItem } from '../types';

const Marketplace: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [filter, setFilter] = useState('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutView, setIsCheckoutView] = useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const filteredProducts = filter === 'All' 
    ? MOCK_PRODUCTS 
    : MOCK_PRODUCTS.filter(p => p.category === filter);

  return (
    <div className="space-y-8 relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Agro Marketplace</h1>
          <p className="text-slate-500 mt-2 font-medium">Securely trade premium organic crops and livestock assets.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="bg-white border-2 border-slate-100 p-4 rounded-2xl shadow-sm hover:border-green-500 transition-all group flex items-center space-x-3"
          >
            <div className="relative">
              <svg className="w-6 h-6 text-slate-600 group-hover:text-green-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeWidth={2} /></svg>
              {cart.length > 0 && (
                <span className="absolute -top-3 -right-3 bg-green-600 text-white text-[10px] font-black w-6 h-6 flex items-center justify-center rounded-full border-2 border-white shadow-lg animate-bounce">
                  {cart.reduce((a, b) => a + b.quantity, 0)}
                </span>
              )}
            </div>
            <span className="font-bold text-slate-700 hidden sm:block">View Cart</span>
          </button>
        </div>
      </div>

      <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
        {['All', 'Crop', 'Stock', 'Fertilizer'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-8 py-3 rounded-2xl text-sm font-bold whitespace-nowrap transition-all ${
              filter === cat 
                ? 'bg-green-600 text-white shadow-xl shadow-green-600/20 translate-y-[-2px]' 
                : 'bg-white text-slate-500 border-2 border-slate-50 hover:border-green-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="h-56 relative overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-xl text-[10px] font-black text-green-700 uppercase tracking-widest shadow-sm">
                {product.category}
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <button 
                   onClick={() => addToCart(product)}
                   className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-sm shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                 >
                   Quick Add
                 </button>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-slate-800 text-xl mb-2 group-hover:text-green-600 transition-colors">{product.name}</h3>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed font-medium">{product.description}</p>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-slate-900">${product.price.toFixed(2)}</span>
                  <span className="text-xs text-slate-400 font-bold ml-1 uppercase">/ {product.unit}</span>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white p-3 rounded-xl hover:bg-slate-900 transition-all active:scale-90 shadow-lg shadow-green-600/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth={2} strokeLinecap="round" /></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] animate-in fade-in duration-300"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer */}
      <div className={`fixed inset-y-0 right-0 w-full max-w-md bg-white z-[110] shadow-2xl transform transition-transform duration-500 ease-out ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full flex flex-col">
          <div className="p-8 border-b flex items-center justify-between">
            <h2 className="text-2xl font-black text-slate-900">Your Basket</h2>
            <button 
              onClick={() => setIsCartOpen(false)}
              className="p-3 text-slate-400 hover:bg-slate-50 rounded-2xl transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-8 space-y-6">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                <div className="text-6xl">🛒</div>
                <p className="font-bold text-slate-900">Your cart is feeling a bit light.</p>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-green-600 font-bold hover:underline"
                >
                  Start adding produce
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex space-x-4 animate-in slide-in-from-right-4 duration-300">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0 shadow-sm border">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-800 truncate">{item.name}</h4>
                    <p className="text-xs text-slate-400 font-bold mb-2">${item.price.toFixed(2)} / {item.unit}</p>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center bg-slate-100 rounded-xl px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-green-600 font-bold"
                        >
                          -
                        </button>
                        <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-6 h-6 flex items-center justify-center text-slate-500 hover:text-green-600 font-bold"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 text-xs font-bold"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-slate-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-8 bg-slate-50 border-t space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-slate-500 font-bold text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold text-sm">
                  <span>Platform Fee (2%)</span>
                  <span>${(subtotal * 0.02).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-900 font-black text-xl pt-2 border-t border-slate-200">
                  <span>Total</span>
                  <span>${(subtotal * 1.02).toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={() => setIsCheckoutView(true)}
                className="w-full bg-green-600 text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-slate-900 transition-all shadow-xl shadow-green-600/20 active:scale-95"
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Checkout Modal Integration */}
      {isCheckoutView && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500">
            <div className="p-8 border-b flex justify-between items-center">
              <h3 className="text-2xl font-black text-slate-900">Checkout Portal</h3>
              <button 
                onClick={() => setIsCheckoutView(false)}
                className="p-3 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            
            <div className="p-10 space-y-8">
              <div className="bg-green-50 rounded-3xl p-8 flex items-center justify-between border-2 border-green-100/50">
                <div>
                  <p className="text-xs font-black text-green-700 uppercase tracking-widest mb-1">Final Amount</p>
                  <h4 className="text-4xl font-black text-slate-900">${(subtotal * 1.02).toFixed(2)}</h4>
                </div>
                <div className="text-right">
                   <p className="text-xs font-bold text-slate-400">Order Ref</p>
                   <p className="font-mono text-sm font-bold">#AP-{Math.floor(Math.random()*1000000)}</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest ml-1">Select Secure Payment Gateway</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center p-6 border-2 border-green-600 bg-green-50 rounded-[2rem] hover:shadow-xl transition-all group">
                    <div className="text-3xl mb-3">🌱</div>
                    <span className="font-black text-slate-900 text-sm">AgroCoin ($AGC)</span>
                    <span className="text-[10px] font-bold text-green-600 mt-1">Pay with 5% Discount</span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-6 border-2 border-slate-100 rounded-[2rem] hover:border-blue-500 hover:shadow-xl transition-all group">
                    <div className="text-3xl mb-3">💎</div>
                    <span className="font-black text-slate-900 text-sm">TON / Binance</span>
                    <span className="text-[10px] font-bold text-slate-400 mt-1">Multi-Chain Connect</span>
                  </button>
                </div>
              </div>

              <div className="pt-4 space-y-4">
                 <button className="w-full bg-slate-900 text-white py-5 rounded-[1.5rem] font-bold text-lg hover:bg-green-600 transition-all shadow-xl active:scale-95">
                    Confirm & Complete Purchase
                 </button>
                 <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                   Secured by ZIFTECH AFRICA Encryption • PCI-DSS Level 1
                 </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;
