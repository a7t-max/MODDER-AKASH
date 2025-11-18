import React from 'react';
import { Facebook, Twitter, Instagram, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
             <span className="text-2xl font-bold text-white tracking-tight">Asking<span className="text-emerald-500">Mod</span></span>
             <p className="mt-4 text-slate-400 text-sm">
               Your #1 source for the latest mods, unlocked apps, and premium features. Safe, fast, and always updated.
             </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-500">Home</a></li>
              <li><a href="#" className="hover:text-emerald-500">Popular Mods</a></li>
              <li><a href="#" className="hover:text-emerald-500">New Releases</a></li>
              <li><a href="#" className="hover:text-emerald-500">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-emerald-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-500">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-500">DMCA Disclaimer</a></li>
              <li><a href="#" className="hover:text-emerald-500">Cookie Policy</a></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-semibold mb-4">Follow Us</h3>
             <div className="flex space-x-4">
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram size={20} /></a>
               <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
             </div>
             <div className="mt-6 bg-slate-900 p-3 rounded-lg border border-slate-800">
               <p className="text-xs text-slate-500 text-center">Join our Telegram for instant updates!</p>
               <button className="mt-2 w-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 rounded transition-colors">
                 Join Telegram
               </button>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">© 2024 AskingMod. All rights reserved.</p>
          <p className="text-slate-600 text-sm flex items-center gap-1 mt-2 md:mt-0">
            Made with <Heart size={14} className="text-red-500 fill-current" /> for Modders
          </p>
        </div>
      </div>
    </footer>
  );
};