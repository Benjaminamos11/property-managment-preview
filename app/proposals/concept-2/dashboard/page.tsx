'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, 
  Building2, 
  Hammer, 
  Users, 
  Search, 
  Plus, 
  Calendar,
  Settings,
  Bell,
  ArrowRight,
  TrendingUp,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

export default function Concept2Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Portfolio Overview', icon: <LayoutDashboard size={20} />, active: true },
    { name: 'Estate Management', icon: <Building2 size={20} /> },
    { name: 'Private Concierge', icon: <Hammer size={20} /> },
    { name: 'Tenant Relations', icon: <Users size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#E5D7C5] text-[#0F4C5C] font-sans flex flex-col md:flex-row selection:bg-[#B47C48]/30 antialiased">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex w-80 bg-[#FAF9F6] border-r border-[#B47C48]/10 flex-col fixed h-full z-20">
        <div className="p-10 mb-8">
          <Logo />
        </div>
        
        <nav className="flex-grow px-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className={cn(
                "flex items-center gap-5 px-4 py-3 text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-500 rounded-none",
                item.active 
                  ? "bg-[#0F4C5C] text-white shadow-xl shadow-[#0F4C5C]/20" 
                  : "text-[#0F4C5C]/40 hover:text-[#B47C48] hover:translate-x-2"
              )}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="p-10 space-y-8">
          <div className="p-6 bg-[#E5D7C5]/30 rounded-none border border-[#B47C48]/10 text-center">
            <p className="text-[8px] font-black uppercase tracking-widest text-[#B47C48] mb-2">Support Level</p>
            <p className="text-xs font-serif italic text-[#0F4C5C]">Bespoke 24/7</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#B47C48] rounded-full flex items-center justify-center text-white font-serif italic text-lg shadow-lg shadow-[#B47C48]/20">S</div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest">S. von Rotz</div>
              <div className="text-[8px] font-bold text-[#B47C48] uppercase tracking-[0.2em]">Estate Director</div>
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
              className="fixed inset-0 bg-[#0F4C5C]/40 z-[60] md:hidden backdrop-blur-sm"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 150 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#FAF9F6] z-[70] md:hidden flex flex-col shadow-2xl"
            >
              <div className="p-8 flex justify-between items-center border-b border-[#B47C48]/10">
                <Logo />
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#0F4C5C]">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-grow p-8 space-y-8 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href="#"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] transition-all",
                      item.active 
                        ? "text-[#B47C48]" 
                        : "text-[#0F4C5C]/40 hover:text-[#B47C48]"
                    )}
                  >
                    {item.icon}
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="p-8 border-t border-[#B47C48]/10 flex items-center gap-4">
                <div className="w-12 h-12 bg-[#B47C48] rounded-full flex items-center justify-center text-white font-serif italic text-lg">S</div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest">S. von Rotz</div>
                  <div className="text-[8px] font-bold text-[#B47C48] uppercase tracking-[0.2em]">Estate Director</div>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow md:ml-80 bg-white min-h-screen">
        {/* Top Header */}
        <header className="h-20 md:h-24 bg-white/80 backdrop-blur-xl border-b border-[#B47C48]/10 flex items-center justify-between px-6 md:px-12 sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 md:hidden text-[#0F4C5C]"
            >
              <Menu size={24} />
            </button>
            <div className="flex flex-col">
              <h1 className="text-xl md:text-3xl font-light tracking-tight text-[#0F4C5C] italic font-serif leading-none">Portfolio Übersicht</h1>
              <p className="hidden xs:block text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#B47C48] mt-1 md:mt-2">Willkommen zurück in Ihrem Dashboard.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 md:gap-8">
            <button className="hidden sm:block text-[#0F4C5C]/40 hover:text-[#0F4C5C] transition-colors relative">
              <Bell size={20} />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF8C00] rounded-full" />
            </button>
            <div className="hidden sm:block h-6 w-[1px] bg-[#B47C48]/20" />
            <Button className="h-10 md:h-12 bg-[#B47C48] text-white rounded-none px-4 md:px-10 font-black uppercase tracking-widest text-[8px] md:text-[9px] hover:bg-[#B47C48]/90 transition-all shadow-xl shadow-[#B47C48]/20">
              <Plus size={16} className="mr-1 md:mr-2" /> <span className="hidden xs:inline">Objekt Hinzufügen</span><span className="xs:hidden">Neu</span>
            </Button>
          </div>
        </header>

        <div className="p-6 md:p-12 space-y-12 md:space-y-20">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { label: 'Immobilien', value: '18', detail: 'Luxusportfolios', icon: <Building2 /> },
              { label: 'Einheiten', value: '124', detail: '99% Belegung', icon: <Users /> },
              { label: 'Jahresrendite', value: '4.8%', detail: 'Optimiert', icon: <TrendingUp /> },
              { label: 'Saldo (CHF)', value: '458k', detail: 'Nettozufluss', icon: <MapPin /> },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="bg-[#FAF9F6] p-8 md:p-10 flex flex-col items-center text-center group hover:bg-[#E5D7C5]/20 transition-all duration-700 relative overflow-hidden border border-[#B47C48]/5"
              >
                <div className="text-[#B47C48] mb-4 md:mb-6 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
                </div>
                <div className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-[#B47C48] mb-4 md:mb-6 opacity-60">{stat.label}</div>
                <div className="text-4xl md:text-5xl font-light tracking-tighter text-[#0F4C5C] mb-3 md:mb-4 font-serif italic">{stat.value}</div>
                <div className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] text-[#0F4C5C] opacity-30">{stat.detail}</div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#B47C48]/20 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Featured Properties */}
          <section>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-12 gap-4">
              <div className="flex items-center gap-4">
                <span className="w-12 h-[1px] bg-[#B47C48]" />
                <h2 className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-[#0F4C5C]">Premium Portfolios</h2>
              </div>
              <button className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-[#B47C48] hover:text-[#0F4C5C] transition-colors flex items-center gap-2">
                Alle Objekte ansehen <ArrowRight size={12} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                { name: 'Palais Bellevue', location: 'Genève, Suisse', value: 'CHF 12.4M', yield: '4.2%' },
                { name: 'Alpine Lodge', location: 'St. Moritz, Suisse', value: 'CHF 8.1M', yield: '5.1%' },
              ].map((obj, i) => (
                <motion.div 
                  key={obj.name}
                  whileHover={{ y: -5 }}
                  className="bg-[#FAF9F6] group cursor-pointer overflow-hidden border border-[#B47C48]/5"
                >
                  <div className="aspect-[16/9] sm:aspect-[21/9] bg-[#E5D7C5] relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F4C5C]/20" />
                    <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 text-[7px] md:text-[8px] font-black uppercase tracking-widest text-[#0F4C5C]">
                      <MapPin size={10} className="text-[#B47C48]" /> {obj.location}
                    </div>
                  </div>
                  <div className="p-6 md:p-10 border-x border-b border-[#B47C48]/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-light tracking-tight italic font-serif text-[#0F4C5C] mb-2">{obj.name}</h3>
                      <div className="flex flex-wrap gap-4 text-[8px] md:text-[9px] font-black uppercase tracking-widest text-[#6C757D]">
                        <span>Wert: <span className="text-[#0F4C5C]">{obj.value}</span></span>
                        <span>Rendite: <span className="text-[#B47C48]">{obj.yield}</span></span>
                      </div>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#B47C48]/20 flex items-center justify-center text-[#B47C48] group-hover:bg-[#B47C48] group-hover:text-white transition-all duration-500 self-end sm:self-center">
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Calendar & Activities */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="lg:col-span-2 bg-[#FAF9F6] p-8 md:p-10 border border-[#B47C48]/10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-[#0F4C5C]">Management Kalender</h3>
                <Calendar size={16} className="text-[#B47C48]" />
              </div>
              <div className="space-y-4 md:space-y-6">
                {[
                  { title: 'Besichtigung Bellevue', date: 'Morgen, 14:00', type: 'Viewing' },
                  { title: 'Vertrag Zug', date: 'Do, 10:00', type: 'Legal' },
                  { title: 'Wartung St. Moritz', date: 'Fr, Ganztags', type: 'Maintenance' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-3 md:py-4 border-b border-[#B47C48]/5 last:border-0 hover:bg-[#E5D7C5]/10 transition-colors px-4 -mx-4 group">
                    <div className="flex gap-4 md:gap-6 items-center">
                      <div className="text-[8px] md:text-[10px] font-serif italic text-[#B47C48] w-16 md:w-20">{item.date}</div>
                      <div className="text-[10px] md:text-xs font-bold uppercase tracking-tight text-[#0F4C5C]">{item.title}</div>
                    </div>
                    <div className="text-[7px] md:text-[8px] font-black uppercase tracking-widest text-[#6C757D] group-hover:text-[#B47C48] transition-colors">{item.type}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0F4C5C] p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden border border-[#B47C48]/10">
               <div className="absolute top-0 right-0 p-6 md:p-10 opacity-10">
                 <Logo light className="scale-[1.5] md:scale-[2]" />
               </div>
               <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-light tracking-tight italic font-serif mb-4 md:mb-6 leading-tight">Bereit für die nächste <br />Expansion?</h3>
                  <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-white/60 mb-8 md:mb-10 leading-relaxed max-w-xs">Unser VIP-Service unterstützt Sie bei der strategischen Neuausrichtung Ihrer Assets.</p>
               </div>
               <Button className="relative z-10 w-full h-14 md:h-16 bg-white text-[#0F4C5C] rounded-none font-black uppercase tracking-[0.2em] text-[8px] md:text-[9px] hover:bg-[#B47C48] hover:text-white transition-all duration-700 shadow-2xl">
                 Consulting Anfordern
               </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
