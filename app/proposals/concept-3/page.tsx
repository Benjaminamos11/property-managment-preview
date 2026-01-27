'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Network, MessageSquare, Users, BarChart, Settings, ArrowRight, Share2, Activity, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

export default function Concept3Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F4C5C] font-sans selection:bg-[#7CC6FE]/40 antialiased">
      {/* Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.1] z-0" 
        style={{ backgroundImage: 'linear-gradient(to right, #6C757D 1px, transparent 1px), linear-gradient(to bottom, #6C757D 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Modern HUD Navigation */}
      <nav className="border-b border-[#6C757D]/10 bg-white/90 backdrop-blur-xl relative z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Logo />
          <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-[#6C757D]">
             <div className="flex items-center gap-3 text-[#7CC6FE]">
               <div className="w-2 h-2 bg-[#FF8C00] rounded-full animate-pulse shadow-[0_0_10px_rgba(255,140,0,0.8)]" />
               LIVE_NODE_01
             </div>
             <a href="#" className="hover:text-[#0F4C5C] transition-colors">Infrastruktur</a>
             <a href="#" className="hover:text-[#0F4C5C] transition-colors">API_Konsole</a>
          </div>
          <div className="flex items-center gap-4">
            <Button className="bg-white text-[#0F4C5C] border-2 border-[#7CC6FE] hover:bg-[#7CC6FE] hover:text-[#0F4C5C] rounded-full px-6 md:px-8 text-[9px] font-black tracking-widest h-10 transition-all shadow-xl shadow-[#7CC6FE]/10">
              CONNECT.OS
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-[#0F4C5C]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile HUD Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/90 backdrop-blur-xl border-b border-[#6C757D]/10 overflow-hidden"
            >
              <div className="p-8 space-y-8">
                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-[#7CC6FE]">
                  <div className="w-2 h-2 bg-[#FF8C00] rounded-full animate-pulse" />
                  NODE_ACTIVE
                </div>
                {['Infrastruktur', 'API_Konsole', 'Dokumentation'].map((item) => (
                  <a key={item} href="#" className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#6C757D]">
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-32 md:pb-48 border-b border-[#6C757D]/5">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-4 border border-[#7CC6FE]/40 bg-[#7CC6FE]/5 px-4 md:px-5 py-2 rounded-full mb-8 md:mb-12 shadow-sm">
                    <Zap size={14} className="text-[#7CC6FE]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#0F4C5C]">Efficiency_Engine_v4.0</span>
                  </div>
                  <h1 className="text-5xl md:text-[8rem] font-black tracking-tighter uppercase mb-8 md:mb-12 leading-[0.9] text-[#0F4C5C]">
                    Schnell. <br />
                    Vernetzt. <br />
                    <span className="text-[#7CC6FE]">Verifiziert.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-[#6C757D] max-w-lg mb-10 md:mb-16 font-medium leading-relaxed">
                    Automatisieren Sie die Kommunikation zwischen Mietern, Verwaltern und Handwerkern. Otti One ist der operative Kern Ihres Immobilien-Ökosystems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    <Button className="h-16 md:h-20 px-10 md:px-14 bg-[#0F4C5C] text-white border-none rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-[#7CC6FE] hover:text-[#0F4C5C] transition-all duration-500 shadow-2xl">
                      SYSTEM STARTEN
                    </Button>
                    <Button variant="outline" className="h-16 md:h-20 px-10 md:px-14 border-2 border-[#6C757D]/20 hover:border-[#7CC6FE] rounded-full text-[#0F4C5C] font-black uppercase tracking-[0.3em] text-[10px] transition-all">
                      ARCHITEKTUR
                    </Button>
                  </div>
                </motion.div>
              </div>

              <div className="relative mt-12 lg:mt-0">
                {/* Advanced UI Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-white border border-[#6C757D]/10 rounded-[32px] md:rounded-[40px] p-8 md:p-12 shadow-[0_50px_100px_-20px_rgba(124,198,254,0.2)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6 md:p-8">
                     <Activity size={24} className="text-[#7CC6FE] opacity-20" />
                  </div>
                  
                  <div className="flex gap-2 md:gap-3 mb-8 md:mb-12">
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#6C757D]/20" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#6C757D]/20" />
                    <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-[#FF8C00] shadow-[0_0_10px_rgba(255,140,0,1)]" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
                    {[
                      { icon: <BarChart size={20} />, label: "Analysen", color: "text-[#7CC6FE]" },
                      { icon: <Users size={20} />, label: "Mieter", color: "text-[#6C757D]" },
                      { icon: <MessageSquare size={20} />, label: "Handwerker", color: "text-[#B47C48]" },
                      { icon: <Settings size={20} />, label: "Global", color: "text-[#0F4C5C]" },
                    ].map((item, i) => (
                      <div key={i} className="bg-[#FAF9F6] border border-[#6C757D]/5 rounded-xl md:rounded-2xl p-4 md:p-6 transition-all group">
                        <div className={cn("w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white flex items-center justify-center mb-4 md:mb-6 shadow-sm", item.color)}>
                          {item.icon}
                        </div>
                        <div className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#6C757D] opacity-60 mb-2">{item.label}</div>
                        <div className="h-1.5 w-full bg-[#6C757D]/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             animate={{ width: `${40 + Math.random() * 50}%` }}
                             className="h-full bg-[#7CC6FE]" 
                           />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-[#0F4C5C] rounded-xl md:rounded-2xl p-6 md:p-8 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-4 md:gap-6 text-white">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-[#7CC6FE]">
                        <Share2 className="w-[18px] h-[18px] md:w-5 md:h-5" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] opacity-40 text-[#7CC6FE]">HUB</div>
                        <div className="text-[10px] md:text-sm font-bold tracking-tight uppercase">Export_2026</div>
                      </div>
                    </div>
                    <div className="text-lg md:text-xl font-black text-[#7CC6FE]">98%</div>
                  </div>
                </motion.div>
                
                {/* Visual Ambient Elements */}
                <div className="absolute -top-10 md:-top-20 -right-10 md:-right-20 w-40 md:w-80 h-40 md:h-80 bg-[#7CC6FE]/10 md:bg-[#7CC6FE]/20 blur-[60px] md:blur-[120px] rounded-full -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Feature Matrix */}
        <section className="py-24 md:py-40 bg-white px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                { title: "AUTOPILOT", icon: <Zap size={24} />, value: "Aktiv", sub: "Operational" },
                { title: "NETZWERK", icon: <Network size={24} />, value: "1,240+", sub: "Managed_Nodes" },
                { title: "LATENZ", icon: <Activity size={24} />, value: "0.02ms", sub: "Swiss_Precision" },
                { title: "UPTIME", icon: <BarChart size={24} />, value: "99.9%", sub: "SLA_Geprüft" },
              ].map((item, i) => (
                <div key={i} className="p-8 md:p-10 border-2 border-[#6C757D]/5 rounded-[24px] md:rounded-[32px] hover:border-[#7CC6FE]/30 transition-all group">
                  <div className="text-[#6C757D]/30 group-hover:text-[#7CC6FE] mb-8 md:mb-10 transition-colors">
                    {item.icon}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#6C757D]/40 mb-3">{item.title}</div>
                  <div className="text-2xl md:text-3xl font-black tracking-tighter text-[#0F4C5C] mb-2">{item.value}</div>
                  <div className="text-[9px] font-bold uppercase tracking-widest text-[#7CC6FE] opacity-60">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic Integration Section */}
        <section className="py-32 md:py-48 bg-[#6C757D]/5 relative overflow-hidden px-6 md:px-10">
          <div className="max-w-7xl mx-auto relative z-10 text-center">
            <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-[#7CC6FE] mb-6 md:mb-8">Connectivity</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-12 md:mb-16 text-[#0F4C5C]">One OS. <br />Universal.</h3>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
               <div className="flex -space-x-4 md:-space-x-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white bg-[#FAF9F6] flex items-center justify-center text-[#6C757D] shadow-xl">
                      <Users className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  ))}
               </div>
               <div className="text-center md:text-left">
                  <div className="text-xl md:text-2xl font-black tracking-tighter text-[#0F4C5C]">5,000+ VERWALTER</div>
                  <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#6C757D]">Synchronisiert über den Swiss Hub</div>
               </div>
            </div>

            <div className="mt-16 md:mt-24">
               <Button className="h-24 md:h-32 w-24 md:w-32 rounded-full bg-[#0F4C5C] text-white flex flex-col items-center justify-center gap-2 shadow-2xl hover:bg-[#FF8C00] transition-all duration-700 border-none">
                 <span className="text-[8px] md:text-[10px] font-black tracking-[0.3em]">START</span>
                 <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
               </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 md:py-20 bg-white border-t border-[#6C757D]/10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center opacity-40 gap-8 md:gap-0">
           <Logo className="grayscale scale-75 md:scale-90" />
           <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase text-[#6C757D]">
             <a href="#">NETWORK</a>
             <a href="#">SECURITY</a>
             <a href="#">CORE_API</a>
           </div>
           <p className="text-[8px] md:text-[9px] font-black tracking-[0.4em] uppercase text-[#6C757D] text-center">
             &copy; 2026 OTTI ONE HUB.
           </p>
        </div>
      </footer>
    </div>
  );
}
