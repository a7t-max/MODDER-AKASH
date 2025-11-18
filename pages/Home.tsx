import React from 'react';
import { MOCK_APPS, CATEGORIES } from '../services/mockData';
import { AppCard } from '../components/AppCard';
import { ChevronRight, Flame, TrendingUp, Zap } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="space-y-12 pb-12">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 border-b border-slate-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-emerald-400 text-sm font-medium mb-4">
              <Zap size={14} />
              <span>Latest Mods Updated Daily</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Unlock Premium <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Apps & Games
              </span>
            </h1>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl">
              Download the best Mod APKs for Android. Premium unlocked, unlimited money, ad-free experiences, and much more. Safe & verified.
            </p>
            <div className="flex gap-4">
              <button className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-emerald-500/25">
                Browse Mods
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-xl border border-slate-700 transition-all">
                Request App
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Categories */}
        <section>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
             <TrendingUp className="text-emerald-500" /> Popular Categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {CATEGORIES.map((cat, idx) => (
              <div key={idx} className="bg-slate-800 hover:bg-slate-750 border border-slate-700 hover:border-emerald-500/50 p-4 rounded-xl text-center cursor-pointer transition-all">
                <span className="text-slate-300 font-medium text-sm hover:text-emerald-400">{cat}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Apps */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Flame className="text-orange-500" /> Recommended Mods
            </h2>
            <a href="#" className="text-emerald-500 text-sm font-medium flex items-center hover:underline">
              View All <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_APPS.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </section>
        
        {/* New Updates Section */}
        <section>
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-white">
              Just Updated
            </h2>
            <a href="#" className="text-emerald-500 text-sm font-medium flex items-center hover:underline">
              View All <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {/* Reusing MOCK_APPS slightly shuffled/filtered for visual variety */}
             {[MOCK_APPS[4], MOCK_APPS[5], MOCK_APPS[0]].map((app) => (
               <AppCard key={`updated-${app.id}`} app={app} />
             ))}
          </div>
        </section>

      </div>
    </div>
  );
};