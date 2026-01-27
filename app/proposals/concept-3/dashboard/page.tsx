'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  LayoutDashboard, 
  Building2, 
  Hammer, 
  Users, 
  Activity, 
  Network, 
  MessageSquare, 
  Search, 
  Plus, 
  Cpu, 
  ArrowRight, 
  Share2, 
  Database,
  BarChart,
  Settings,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

export default function Concept3Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Übersicht', icon: <LayoutDashboard size={20} />, active: true },
    { name: 'Immobilien', icon: <Building2 size={20} /> },
    { name: 'Handwerker', icon: <Hammer size={20} /> },
    { name: 'Mieter', icon: <Users size={20} /> },
    { name: 'Data Hub', icon: <Database size={20} /> },
    { name: 'Analysen', icon: <BarChart size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0F4C5C] font-sans flex flex-col md:flex-row selection:bg-[#7CC6FE]/40 antialiased overflow-x-hidden">
      {/* 1px Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0" 
        style={{ backgroundImage: 'linear-gradient(to right, #0F4C5C 1px, transparent 1px), linear-gradient(to bottom, #0F4C5C 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />

      {/* Modern Compact Sidebar - Desktop */}
      <aside className="hidden md:flex w-20 bg-white border-r border-[#6C757D]/10 flex-col items-center py-10 fixed h-full z-50 transition-all hover:w-64 group shadow-xl shadow-[#0F4C5C]/5">
        <div className="mb-12 group-hover:px-10 w-full transition-all">
          <div className="w-12 h-12 bg-[#0F4C5C] rounded-xl flex items-center justify-center text-white relative group-hover:w-full group-hover:justify-start group-hover:px-4">
             <span className="font-bold text-xl">O</span>
             <span className="hidden group-hover:block ml-3 font-bold text-sm tracking-tight">Otti One OS</span>
             <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF8C00] rounded-full shadow-[0_0_8px_rgba(255,140,0,0.8)]" />
          </div>
        </div>
        
        <nav className="flex-grow w-full px-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-4 h-12 rounded-xl transition-all relative overflow-hidden group/item",
                item.active 
                  ? "bg-[#7CC6FE]/10 text-[#0F4C5C] border border-[#7CC6FE]/30" 
                  : "text-[#6C757D] hover:bg-[#FAF9F6] hover:text-[#0F4C5C]"
              )}
            >
              <div className="min-w-[48px] flex items-center justify-center relative z-10">
                {item.icon}
                {item.active && (
                  <motion.div 
                    layoutId="active-dot" 
                    className="absolute -right-1 w-1 h-4 bg-[#7CC6FE] rounded-full group-hover:hidden" 
                  />
                )}
              </div>
              <span className="hidden group-hover:block text-[10px] font-black uppercase tracking-[0.2em] relative z-10 whitespace-nowrap">{item.name}</span>
              {item.active && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#7CC6FE]/5 to-[#7CC6FE]/10 opacity-50" />
              )}
            </a>
          ))}
        </nav>
        
        <div className="mt-auto group-hover:px-6 w-full transition-all">
          <div className="w-12 h-12 rounded-full border border-[#6C757D]/20 flex items-center justify-center hover:border-[#7CC6FE] transition-all cursor-pointer group-hover:w-full group-hover:justify-start group-hover:px-4">
             <div className="w-8 h-8 rounded-full bg-[#6C757D]/10 flex items-center justify-center text-[10px] font-bold">AL</div>
             <div className="hidden group-hover:block ml-4 text-left">
                <div className="text-[10px] font-black uppercase tracking-tight">Admin_Level_01</div>
                <div className="text-[8px] font-bold text-[#6C757D] uppercase tracking-widest">Active_Session</div>
             </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 z-[60] md:hidden backdrop-blur-sm"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed top-0 left-0 bottom-0 w-[80%] bg-white z-[70] md:hidden flex flex-col p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <Logo />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-grow space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-xl transition-all",
                      item.active 
                        ? "bg-[#7CC6FE]/10 text-[#0F4C5C] border border-[#7CC6FE]/30" 
                        : "text-[#6C757D] hover:bg-[#FAF9F6]"
                    )}
                  >
                    {item.icon}
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{item.name}</span>
                  </a>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow md:ml-20 relative">
        {/* HUD Top Bar */}
        <header className="h-20 bg-white/50 backdrop-blur-md border-b border-[#6C757D]/5 flex items-center justify-between px-6 md:px-12 sticky top-0 z-40">
          <div className="flex items-center gap-4 md:gap-10">
            <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-[#0F4C5C]">
              <Menu size={24} />
            </button>
            <div className="flex items-center gap-4 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#7CC6FE]">
               <Activity size={16} className="animate-pulse hidden xs:block" />
               <span className="whitespace-nowrap">Live_Data_Link: OK</span>
            </div>
            <div className="hidden lg:block h-4 w-[1px] bg-[#6C757D]/10" />
            <div className="hidden lg:flex text-[10px] font-black uppercase tracking-[0.3em] text-[#6C757D] items-center gap-4">
               <span className="opacity-40">NODE: ZURICH_CORE</span>
               <span className="opacity-40">UPTIME: 99.9%</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:relative lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C757D]" size={14} />
              <input 
                type="text" 
                placeholder="COMMAND_SEARCH" 
                className="bg-[#6C757D]/5 border-none px-10 py-2.5 text-[9px] font-black uppercase tracking-[0.3em] rounded-full focus:ring-2 ring-[#7CC6FE]/30 outline-none transition-all w-64 text-[#0F4C5C]"
              />
            </div>
            <Button variant="hub" size="sm" className="h-9 md:h-10 px-4 md:px-8 text-[8px] md:text-[9px]">
              DEPLOY_MODULE
            </Button>
          </div>
        </header>

        <div className="p-6 md:p-12 space-y-10 md:space-y-12">
          {/* Dashboard Title Section */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
             <div>
                <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-[#0F4C5C]">Operational_Core</h1>
                <p className="text-[10px] md:text-[11px] font-bold text-[#6C757D] uppercase tracking-[0.3em] md:tracking-[0.4em] max-w-md leading-relaxed">System-Übersicht Ihrer Immobilienverwaltung und Kommunikationsflüsse.</p>
             </div>
             <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <div className="p-4 bg-white border border-[#6C757D]/10 rounded-2xl flex items-center justify-between lg:justify-start gap-6 shadow-sm flex-grow">
                   <div className="text-right lg:text-left order-2 lg:order-1">
                      <div className="text-[8px] font-black text-[#6C757D] uppercase tracking-widest mb-1">Throughput</div>
                      <div className="text-lg md:text-xl font-black text-[#0F4C5C]">142.4 GB</div>
                   </div>
                   <Network size={24} className="text-[#7CC6FE] order-1 lg:order-2" />
                </div>
                <div className="p-4 bg-white border border-[#6C757D]/10 rounded-2xl flex items-center justify-between lg:justify-start gap-6 shadow-sm flex-grow">
                   <div className="text-right lg:text-left order-2 lg:order-1">
                      <div className="text-[8px] font-black text-[#6C757D] uppercase tracking-widest mb-1">Integrations</div>
                      <div className="text-lg md:text-xl font-black text-[#0F4C5C]">24</div>
                   </div>
                   <Cpu size={24} className="text-[#7CC6FE] order-1 lg:order-2" />
                </div>
             </div>
          </div>

          {/* Efficiency Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: 'System_Immobilien', value: '42', status: 'SYNC', icon: <Building2 />, color: '#0F4C5C' },
              { label: 'Unit_Belegung', value: '98%', status: 'OPT', icon: <Users />, color: '#7CC6FE' },
              { label: 'Comm_Latency', value: '0.04ms', status: 'CRIT', icon: <Activity />, color: '#FF8C00' },
              { label: 'Fiscal_Stream', value: '1.2M', status: 'VER', icon: <BarChart />, color: '#0F4C5C' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-[#6C757D]/10 p-6 md:p-8 rounded-[32px] hover:border-[#7CC6FE] transition-all duration-500 group relative overflow-hidden"
              >
                <div className="flex justify-between items-start mb-8 md:mb-10">
                   <div className="p-2 md:p-3 bg-[#FAF9F6] rounded-xl text-[#0F4C5C] group-hover:text-[#7CC6FE] transition-colors">
                      {React.cloneElement(stat.icon as React.ReactElement, { size: 24 })}
                   </div>
                   <div className="text-[7px] md:text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-white border border-[#6C757D]/5 rounded-full" style={{ color: stat.color }}>
                      {stat.status}
                   </div>
                </div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#6C757D] mb-3 md:mb-4 opacity-50">{stat.label}</div>
                <div className="text-3xl md:text-4xl font-black tracking-tighter text-[#0F4C5C]">{stat.value}</div>
                <div className="mt-6 md:mt-8 flex gap-1">
                   {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((b) => (
                     <div key={b} className="h-1 flex-grow bg-[#6C757D]/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: b <= (i + 1) * 2 ? '100%' : '0%' }}
                          transition={{ delay: 0.5 + b * 0.05 }}
                          className="h-full"
                          style={{ backgroundColor: stat.color }}
                        />
                     </div>
                   ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main Interface Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
             {/* Communication Stream */}
             <div className="lg:col-span-2 bg-white border border-[#6C757D]/10 rounded-[32px] md:rounded-[40px] p-6 md:p-10 shadow-2xl shadow-[#0F4C5C]/5">
                <div className="flex items-center justify-between mb-8 md:mb-12">
                   <div className="flex items-center gap-4">
                      <MessageSquare size={20} className="text-[#7CC6FE]" />
                      <h3 className="text-xs md:text-sm font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-[#0F4C5C]">Communication_Link</h3>
                   </div>
                   <div className="text-[8px] md:text-[9px] font-black text-[#6C757D] uppercase tracking-widest flex items-center gap-3 md:gap-4">
                      <span className="hidden xs:block">Stream_Live</span>
                      <div className="w-1.5 h-1.5 bg-[#FF8C00] rounded-full animate-pulse" />
                   </div>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                   {[
                     { user: 'Mieter_742', msg: 'Reparatur: Küchenarmatur', status: 'DELEG', time: '14:20' },
                     { user: 'System_Auto', msg: 'Nebenkosten Q4 generiert', status: 'SYNC', time: '12:05' },
                     { user: 'H_Steiner', msg: 'Bestätigung: Objekt-B', status: 'CONF', time: '09:41' },
                     { user: 'Eigentümer', msg: 'Report: Portfolio_2026', status: 'PEND', time: '1 Tag' },
                   ].map((log, i) => (
                     <div key={i} className="flex items-center justify-between p-4 md:p-6 bg-[#FAF9F6] border border-transparent hover:border-[#7CC6FE]/20 hover:bg-white transition-all rounded-2xl md:rounded-3xl group cursor-pointer">
                        <div className="flex flex-col sm:flex-row sm:gap-8 sm:items-center gap-1">
                           <div className="text-[9px] md:text-[10px] font-black uppercase tracking-widest text-[#7CC6FE] sm:w-24">{log.user}</div>
                           <div className="text-[11px] md:text-xs font-bold text-[#0F4C5C] line-clamp-1">{log.msg}</div>
                        </div>
                        <div className="flex items-center gap-4 md:gap-8">
                           <div className="text-[7px] md:text-[8px] font-black uppercase tracking-[0.2em] px-2 py-0.5 md:px-3 md:py-1 bg-white border border-[#6C757D]/5 rounded-full text-[#6C757D]">
                              {log.status}
                           </div>
                           <div className="text-[8px] md:text-[9px] font-bold text-[#6C757D] opacity-40 whitespace-nowrap">{log.time}</div>
                        </div>
                     </div>
                   ))}
                </div>
                
                <Button className="w-full mt-8 md:mt-10 h-14 md:h-16 bg-[#6C757D]/5 hover:bg-[#7CC6FE]/10 text-[#0F4C5C] border border-dashed border-[#6C757D]/20 rounded-2xl md:rounded-3xl font-black uppercase tracking-[0.3em] text-[8px] md:text-[9px] transition-all">
                   VIEW_ALL_LOGS
                </Button>
             </div>

             {/* Connection Manager */}
             <div className="bg-[#0F4C5C] rounded-[32px] md:rounded-[40px] p-8 md:p-10 text-white relative overflow-hidden group min-h-[400px]">
                <div className="absolute top-0 right-0 p-8 md:p-12 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-1000 rotate-12">
                   <Share2 size={240} />
                </div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                   <div>
                      <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-6 md:mb-8 leading-none">Hub_Deployment</h3>
                      <p className="text-[10px] md:text-[11px] font-bold text-white/40 uppercase tracking-[0.3em] leading-relaxed mb-10 md:mb-12">Automatisieren Sie komplexe Zyklen mit einem Klick.</p>
                      
                      <div className="space-y-3 md:space-y-4 mb-10 md:mb-12">
                         {['BILLING_AUTO', 'TENANT_LINK', 'CRAFT_V3'].map((s) => (
                           <div key={s} className="flex items-center gap-3 md:gap-4 text-[8px] md:text-[9px] font-black tracking-widest text-[#7CC6FE]">
                              <div className="w-1 h-1 bg-[#FF8C00] rounded-full" />
                              {s}_ACTIVE
                           </div>
                         ))}
                      </div>
                   </div>
                   
                   <Button variant="hub" size="lg" className="w-full h-16 md:h-20 bg-[#7CC6FE] text-[#0F4C5C] hover:bg-white shadow-2xl transition-all duration-700">
                      DEPLOY <ArrowRight size={20} className="ml-3 md:ml-4" />
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  );
}
