'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Building2, 
  Users2, 
  Hammer, 
  Search, 
  Plus, 
  FileDown, 
  TrendingUp, 
  ChevronRight,
  MoreVertical,
  ArrowUpRight,
  Menu,
  X,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

export default function Concept1Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Übersicht', icon: <LayoutDashboard size={20} />, active: true },
    { name: 'Immobilien', icon: <Building2 size={20} /> },
    { name: 'Handwerker', icon: <Hammer size={20} /> },
    { name: 'Mieter', icon: <Users2 size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F4C5C] font-sans flex flex-col md:flex-row selection:bg-[#0F4C5C] selection:text-white antialiased">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-72 bg-white border-r border-[#0F4C5C]/10 flex-col fixed h-full z-20">
        <div className="p-8 border-b border-[#0F4C5C]/5">
          <Logo />
        </div>
        
        <nav className="flex-grow p-4 space-y-2 mt-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-4 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all",
                item.active 
                  ? "bg-[#0F4C5C] text-white border-l-4 border-[#B47C48]" 
                  : "text-[#0F4C5C]/50 hover:bg-[#0F4C5C]/5 hover:text-[#0F4C5C]"
              )}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="p-8 border-t border-[#0F4C5C]/5">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#0F4C5C] flex items-center justify-center text-white font-black text-sm">JS</div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest">Jakob Steiner</div>
              <div className="text-[8px] font-bold text-[#6C757D] uppercase tracking-widest">Administrator</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] md:hidden backdrop-blur-sm"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-sm bg-white z-[70] md:hidden flex flex-col"
            >
              <div className="p-6 border-b border-[#0F4C5C]/5 flex justify-between items-center">
                <Logo />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-grow p-4 space-y-2 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-4 px-6 py-4 text-xs font-black uppercase tracking-[0.2em] transition-all",
                      item.active 
                        ? "bg-[#0F4C5C] text-white border-l-4 border-[#B47C48]" 
                        : "text-[#0F4C5C]/50 hover:bg-[#0F4C5C]/5 hover:text-[#0F4C5C]"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="p-6 border-t border-[#0F4C5C]/5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0F4C5C] flex items-center justify-center text-white font-black text-sm">JS</div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest">Jakob Steiner</div>
                    <div className="text-[8px] font-bold text-[#6C757D] uppercase tracking-widest">Administrator</div>
                  </div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow md:ml-72 flex flex-col">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-[#0F4C5C]/10 flex items-center justify-between px-6 md:px-10 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 md:hidden text-[#0F4C5C]"
            >
              <Menu size={24} />
            </button>
            <h1 className="text-base md:text-xl font-black uppercase tracking-tighter">Übersicht</h1>
            <div className="hidden sm:block h-4 w-[2px] bg-[#0F4C5C]/10" />
            <p className="hidden sm:block text-[10px] font-bold text-[#6C757D] uppercase tracking-widest">Update: Heute, 09:41</p>
          </div>
          
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden lg:relative lg:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C757D]" size={16} />
              <input 
                type="text" 
                placeholder="SUCHEN..." 
                className="bg-[#FAF9F6] border-2 border-[#0F4C5C]/5 px-12 py-2.5 text-[10px] font-black uppercase tracking-widest focus:border-[#0F4C5C] outline-none transition-all w-64"
              />
            </div>
            <Button variant="institutional" size="sm" className="h-9 md:h-10 px-4 md:px-6 font-black uppercase tracking-widest text-[8px] md:text-[9px]">
              <Plus size={14} className="mr-1 md:mr-2" /> <span className="hidden xs:inline">Neue Immobilie</span><span className="xs:hidden">Neu</span>
            </Button>
          </div>
        </header>

        <div className="p-6 md:p-10 space-y-8 md:space-y-10">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Immobilien', value: '42', detail: 'Aktiv: 40 | Inaktiv: 2', icon: <Building2 /> },
              { label: 'Wohnungen', value: '856', detail: 'Belegt: 842 | Leer: 14', icon: <Home /> },
              { label: 'Belegung', value: '98.4%', detail: 'Trend: +0.2% vs. VM', icon: <TrendingUp /> },
              { label: 'Mietinkommen', value: '1.24M', detail: 'TODO: Berechnung', icon: <ArrowUpRight /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border-2 border-[#0F4C5C]/5 p-6 md:p-8 relative overflow-hidden group hover:border-[#0F4C5C] transition-all"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 48 })}
                </div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-[#6C757D] mb-3 md:mb-4">{stat.label}</div>
                <div className="text-3xl md:text-4xl font-black tracking-tighter mb-2">{stat.value}</div>
                <div className="text-[8px] md:text-[9px] font-bold text-[#0F4C5C] uppercase tracking-widest">{stat.detail}</div>
                <div className="mt-4 h-1 bg-[#0F4C5C]/5 w-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '70%' }}
                    className="h-full bg-[#B47C48]"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Table Section */}
          <section className="bg-white border-2 border-[#0F4C5C]/5 overflow-hidden">
            <div className="p-6 md:p-8 border-b border-[#0F4C5C]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h2 className="text-xs md:text-sm font-black uppercase tracking-widest">Portfolio</h2>
              <Button variant="outline" size="sm" className="w-full sm:w-auto h-9 px-4 border-2 border-[#0F4C5C] text-[#0F4C5C] font-black uppercase tracking-widest text-[8px] rounded-none hover:bg-[#0F4C5C] hover:text-white transition-all">
                <FileDown size={14} className="mr-2" /> Exportieren
              </Button>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-[#FAF9F6] border-b border-[#0F4C5C]/10 text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#6C757D]">
                    <th className="px-6 md:px-8 py-4 md:py-6">Objekt-ID</th>
                    <th className="px-6 md:px-8 py-4 md:py-6">Bezeichnung</th>
                    <th className="px-6 md:px-8 py-4 md:py-6">Standort</th>
                    <th className="px-6 md:px-8 py-4 md:py-6">Einheiten</th>
                    <th className="px-6 md:px-8 py-4 md:py-6">Status</th>
                    <th className="px-6 md:px-8 py-4 md:py-6 text-right">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="text-[10px] md:text-[11px] font-bold text-[#0F4C5C]">
                  {[
                    { id: 'OT-001', name: 'Residenz Seeblick', city: 'Zürich', units: '24', status: 'Aktiv' },
                    { id: 'OT-002', name: 'Villa Montana', city: 'Zug', units: '12', status: 'Wartung' },
                    { id: 'OT-003', name: 'Bahnhofstrasse 44', city: 'Zürich', units: '48', status: 'Aktiv' },
                    { id: 'OT-004', name: 'Le Chalet Blanc', city: 'Zermatt', units: '6', status: 'Aktiv' },
                  ].map((row) => (
                    <tr key={row.id} className="border-b border-[#0F4C5C]/5 hover:bg-[#0F4C5C]/[0.02] transition-colors">
                      <td className="px-6 md:px-8 py-4 md:py-6 font-black">{row.id}</td>
                      <td className="px-6 md:px-8 py-4 md:py-6">{row.name}</td>
                      <td className="px-6 md:px-8 py-4 md:py-6 uppercase tracking-wider">{row.city}</td>
                      <td className="px-6 md:px-8 py-4 md:py-6">{row.units} Units</td>
                      <td className="px-6 md:px-8 py-4 md:py-6">
                        <span className={cn(
                          "px-2 md:px-3 py-1 text-[7px] md:text-[8px] font-black uppercase tracking-widest",
                          row.status === 'Aktiv' ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                        )}>
                          {row.status}
                        </span>
                      </td>
                      <td className="px-6 md:px-8 py-4 md:py-6 text-right">
                        <button className="text-[#6C757D] hover:text-[#0F4C5C] transition-colors">
                          <MoreVertical size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="p-6 md:p-8 border-t border-[#0F4C5C]/5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-[8px] md:text-[9px] font-bold text-[#6C757D] uppercase tracking-widest text-center sm:text-left">4 von 42 Einträgen</p>
              <div className="flex gap-2">
                <Button variant="outline" className="h-8 w-8 p-0 rounded-none border border-[#0F4C5C]/10 text-[#0F4C5C]">1</Button>
                <Button variant="outline" className="h-8 w-8 p-0 rounded-none border border-[#0F4C5C]/10 text-[#6C757D]">2</Button>
                <Button variant="outline" className="h-8 w-8 p-0 rounded-none border border-[#0F4C5C]/10 text-[#6C757D]"><ChevronRight size={14} /></Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
