import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Youtube, Send, Download, Loader2, ShieldCheck, FileDown } from 'lucide-react';
import { AppItem } from '../types';

// Local enum for the modal state machine
enum ModalStep {
  WAITING,     // Initial countdown
  TASKS,       // Social verification tasks
  GENERATING,  // Generating link spinner
  READY        // Final download button
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  app: AppItem;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose, app }) => {
  const [step, setStep] = useState<ModalStep>(ModalStep.WAITING);
  const [countdown, setCountdown] = useState(5);
  const [tasksCompleted, setTasksCompleted] = useState({ telegram: false, youtube: false });
  const [progress, setProgress] = useState(0);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(ModalStep.WAITING);
      setCountdown(5);
      setTasksCompleted({ telegram: false, youtube: false });
      setProgress(0);
    }
  }, [isOpen]);

  // Countdown Logic
  useEffect(() => {
    if (isOpen && step === ModalStep.WAITING) {
      if (countdown > 0) {
        const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
        return () => clearTimeout(timer);
      } else {
        setStep(ModalStep.TASKS);
      }
    }
  }, [isOpen, step, countdown]);

  // Progress Bar Logic
  useEffect(() => {
    if (step === ModalStep.GENERATING) {
      const interval = setInterval(() => {
        setProgress(p => {
          if (p >= 100) {
            clearInterval(interval);
            setStep(ModalStep.READY);
            return 100;
          }
          return p + 2;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  const handleTaskClick = (task: 'telegram' | 'youtube') => {
    // Simulate visiting the social link
    // window.open(...) 
    
    // Optimistic update to show completed
    setTasksCompleted(prev => {
        const newState = { ...prev, [task]: true };
        // If both tasks are done, move to generating after a delay
        if (newState.telegram && newState.youtube) {
           setTimeout(() => setStep(ModalStep.GENERATING), 1000);
        }
        return newState;
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-slate-900 rounded-2xl max-w-md w-full border border-slate-700 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-slate-800 p-4 border-b border-slate-700 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
             <Download className="text-emerald-500" size={20} />
             <h3 className="text-white font-bold text-lg">Download Center</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white hover:bg-slate-700 rounded-full p-1 transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content - Scrollable */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          
          {/* App Summary */}
          <div className="flex items-center gap-4 mb-8 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <img src={app.iconUrl} alt="icon" className="w-16 h-16 rounded-xl shadow-lg bg-slate-900" />
            <div>
              <div className="text-white font-bold text-lg leading-tight line-clamp-1">{app.title}</div>
              <div className="text-emerald-400 text-sm font-medium mt-1">v{app.version} • Mod Unlocked</div>
            </div>
          </div>

          {step === ModalStep.WAITING && (
             <div className="flex flex-col items-center py-8">
                <div className="relative mb-4">
                   <Loader2 size={48} className="text-emerald-500 animate-spin" />
                   <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">{countdown}</div>
                </div>
                <p className="text-slate-300 font-medium text-center">Please wait while we prepare your file...</p>
                <p className="text-slate-500 text-xs mt-2">Scanning server for available mirrors...</p>
             </div>
          )}

          {step === ModalStep.TASKS && (
             <div className="space-y-4 animate-in slide-in-from-bottom-4 duration-500">
                <div className="text-center mb-6">
                   <h4 className="text-white font-bold text-lg">Verification Required</h4>
                   <p className="text-slate-400 text-sm mt-1">Complete the steps below to unlock the download link.</p>
                </div>

                <button 
                   onClick={() => handleTaskClick('telegram')}
                   disabled={tasksCompleted.telegram}
                   className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all group ${
                      tasksCompleted.telegram 
                      ? 'bg-emerald-500/10 border-emerald-500/50 cursor-default' 
                      : 'bg-slate-800 border-slate-600 hover:border-blue-400 hover:bg-slate-750 cursor-pointer'
                   }`}
                >
                   <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-full transition-colors ${tasksCompleted.telegram ? 'bg-emerald-500' : 'bg-blue-500'}`}>
                         {tasksCompleted.telegram ? <CheckCircle size={20} className="text-white" /> : <Send size={20} className="text-white" />}
                      </div>
                      <div className="text-left">
                         <div className="text-white font-bold text-sm">Join Telegram Channel</div>
                         <div className="text-slate-400 text-xs">{tasksCompleted.telegram ? 'Completed' : 'Get daily updates & mods'}</div>
                      </div>
                   </div>
                </button>

                <button 
                   onClick={() => handleTaskClick('youtube')}
                   disabled={tasksCompleted.youtube}
                   className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all group ${
                      tasksCompleted.youtube 
                      ? 'bg-emerald-500/10 border-emerald-500/50 cursor-default' 
                      : 'bg-slate-800 border-slate-600 hover:border-red-500 hover:bg-slate-750 cursor-pointer'
                   }`}
                >
                   <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-full transition-colors ${tasksCompleted.youtube ? 'bg-emerald-500' : 'bg-red-600'}`}>
                         {tasksCompleted.youtube ? <CheckCircle size={20} className="text-white" /> : <Youtube size={20} className="text-white" />}
                      </div>
                      <div className="text-left">
                         <div className="text-white font-bold text-sm">Subscribe on YouTube</div>
                         <div className="text-slate-400 text-xs">{tasksCompleted.youtube ? 'Completed' : 'Watch mod tutorials'}</div>
                      </div>
                   </div>
                </button>
             </div>
          )}

          {step === ModalStep.GENERATING && (
             <div className="text-center py-6">
                <h4 className="text-white font-bold mb-6">Generating Secure Link...</h4>
                <div className="w-full bg-slate-800 rounded-full h-4 mb-4 overflow-hidden ring-1 ring-slate-700">
                   <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-75 ease-linear shadow-[0_0_10px_rgba(16,185,129,0.5)]"
                      style={{ width: `${progress}%` }}
                   ></div>
                </div>
                <p className="text-slate-400 text-sm font-mono">{progress}% Complete</p>
             </div>
          )}

          {step === ModalStep.READY && (
             <div className="text-center py-4 animate-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                   <FileDown className="text-emerald-500" size={32} />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">Link Ready!</h4>
                <p className="text-slate-400 text-sm mb-6">Your download is ready. Click the button below to start.</p>
                
                <a 
                   href="#" 
                   className="block w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
                >
                   <Download size={20} />
                   Download APK ({app.size})
                </a>
                <p className="text-xs text-slate-500 mt-4">
                   By downloading, you agree to our Terms of Service.
                </p>
             </div>
          )}

        </div>

        {/* Footer */}
        <div className="bg-slate-850 p-3 text-center border-t border-slate-700 shrink-0">
           <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span>Secure • Verified • Official Server</span>
           </div>
        </div>
      </div>
    </div>
  );
};