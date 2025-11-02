import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Share2, Music, MapPin, Calendar } from 'lucide-react';

const sampleClips = [
  { id: 1, artist: 'Aurora Echo', venue: 'Horizon Dome', date: '2024-07-12' },
  { id: 2, artist: 'Neon Rivers', venue: 'Luna Hall', date: '2024-08-03' },
  { id: 3, artist: 'Violet Pulse', venue: 'Nebula Stage', date: '2024-05-21' },
  { id: 4, artist: 'Electric Vale', venue: 'Prism Arena', date: '2023-11-02' },
];

function ClipCard({ clip }) {
  const [liked, setLiked] = useState(false);

  return (
    <motion.div
      key={clip.id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10"
    >
      <div className="aspect-[9/16] w-full bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 flex items-center justify-center">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03 }}
          className="text-white/70 text-sm flex items-center gap-2"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20">🎬</span>
          Smooth preview — tap like or share
        </motion.div>
      </div>

      <div className="p-4">
        <div className="flex items-center gap-2 text-white">
          <Music className="h-4 w-4 text-white/60" />
          <span className="font-medium">{clip.artist}</span>
        </div>
        <div className="mt-1 flex items-center gap-3 text-xs text-white/60">
          <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {clip.venue}</span>
          <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(clip.date).toLocaleDateString()}</span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button
              onClick={() => setLiked((v) => !v)}
              whileTap={{ scale: 0.9 }}
              className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs border ${liked ? 'bg-white text-black border-white' : 'text-white/80 border-white/20'}`}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-black text-black' : ''}`} />
              {liked ? 'Liked' : 'Like'}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs text-white/80 border border-white/20"
            >
              <Share2 className="h-4 w-4" /> Share
            </motion.button>
          </div>

          <div className="text-[10px] uppercase tracking-widest text-white/40">AI Curated</div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
    </motion.div>
  );
}

export default function HomeFeed() {
  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Home Feed</h2>
          <p className="text-sm text-white/60">Infinite vibes · Smooth discovery</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sampleClips.map((clip) => (
            <ClipCard key={clip.id} clip={clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
