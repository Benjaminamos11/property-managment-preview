'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Home, Zap, ArrowRight, LayoutDashboard, Eye } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/logo';
import { cn } from '@/lib/utils';

export default function ProposalsPage() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#0F4C5C] font-sans antialiased">
      {/* Header */}
      <header className="border-b border-[#E5D7C5] bg-[#FAF9F6]/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-3 px-4 py-1.5 bg-[#0F4C5C]/5 border border-[#0F4C5C]/10 rounded-full">
            <div className="w-2 h-2 bg-[#FF8C00] rounded-full shadow-[0_0_10px_rgba(255,140,0,0.5)]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F4C5C]">Designvorschläge 2026</span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-24">
        {/* Hero Section */}
        <section className="text-center mb-32 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#E5D7C5] rounded-sm mb-10 shadow-sm"
          >
            <Shield size={14} className="text-[#B47C48]" />
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#6C757D]">Geprüfter Schweizer Standard</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black tracking-tighter mb-8 md:mb-10 text-[#0F4C5C] leading-[1.1] md:leading-none"
          >
            Visuelle Identität <br />
            <span className="text-[#B47C48]">Gestaltungswege.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-[#6C757D] leading-relaxed font-medium px-4"
          >
            Prüfen Sie drei differenzierte kreative Wege für Otti One. <br className="hidden md:block" />
            Jede Richtung verbindet Schweizer Präzision mit moderner PropTech-Konnektivität.
          </motion.p>
        </section>

        {/* Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Concept 1: The Institutional Standard */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full border-2 border-[#0F4C5C]/10 bg-white hover:border-[#0F4C5C] transition-all duration-500 flex flex-col overflow-hidden shadow-2xl shadow-[#0F4C5C]/5">
              <div className="h-1.5 bg-[#0F4C5C]" />
              <CardHeader className="p-10">
                <div className="w-14 h-14 bg-[#0F4C5C]/5 flex items-center justify-center text-[#0F4C5C] mb-6 border border-[#0F4C5C]/10">
                  <Shield size={28} />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-tight text-[#0F4C5C]">01. Institutional</CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest text-[#B47C48] mt-2">Der Standard des Vertrauens</CardDescription>
              </CardHeader>
              <CardContent className="px-10 pb-10 flex-grow">
                <p className="text-[#6C757D] text-sm leading-relaxed mb-8 font-medium">
                  Maximale Autorität durch starke Raster und die Dominanz von Deep Teal. Konzipiert für die grossflächige institutionelle Immobilienverwaltung.
                </p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-[#0F4C5C] border border-[#0F4C5C]/20" title="Deep Teal" />
                  <div className="w-6 h-6 bg-[#FAF9F6] border border-[#0F4C5C]/20" title="Cream White" />
                  <div className="w-6 h-6 bg-[#B47C48] border border-[#0F4C5C]/20" title="Copper Bronze" />
                </div>
              </CardContent>
              <CardFooter className="p-10 pt-0 flex flex-col gap-3">
                <Button asChild className="w-full h-12 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-[#FAF9F6] font-black uppercase tracking-widest text-[10px] rounded-none border-b-4 border-[#B47C48]">
                  <Link href="/proposals/concept-1">
                    <Eye size={14} className="mr-2" /> Landing Page Vorschau
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 border-2 border-[#0F4C5C] text-[#0F4C5C] font-black uppercase tracking-widest text-[10px] rounded-none hover:bg-[#0F4C5C] hover:text-white transition-all">
                  <Link href="/proposals/concept-1/dashboard">
                    <LayoutDashboard size={14} className="mr-2" /> Dashboard Vorschau
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Concept 2: The Modern Estate */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full border-2 border-[#E5D7C5] bg-[#FAF9F6] hover:border-[#B47C48] transition-all duration-500 flex flex-col overflow-hidden shadow-2xl shadow-[#B47C48]/5">
              <div className="h-1.5 bg-[#B47C48]" />
              <CardHeader className="p-10">
                <div className="w-14 h-14 rounded-full bg-[#B47C48]/5 flex items-center justify-center text-[#B47C48] mb-6 border border-[#B47C48]/10">
                  <Home size={28} />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-tight text-[#0F4C5C]">02. Modern Estate</CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest text-[#B47C48] mt-2">Boutique & Premium</CardDescription>
              </CardHeader>
              <CardContent className="px-10 pb-10 flex-grow">
                <p className="text-[#6C757D] text-sm leading-relaxed mb-8 font-medium">
                  Eine hochwertige Ästhetik mit Fokus auf Warm Sand-Tönen und Kupfer-Akzenten. Massgeschneidert für luxuriöse Wohnportfolios.
                </p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-[#E5D7C5] border border-[#B47C48]/20" title="Warm Sand" />
                  <div className="w-6 h-6 bg-[#B47C48] border border-[#B47C48]/20" title="Copper Bronze" />
                  <div className="w-6 h-6 bg-[#FAF9F6] border border-[#B47C48]/20" title="Cream White" />
                </div>
              </CardContent>
              <CardFooter className="p-10 pt-0 flex flex-col gap-3">
                <Button asChild className="w-full h-12 bg-[#B47C48] hover:bg-[#B47C48]/90 text-white font-black uppercase tracking-widest text-[10px] rounded-none">
                  <Link href="/proposals/concept-2">
                    <Eye size={14} className="mr-2" /> Landing Page Vorschau
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 border-2 border-[#B47C48] text-[#B47C48] font-black uppercase tracking-widest text-[10px] rounded-none hover:bg-[#B47C48] hover:text-white transition-all">
                  <Link href="/proposals/concept-2/dashboard">
                    <LayoutDashboard size={14} className="mr-2" /> Dashboard Vorschau
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          {/* Concept 3: The Efficiency Hub */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full border-2 border-[#7CC6FE]/20 bg-white hover:border-[#7CC6FE] transition-all duration-500 flex flex-col overflow-hidden shadow-2xl shadow-[#7CC6FE]/5">
              <div className="h-1.5 bg-[#7CC6FE]" />
              <CardHeader className="p-10">
                <div className="w-14 h-14 rounded-xl bg-[#7CC6FE]/5 flex items-center justify-center text-[#7CC6FE] mb-6 border border-[#7CC6FE]/10">
                  <Zap size={28} />
                </div>
                <CardTitle className="text-2xl font-black uppercase tracking-tight text-[#0F4C5C]">03. Efficiency Hub</CardTitle>
                <CardDescription className="text-xs font-bold uppercase tracking-widest text-[#6C757D] mt-2">Tech-First Automatisierung</CardDescription>
              </CardHeader>
              <CardContent className="px-10 pb-10 flex-grow">
                <p className="text-[#6C757D] text-sm leading-relaxed mb-8 font-medium">
                  Klares, schnelles Design unter Verwendung von Stone Grey und Soft Sky Blue. Betont Konnektivität und Echtzeit-Datenflüsse.
                </p>
                <div className="flex gap-2">
                  <div className="w-6 h-6 bg-[#6C757D] border border-[#7CC6FE]/20" title="Stone Grey" />
                  <div className="w-6 h-6 bg-[#7CC6FE] border border-[#7CC6FE]/20" title="Soft Sky Blue" />
                  <div className="w-6 h-6 bg-[#FAF9F6] border border-[#7CC6FE]/20" title="Cream White" />
                </div>
              </CardContent>
              <CardFooter className="p-10 pt-0 flex flex-col gap-3">
                <Button asChild className="w-full h-12 bg-[#0F4C5C] hover:bg-[#7CC6FE] hover:text-[#0F4C5C] text-white border-none rounded-full font-black uppercase tracking-widest text-[10px] transition-all">
                  <Link href="/proposals/concept-3">
                    <Eye size={14} className="mr-2" /> Landing Page Vorschau
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 border-2 border-[#7CC6FE] text-[#0F4C5C] font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[#7CC6FE] hover:text-[#0F4C5C] transition-all">
                  <Link href="/proposals/concept-3/dashboard">
                    <LayoutDashboard size={14} className="mr-2" /> Dashboard Vorschau
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </main>

      <footer className="py-24 border-t border-[#E5D7C5] bg-white text-center">
        <Logo className="mx-auto mb-8 opacity-40 grayscale scale-90" />
        <div className="flex justify-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-[#6C757D]/50">
           <a href="https://0gravity.ch" target="_blank" rel="noopener noreferrer" className="hover:text-[#6C757D] transition-colors">0gravity.ch</a>
           <span>&bull;</span>
           <span>Schweizer Präzision 2026</span>
           <span>&bull;</span>
           <span>Otti One OS</span>
        </div>
      </footer>
    </div>
  );
}
