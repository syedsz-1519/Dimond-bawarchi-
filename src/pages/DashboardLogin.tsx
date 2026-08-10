import React, { useState } from 'react';
import { ShieldCheck, Lock, User, Gem, AlertCircle, ArrowLeft } from 'lucide-react';

interface DashboardLoginProps {
  onSuccess: () => void;
  onGoToStorefront: () => void;
}

export const DashboardLogin: React.FC<DashboardLoginProps> = ({ onSuccess, onGoToStorefront }) => {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // TODO: PRODUCTION — replace with Supabase Auth (e.g., supabase.auth.signInWithPassword({ email, password }))
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      // Hardcoded demo check: admin / admin123
      if (username.trim() === 'admin' && password === 'admin123') {
        // TODO: PRODUCTION — replace sessionStorage session flag with Supabase Auth session token
        sessionStorage.setItem('admin_authenticated', 'true');
        setIsLoading(false);
        onSuccess();
      } else {
        setIsLoading(false);
        setError('Invalid username or password. (Demo Username: admin | Password: admin123)');
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 selection:bg-blue-900 selection:text-white">
      <div className="max-w-md w-full">
        
        {/* Return to website link */}
        <button
          onClick={onGoToStorefront}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 hover:text-blue-700 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Customer Website
        </button>

        {/* Card Container */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden">
          
          {/* Top Brand Header */}
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-blue-900 text-amber-400 mx-auto flex items-center justify-center mb-3 shadow-md border border-blue-800">
              <Gem className="w-8 h-8" />
            </div>
            <h1 className="font-serif-title font-bold text-2xl text-slate-900">
              Diamond Bawarchi
            </h1>
            <p className="text-xs font-semibold uppercase tracking-wider text-blue-800 mt-0.5">
              Staff &amp; Admin Order Management Portal
            </p>

            <div className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 px-3 py-1 rounded-full text-[10px] font-bold border border-amber-200 mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Demo Login • Admin Credentials Provided Below</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            
            {error && (
              <div className="bg-red-50 border border-red-200 p-3 rounded-xl flex items-start gap-2 text-xs text-red-700 font-medium">
                <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin"
                  className="w-full bg-slate-50 text-xs text-slate-900 pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all font-medium"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="text-[11px] font-bold text-slate-700 uppercase block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 text-xs text-slate-900 pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all font-medium"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            {/* Quick Helper Credentials Note */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] text-slate-600 space-y-0.5">
              <span className="font-bold text-slate-900 block">Demo Credentials:</span>
              <div>• Username: <code className="bg-slate-200 px-1 py-0.5 rounded text-blue-900 font-bold">admin</code></div>
              <div>• Password: <code className="bg-slate-200 px-1 py-0.5 rounded text-blue-900 font-bold">admin123</code></div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm rounded-xl border border-blue-800 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95 disabled:opacity-70 mt-2"
            >
              {isLoading ? (
                <span>Authenticating...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-amber-400" />
                  <span>Access Admin Dashboard</span>
                </>
              )}
            </button>

          </form>

        </div>

      </div>
    </div>
  );
};
