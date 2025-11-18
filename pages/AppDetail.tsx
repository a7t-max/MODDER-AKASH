import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_APPS } from '../services/mockData';
import { Download, ShieldCheck, Calendar, HardDrive, Hash, Info, ChevronLeft, Star, Share2, MessageCircle, User } from 'lucide-react';
import { DownloadModal } from '../components/DownloadModal';

export const AppDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [app, setApp] = useState(MOCK_APPS[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const found = MOCK_APPS.find(a => a.id === id);
    if (found) setApp(found);
  }, [id]);

  if (!app) return <div>App not found</div>;

  return (
    <div className="min-h-screen pb-20 bg-slate-900">
      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} app={app} />
      
      {/* Banner Background */}
      <div className="h-64 md:h-80 w-full relative overflow-hidden group">
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/30 z-10"></div>
         <img src={app.bannerUrl} alt="banner" className="w-full h-full object-cover blur-sm opacity-60 group-hover:scale-105 transition-transform duration-1000" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20">
        
        {/* Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-sm text-slate-400">
          <Link to="/" className="hover:text-emerald-500 transition-colors">Home</Link>
          <span>/</span>
          <span className="hover:text-emerald-500 cursor-pointer">{app.category}</span>
          <span>/</span>
          <span className="text-white truncate">{app.title}</span>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden">
          
          {/* Header Info */}
          <div className="p-6 md:p-8 flex flex-col md:flex-row gap-8 border-b border-slate-700 relative overflow-hidden">
             {/* Decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

            <img 
              src={app.iconUrl} 
              alt={app.title} 
              className="w-32 h-32 md:w-40 md:h-40 rounded-3xl shadow-xl border-4 border-slate-700 bg-slate-900 z-10"
            />
            
            <div className="flex-1 z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">{app.title}</h1>
                  <p className="text-emerald-400 font-medium mb-4 flex items-center gap-2">
                    <span>{app.developer}</span>
                    <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                    <span className="text-slate-400 text-sm">Official Mod</span>
                  </p>
                  <div className="flex flex-wrap gap-3">
                     <span className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600 hover:border-emerald-500/50 transition-colors">
                       {app.category}
                     </span>
                     <span className="bg-yellow-500/10 text-yellow-400 px-3 py-1 rounded-full text-sm border border-yellow-500/20 flex items-center gap-1">
                       <Star size={14} className="fill-current"/> {app.rating}
                     </span>
                     <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/20 flex items-center gap-1">
                       <Download size={14} /> {app.downloads}
                     </span>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button className="p-3 bg-slate-700 hover:bg-slate-600 rounded-xl text-slate-300 transition-colors border border-slate-600">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                   <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><Hash size={12}/> Version</div>
                   <div className="text-white font-mono text-sm">{app.version}</div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                   <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><HardDrive size={12}/> Size</div>
                   <div className="text-white font-mono text-sm">{app.size}</div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                   <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><Calendar size={12}/> Updated</div>
                   <div className="text-white font-mono text-sm">{app.updatedDate}</div>
                </div>
                <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                   <div className="text-slate-500 text-xs mb-1 flex items-center gap-1"><ShieldCheck size={12}/> Status</div>
                   <div className="text-emerald-400 font-bold text-sm">Working</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x divide-slate-700">
            
            <div className="col-span-2 p-6 md:p-8">
              {/* Description */}
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
                About this Mod
              </h2>
              <div className="prose prose-invert prose-emerald max-w-none mb-8">
                <p className="text-slate-300 leading-relaxed whitespace-pre-line">
                  {app.description}
                </p>
                <p className="text-slate-300 mt-4">
                  Download <strong>{app.title}</strong> now to experience all premium features unlocked for free. 
                  This mod has been tested and is 100% working on Android devices. Enjoy ad-free gameplay, 
                  unlimited resources, and exclusive skins without spending a penny.
                </p>
              </div>

              {/* Mod Features */}
              <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-purple-500 pl-3">Mod Features</h3>
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6 mb-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 text-emerald-400 shrink-0">
                        <ShieldCheck size={14} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Screenshots */}
              <h3 className="text-lg font-bold text-white mb-4 border-l-4 border-blue-500 pl-3">Screenshots</h3>
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                 {app.screenshots.map((shot, idx) => (
                    <img key={idx} src={shot} alt="Screenshot" className="h-48 rounded-lg shadow-lg border border-slate-700 snap-center hover:scale-[1.02] transition-transform" />
                 ))}
              </div>

              {/* Comments Section */}
              <div className="mt-12 pt-8 border-t border-slate-700">
                  <div className="flex items-center gap-2 mb-6">
                    <MessageCircle className="text-emerald-500" />
                    <h3 className="text-xl font-bold text-white">Comments (3)</h3>
                  </div>
                  
                  <div className="space-y-6">
                      {/* Comment 1 */}
                      <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                              A
                          </div>
                          <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                  <span className="text-white font-bold text-sm">AlexGamer</span>
                                  <span className="text-slate-500 text-xs">2 hours ago</span>
                              </div>
                              <div className="bg-slate-800/50 p-3 rounded-lg rounded-tl-none border border-slate-700/50">
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    This mod works perfectly! The unlimited money feature is real. Thanks admin!
                                </p>
                              </div>
                          </div>
                      </div>

                      {/* Comment 2 */}
                      <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                              M
                          </div>
                          <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                  <span className="text-white font-bold text-sm">ModTester2024</span>
                                  <span className="text-slate-500 text-xs">5 hours ago</span>
                              </div>
                              <div className="bg-slate-800/50 p-3 rounded-lg rounded-tl-none border border-slate-700/50">
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    Can you update to the latest version? The game just had a small update today.
                                </p>
                              </div>
                              {/* Reply */}
                              <div className="mt-3 ml-2 pl-4 border-l-2 border-slate-700 flex gap-3">
                                   <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                                      <ShieldCheck size={14} />
                                   </div>
                                   <div>
                                     <div className="flex items-center gap-2 mb-1">
                                        <span className="text-emerald-400 font-bold text-xs">Admin</span>
                                        <span className="bg-emerald-500/20 text-emerald-400 text-[10px] px-1.5 py-0.5 rounded border border-emerald-500/30">MOD</span>
                                        <span className="text-slate-500 text-xs">1 hour ago</span>
                                     </div>
                                     <p className="text-slate-400 text-xs">
                                        We are working on it! Check back in 24 hours.
                                     </p>
                                   </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Leave a comment */}
                  <div className="mt-8 bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                      <h4 className="text-white font-bold text-sm mb-4 flex items-center gap-2">
                         <User size={16} className="text-slate-400"/> Leave a Reply
                      </h4>
                      <textarea 
                          className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-slate-200 text-sm focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all h-24 resize-none mb-4"
                          placeholder="Write your comment here..."
                      ></textarea>
                      <div className="flex justify-end">
                        <button className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold py-2 px-6 rounded-lg transition-colors shadow-lg shadow-emerald-900/20">
                            Post Comment
                        </button>
                      </div>
                  </div>
              </div>
            </div>

            <div className="col-span-1 bg-slate-850 p-6 md:p-8">
               <div className="sticky top-24">
                  <div className="bg-gradient-to-b from-slate-800 to-slate-800/50 rounded-2xl border border-slate-700 p-6 text-center mb-6 shadow-xl">
                      <p className="text-slate-400 text-sm mb-4">Version {app.version}</p>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-emerald-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2 mb-4 text-lg group"
                      >
                        <Download size={24} className="group-hover:animate-bounce" />
                        Download Now
                      </button>
                      <p className="text-xs text-slate-500">
                        Scanned with AntiVirus • No Malware
                      </p>
                  </div>
                  
                  <div className="bg-slate-800 rounded-xl border border-slate-700 p-4 space-y-4">
                     <h4 className="text-white font-semibold border-b border-slate-700 pb-2">Installation Info</h4>
                     <div className="text-sm text-slate-400 space-y-3">
                        <div className="flex gap-3">
                           <span className="bg-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">1</span>
                           <p>Download the APK file.</p>
                        </div>
                        <div className="flex gap-3">
                           <span className="bg-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">2</span>
                           <p>Allow "Unknown Sources" in settings.</p>
                        </div>
                        <div className="flex gap-3">
                           <span className="bg-slate-700 w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">3</span>
                           <p>Install and enjoy!</p>
                        </div>
                     </div>
                     <div className="bg-yellow-500/10 text-yellow-200 text-xs p-3 rounded border border-yellow-500/20 flex gap-2 items-start">
                        <Info size={14} className="shrink-0 mt-0.5" />
                        <span>Note: Uninstall original version before installing mod to avoid errors.</span>
                     </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-white font-semibold mb-4">Related Apps</h4>
                    <div className="space-y-4">
                      {MOCK_APPS.filter(a => a.id !== app.id).slice(0, 4).map(rel => (
                         <Link key={rel.id} to={`/app/${rel.id}`} className="flex gap-3 items-center group p-2 rounded-lg hover:bg-slate-800 transition-colors">
                            <img src={rel.iconUrl} className="w-12 h-12 rounded-lg shadow-sm" alt={rel.title} />
                            <div className="flex-1 min-w-0">
                               <div className="text-white font-medium truncate group-hover:text-emerald-400 transition-colors text-sm">{rel.title}</div>
                               <div className="text-slate-500 text-xs flex items-center gap-1">
                                 <Star size={10} className="text-yellow-500 fill-current" /> {rel.rating}
                               </div>
                            </div>
                         </Link>
                      ))}
                    </div>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};