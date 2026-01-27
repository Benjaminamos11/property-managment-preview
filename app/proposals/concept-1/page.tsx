'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, FileText, BarChart3, ChevronRight, Check, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export default function Concept1Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F4C5C] font-sans selection:bg-[#0F4C5C] selection:text-white antialiased">
      {/* Top Border Branding */}
      <div className="h-2 w-full bg-[#0F4C5C] fixed top-0 z-[100]" />
      
      {/* Navigation */}
      <nav className="border-b border-[#0F4C5C]/10 bg-white/95 backdrop-blur-md sticky top-2 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex gap-10">
            {['Services', 'Sicherheit', 'Compliance', 'Unternehmen'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F4C5C]/60 hover:text-[#0F4C5C] transition-colors">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="institutional" className="hidden xs:flex bg-[#0F4C5C] text-white border-2 border-[#B47C48] rounded-none px-6 md:px-8 font-black uppercase tracking-widest text-[9px] h-10 hover:bg-[#0F4C5C]/90 transition-all">
              Portal Login
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#0F4C5C]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-b border-[#0F4C5C]/10 p-6 flex flex-col gap-6"
          >
            {['Services', 'Sicherheit', 'Compliance', 'Unternehmen'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-black uppercase tracking-[0.25em] text-[#0F4C5C]">
                {item}
              </a>
            ))}
            <Button variant="institutional" className="w-full bg-[#0F4C5C] text-white border-2 border-[#B47C48] rounded-none font-black uppercase tracking-widest text-[10px] h-12">
              Portal Login
            </Button>
          </motion.div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="lg:col-span-7 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-3 px-4 md:px-5 py-2 md:py-2.5 bg-[#0F4C5C] text-white mb-8 md:mb-12 shadow-xl">
                  <Shield size={16} className="text-[#B47C48]" />
                  <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Verified Swiss Standard</span>
                  <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#FF8C00] rounded-full shadow-[0_0_10px_rgba(255,140,0,1)]" />
                </div>
                <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12 text-[#0F4C5C]">
                  Präzision <br />
                  <span className="text-[#B47C48]">ist unser</span> <br />
                  Standard.
                </h1>
                <p className="text-lg md:text-xl text-[#6C757D] font-medium max-w-xl mb-10 md:mb-14 leading-relaxed">
                  Otti One automatisiert Ihre Nebenkostenabrechnungen mit staatlicher Präzision. 
                  Wir garantieren volle Compliance mit dem schweizerischen Mietrecht.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                  <Button className="h-16 md:h-20 px-8 md:px-14 bg-[#0F4C5C] text-white font-black uppercase tracking-[0.25em] text-[10px] md:text-xs rounded-none border-b-4 md:border-b-8 border-[#B47C48] shadow-2xl">
                    BERATUNG ANFORDERN
                  </Button>
                  <Button variant="outline" className="h-16 md:h-20 px-8 md:px-14 border-2 border-[#0F4C5C] text-[#0F4C5C] font-black uppercase tracking-[0.25em] text-[10px] md:text-xs rounded-none">
                    PRODUKT-DEMO
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-5 relative mt-12 lg:mt-0">
              <div className="absolute inset-0 bg-[#0F4C5C]/5 -rotate-3 translate-x-4 md:translate-x-6 translate-y-4 md:translate-y-6" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="relative bg-[#FAF9F6] border-2 md:border-4 border-[#0F4C5C] p-8 md:p-12 shadow-2xl"
              >
                <div className="space-y-8 md:space-y-10">
                  <div className="flex justify-between items-center pb-6 md:pb-8 border-b-2 border-[#0F4C5C]/10">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-40 text-[#0F4C5C]">SYSTEM_CORE_OS</span>
                    <span className="text-[8px] md:text-[10px] font-bold text-[#0F4C5C] flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> ACTIVE
                    </span>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <div className="h-4 md:h-5 bg-[#0F4C5C]/10 w-full" />
                    <div className="h-4 md:h-5 bg-[#0F4C5C]/5 w-11/12" />
                  </div>
                  <div className="grid grid-cols-2 gap-4 md:gap-6">
                    <div className="h-24 md:h-32 bg-[#0F4C5C] border-2 border-[#0F4C5C] flex flex-col items-center justify-center text-white gap-2 md:gap-3">
                      <BarChart3 size={24} className="text-[#B47C48]" />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">ANALYTICS</span>
                    </div>
                    <div className="h-24 md:h-32 bg-white border-2 border-[#0F4C5C]/10 flex flex-col items-center justify-center text-[#0F4C5C] gap-2 md:gap-3">
                      <Lock size={24} className="text-[#6C757D]" />
                      <span className="text-[8px] font-black uppercase tracking-[0.2em]">SECURITY</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-24 md:py-40 bg-[#FAF9F6] relative">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
              <h2 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] text-[#B47C48] mb-4 md:mb-6">Schweizer Fundament</h2>
              <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#0F4C5C] max-w-2xl leading-none">Keine Kompromisse.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 md:border-4 border-[#0F4C5C]">
              {[
                { title: "Rechtssicherheit", desc: "Kantonal angepasste Algorithmen.", icon: <Shield size={40} /> },
                { title: "Transparenz", desc: "Vollständig nachvollziehbar.", icon: <FileText size={40} /> },
                { title: "Schweizer Hosting", desc: "Datenhaltung in der Schweiz.", icon: <Lock size={40} /> }
              ].map((pill, i) => (
                <div key={i} className="p-10 md:p-20 border-[#0F4C5C] md:border-r last:border-r-0 border-b md:border-b-0 bg-white hover:bg-[#0F4C5C] transition-all group">
                  <div className="text-[#0F4C5C] group-hover:text-[#B47C48] mb-8 transition-colors">
                    {pill.icon}
                  </div>
                  <h4 className="text-lg font-black uppercase tracking-widest mb-4 md:mb-6 text-[#0F4C5C] group-hover:text-white transition-colors">{pill.title}</h4>
                  <p className="text-[#6C757D] group-hover:text-white/80 text-sm font-medium transition-colors">
                    {pill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 md:py-40 bg-[#0F4C5C] text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10 md:mb-12">
                  Bereit für den <br />
                  <span className="text-[#B47C48]">neuen Standard?</span>
                </h2>
                <div className="space-y-6 md:space-y-8">
                  {["Mietrecht-Compliance", "Auto-Nebenkosten", "Handwerker-Netzwerk"].map((item) => (
                    <div key={item} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full border-2 border-white/20 flex items-center justify-center text-[#FF8C00]">
                        <Check size={14} />
                      </div>
                      <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.25em] opacity-80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 items-start lg:items-end">
                <Button className="w-full sm:w-auto h-20 md:h-24 px-12 md:px-20 text-[10px] md:text-sm font-black uppercase tracking-[0.4em] bg-[#FAF9F6] text-[#0F4C5C] hover:bg-[#B47C48] hover:text-white border-none shadow-2xl transition-all">
                  TERMIN VEREINBAREN <ChevronRight className="ml-4 md:ml-6" />
                </Button>
                <div className="flex items-center gap-3 text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                   <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#FF8C00] rounded-full" />
                   VERFÜGBAR IN DER SCHWEIZ
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 md:py-24 bg-white border-t border-[#0F4C5C]/10 text-center px-6">
        <Logo className="mx-auto mb-8 opacity-30 grayscale scale-75 md:scale-100" />
        <p className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.6em] text-[#0F4C5C]/20 leading-loose">
          OTTI ONE AG &bull; ZURICH &bull; SCHWEIZ &bull; 2026
        </p>
      </footer>
    </div>
  );
}
