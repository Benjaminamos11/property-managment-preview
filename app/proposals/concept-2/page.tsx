'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Users, Sparkles, MapPin, ArrowRight, Quote, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';

export default function Concept2Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-[#E5D7C5] text-[#0F4C5C] font-sans antialiased selection:bg-[#B47C48]/30">
      {/* Navigation */}
      <nav className="border-b border-[#B47C48]/10 bg-[#E5D7C5]/80 backdrop-blur-2xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-24 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex gap-16 font-black text-[10px] uppercase tracking-[0.3em] text-[#0F4C5C]/50">
            <a href="#" className="hover:text-[#B47C48] transition-colors">Portfolio</a>
            <a href="#" className="hover:text-[#B47C48] transition-colors">Philosophie</a>
            <a href="#" className="hover:text-[#B47C48] transition-colors">Kontakt</a>
          </div>
          <div className="flex items-center gap-4">
            <Button className="hidden xs:flex bg-[#B47C48] text-white rounded-none px-10 hover:bg-[#B47C48]/90 tracking-[0.15em] uppercase text-[9px] font-black h-11 transition-all">
              Anfragen
            </Button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-[#0F4C5C]">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#FAF9F6] border-b border-[#B47C48]/10 overflow-hidden"
            >
              <div className="p-8 space-y-8">
                {['Portfolio', 'Philosophie', 'Kontakt'].map((item) => (
                  <a key={item} href="#" className="block text-[11px] font-black uppercase tracking-[0.3em] text-[#0F4C5C]">
                    {item}
                  </a>
                ))}
                <Button className="w-full bg-[#B47C48] text-white rounded-none h-14 font-black uppercase tracking-[0.2em] text-[10px]">
                  Private Beratung anfordern
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="py-48 bg-[#E5D7C5]">
          <div className="max-w-7xl mx-auto px-10">
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-6 mb-12">
                  <span className="w-16 h-[2px] bg-[#B47C48]" />
                  <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#B47C48]">Management Excellence</span>
                  <div className="w-2 h-2 bg-[#FF8C00] rounded-full shadow-[0_0_10px_rgba(255,140,0,0.5)]" />
                </div>
                <h1 className="text-7xl md:text-[10rem] font-light tracking-tight text-[#0F4C5C] mb-16 leading-[0.8] mix-blend-multiply">
                  Eleganz <br />
                  <span className="italic font-serif text-[#B47C48]">vereinfacht.</span>
                </h1>
                <p className="text-3xl text-[#6C757D] max-w-2xl mb-20 leading-tight font-light tracking-tight">
                  Otti One ist die Boutique-Softwarelösung für die exklusivsten Immobilienportfolios der Welt. Mühelose Automatisierung, absolute Klarheit.
                </p>
                <div className="flex flex-col sm:flex-row gap-12 items-start sm:items-center">
                  <Button className="h-20 px-16 bg-[#0F4C5C] text-white rounded-none font-black uppercase tracking-[0.3em] text-[10px] shadow-[0_30px_60px_-15px_rgba(15,76,92,0.3)] hover:translate-y-[-4px] transition-all duration-500">
                    Private Beratung
                  </Button>
                  <a href="#" className="group flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-[#0F4C5C]">
                    DAS ERLEBNIS <ArrowRight size={18} className="transition-transform group-hover:translate-x-3 text-[#B47C48]" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="py-48 bg-white">
          <div className="max-w-7xl mx-auto px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
              <div className="lg:col-span-5">
                <div className="space-y-16">
                  <div className="inline-flex items-center gap-4 px-6 py-2.5 bg-[#E5D7C5]/40 rounded-full border border-[#B47C48]/10">
                    <Sparkles size={18} className="text-[#B47C48]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F4C5C]">Premium Automatisierung</span>
                  </div>
                  <h2 className="text-6xl font-light tracking-tight leading-[1] text-[#0F4C5C]">Konzipiert für das <br /><span className="text-[#B47C48] font-serif italic">moderne Anwesen.</span></h2>
                  <p className="text-xl text-[#6C757D] leading-relaxed font-light">
                    Wir glauben, dass Verwaltungssoftware genauso ästhetisch sein sollte wie die Immobilien, die sie verwaltet. Unsere Benutzeroberfläche ist von jeglichem Rauschen befreit.
                  </p>
                  <div className="space-y-10 pt-10">
                    {[
                      { label: "Bespoke Portale", sub: "Individuelle Interfaces für Ihre Mieter" },
                      { label: "Nahtlose Abrechnung", sub: "Nebenkostenverteilung mit einem Klick" },
                      { label: "Handwerker-Netzwerk", sub: "Direkte Kommunikation mit Experten" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-10 items-start group">
                        <div className="text-[#B47C48] font-serif italic text-4xl pt-1 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-2 text-[#0F4C5C] group-hover:text-[#B47C48] transition-colors">{item.label}</h4>
                          <p className="text-[10px] text-[#6C757D] uppercase tracking-widest font-bold opacity-60">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5 }}
                  viewport={{ once: true }}
                  className="relative aspect-[4/5] bg-[#E5D7C5] overflow-hidden shadow-[0_80px_160px_-40px_rgba(180,124,72,0.3)] rounded-3xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E5D7C5] via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center p-32">
                    <div className="w-full aspect-square border-2 border-[#B47C48]/5 rounded-full flex items-center justify-center">
                      <div className="w-5/6 aspect-square border-2 border-[#B47C48]/5 rounded-full flex items-center justify-center animate-pulse">
                        <div className="w-2/3 aspect-square bg-[#FAF9F6] shadow-2xl rounded-3xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-1000">
                          <Logo className="scale-125" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating Notification Accent */}
                  <div className="absolute top-20 right-20 w-4 h-4 bg-[#FF8C00] rounded-full shadow-[0_0_20px_rgba(255,140,0,0.8)] animate-bounce" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-48 bg-[#FAF9F6] border-y border-[#E5D7C5]">
          <div className="max-w-7xl mx-auto px-10 text-center">
            <Quote className="mx-auto mb-16 text-[#B47C48] opacity-10" size={100} />
            <h3 className="text-5xl md:text-6xl font-light tracking-tight max-w-5xl mx-auto mb-20 leading-[1.1] italic font-serif text-[#0F4C5C]">
              &quot;Otti One hat die Art und Weise, wie wir unsere Luxus-Assets in Zürich und St. Moritz verwalten, grundlegend verändert. Es ist der Goldstandard für Effizienz.&quot;
            </h3>
            <div className="space-y-4">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-[#B47C48]">Marc-André Steiner</p>
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#6C757D]">Direktor, Steiner Real Estate Genève</p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="py-64 bg-[#E5D7C5]">
          <div className="max-w-7xl mx-auto px-10 text-center">
            <h2 className="text-7xl md:text-[11rem] font-light tracking-tighter mb-24 text-[#0F4C5C] leading-none">Der neue <br />Standard.</h2>
            <Button className="h-24 px-24 bg-[#B47C48] text-white rounded-none font-black uppercase tracking-[0.4em] text-xs shadow-[0_40px_80px_-20px_rgba(180,124,72,0.4)] hover:translate-y-[-8px] transition-all duration-700">
              Private Demo vereinbaren
            </Button>
            <div className="mt-48 flex justify-center gap-32 opacity-10 grayscale contrast-125">
               <div className="text-[11px] font-black tracking-[0.6em] uppercase">GENF</div>
               <div className="text-[11px] font-black tracking-[0.6em] uppercase">ZÜRICH</div>
               <div className="text-[11px] font-black tracking-[0.6em] uppercase">LUGANO</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 bg-white border-t border-[#E5D7C5]">
        <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-16">
          <Logo className="scale-90" />
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6C757D] opacity-40">
            &copy; 2026 Otti One AG &bull; Swiss Crafted Luxury.
          </p>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.2em] text-[#B47C48]">
            <a href="#" className="hover:text-[#0F4C5C] transition-colors">Impressum</a>
            <a href="#" className="hover:text-[#0F4C5C] transition-colors">Datenschutz</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
