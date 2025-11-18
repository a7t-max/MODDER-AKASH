import React from 'react';
import { Star, Download, HardDrive } from 'lucide-react';
import { AppItem } from '../types';
import { Link } from 'react-router-dom';

interface AppCardProps {
  app: AppItem;
}

export const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="group">
      <div className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-emerald-500/20 hover:shadow-xl transition-all duration-300 border border-slate-700 hover:border-emerald-500/50 transform hover:-translate-y-1">
        <div className="p-4 flex gap-4">
          {/* Icon */}
          <div className="flex-shrink-0">
            <img 
              src={app.iconUrl} 
              alt={app.title} 
              className="w-20 h-20 rounded-2xl shadow-lg object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-white font-bold text-lg leading-tight group-hover:text-emerald-400 transition-colors line-clamp-1">{app.title}</h3>
              <p className="text-slate-400 text-xs mt-1">{app.category}</p>
            </div>
            
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center space-x-1 bg-slate-900/50 px-2 py-1 rounded text-xs text-yellow-400">
                <Star size={12} className="fill-current" />
                <span className="font-bold">{app.rating}</span>
              </div>
              <div className="text-xs text-slate-500 font-mono bg-slate-900/30 px-2 py-1 rounded">
                {app.version}
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="px-4 py-3 bg-slate-850 border-t border-slate-700 flex justify-between items-center">
           <div className="flex items-center gap-1 text-slate-400 text-xs">
             <HardDrive size={12} />
             <span>{app.size}</span>
           </div>
           <button className="bg-slate-700 hover:bg-emerald-600 text-white p-1.5 rounded-lg transition-colors group-hover:bg-emerald-500">
             <Download size={16} />
           </button>
        </div>
      </div>
    </Link>
  );
};