import React, { useCallback, useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, CheckCircle2 } from 'lucide-react';

function parseMockTags(fileName) {
  const base = fileName.replace(/\.[^/.]+$/, '').replace(/[_-]/g, ' ');
  // Mock extraction: "Artist - Venue - 2024-05-21"
  const parts = base.split(' - ').map((s) => s.trim());
  return {
    artist: parts[0] || 'Unknown Artist',
    venue: parts[1] || 'Unknown Venue',
    date: parts[2] || new Date().toISOString().slice(0, 10),
  };
}

export default function UploadSection() {
  const [files, setFiles] = useState([]);

  const onSelect = useCallback((e) => {
    const selected = Array.from(e.target.files || []);
    const withTags = selected.map((f) => ({ file: f, tags: parseMockTags(f.name) }));
    setFiles(withTags);
  }, []);

  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Upload</h2>
          <p className="text-sm text-white/60">One-tap cloud upload · Auto-tagging</p>
        </div>

        <label className="group block cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 opacity-60" style={{ background: 'radial-gradient(60% 60% at 50% 50%, rgba(0, 196, 255, 0.10) 0%, rgba(131,56,236,0.10) 100%)' }} />
          <div className="relative flex flex-col items-center text-center">
            <motion.div initial={{ scale: 0.95 }} whileHover={{ scale: 1.0 }} className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40">
              <Upload className="h-6 w-6" />
            </motion.div>
            <h3 className="text-lg font-medium">Drag & drop your concert videos/photos</h3>
            <p className="mt-2 text-sm text-white/70 flex items-center gap-2">
              <Sparkles className="h-4 w-4" /> We’ll auto-tag by artist, venue, and date
            </p>
            <input type="file" multiple onChange={onSelect} className="sr-only" />
          </div>
        </label>

        {files.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {files.map(({ file, tags }, idx) => (
              <motion.div
                key={file.name + idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-sm font-medium truncate">{file.name}</div>
                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 px-2 py-1"><CheckCircle2 className="h-3 w-3" /> Artist: {tags.artist}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 px-2 py-1"><CheckCircle2 className="h-3 w-3" /> Venue: {tags.venue}</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/20 px-2 py-1"><CheckCircle2 className="h-3 w-3" /> Date: {tags.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
