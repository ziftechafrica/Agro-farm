
import React, { useState } from 'react';

const Auth: React.FC<{ onAuthSuccess: () => void }> = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would call an API
    console.log("Auth attempt:", { email, password, isLogin });
    onAuthSuccess();
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          <div className="p-10">
            <div className="text-center mb-10">
              <div className="inline-flex w-16 h-16 bg-green-50 rounded-2xl items-center justify-center text-green-600 mb-6 shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
              <p className="text-slate-500 mt-3 font-medium">Join the largest digital agro-ecosystem in Africa.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 transition-all font-medium text-slate-700"
                  />
                </div>
              )}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 transition-all font-medium text-slate-700"
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
                  {isLogin && <button type="button" className="text-xs font-bold text-green-600 hover:text-green-700">Forgot?</button>}
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 focus:ring-2 focus:ring-green-500 transition-all font-medium text-slate-700"
                />
              </div>

              <button className="w-full bg-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all shadow-xl shadow-green-600/20 active:scale-95 mt-4">
                {isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-slate-50 text-center">
              <p className="text-slate-500 font-medium text-sm">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-green-600 font-bold hover:underline"
                >
                  {isLogin ? 'Create one now' : 'Sign in here'}
                </button>
              </p>
            </div>
          </div>
          <div className="bg-slate-50 p-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-widest">
            Protected by ZIFTECH Security Protocol
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
