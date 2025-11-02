import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Upload, Play, Rocket } from 'lucide-react';

const Button = ({ children, variant = 'primary', icon: Icon }) => {
  const base = 'relative inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors';
  if (variant === 'primary') {
    return (
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`${base} text-black bg-white`}
      >
        {Icon && <Icon className="h-4 w-4" />}
        {children}
        <span className="absolute inset-0 rounded-full pointer-events-none" style={{ background: 'linear-gradient(90deg, rgba(0,212,255,0.25) 0%, rgba(131,56,236,0.25) 100%)' }} />
      </motion.button>
    );
  }
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} text-white border border-white/20`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </motion.button>
  );
};

export default function HeroCover() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-[#0A0A0A] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="w-full h-full" style={{
          background: 'radial-gradient(60% 60% at 50% 40%, rgba(0, 196, 255, 0.12) 0%, rgba(255, 0, 240, 0.10) 35%, rgba(10,10,10,0.6) 70%, rgba(10,10,10,1) 100%)'
        }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 mb-5 backdrop-blur">
            <Rocket className="h-4 w-4 text-white/80" />
            <span className="text-xs uppercase tracking-widest text-white/70">Cinematic Social Cloud for Concert Lovers</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Every concert memory, forever.
          </h1>
          <p className="mt-5 text-white/70 max-w-xl">
            Upload, organize, and relive your shows with AI-powered tagging by artist, venue, and date. Designed with a futuristic, minimal aesthetic.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button icon={Upload}>
              Upload your moments
            </Button>
            <Button variant="ghost" icon={Play}>
              Watch the feed
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
