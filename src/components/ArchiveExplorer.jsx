import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Music, MapPin, Calendar } from 'lucide-react';

const data = {
  'Aurora Echo': {
    'Horizon Dome': ['2024-07-12', '2023-12-01'],
    'North Star Hall': ['2022-09-14']
  },
  'Neon Rivers': {
    'Luna Hall': ['2024-08-03'],
  },
  'Violet Pulse': {
    'Nebula Stage': ['2024-05-21', '2023-05-19']
  }
};

function Row({ title, subtitle, leftIcon: Icon, isOpen, onToggle, level = 0, children }) {
  return (
    <div className={`rounded-xl ${level === 0 ? 'bg-white/5 border border-white/10' : ''}`}>
      <button onClick={onToggle} className={`w-full flex items-center justify-between px-4 py-3 ${level > 0 ? 'text-sm' : ''}`}>
        <div className="flex items-center gap-3">
          {Icon && <Icon className="h-4 w-4 text-white/70" />}
          <div className="text-left">
            <div className="font-medium">{title}</div>
            {subtitle && <div className="text-xs text-white/60">{subtitle}</div>}
          </div>
        </div>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`overflow-hidden ${level === 0 ? 'border-t border-white/10' : ''}`}
          >
            <div className="p-2 md:p-3 space-y-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ArchiveExplorer() {
  const [openArtist, setOpenArtist] = useState(null);
  const [openVenue, setOpenVenue] = useState({});

  return (
    <section className="relative bg-[#0A0A0A] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Concert Archive</h2>
          <p className="text-sm text-white/60">Artist → Venue → Date</p>
        </div>

        <div className="space-y-3">
          {Object.entries(data).map(([artist, venues]) => {
            const isArtistOpen = openArtist === artist;
            return (
              <Row
                key={artist}
                title={artist}
                subtitle={`${Object.keys(venues).length} venue(s)`}
                leftIcon={Music}
                isOpen={isArtistOpen}
                onToggle={() => setOpenArtist(isArtistOpen ? null : artist)}
                level={0}
              >
                {Object.entries(venues).map(([venue, dates]) => {
                  const isVenueOpen = openVenue[venue] === true;
                  return (
                    <div key={venue} className="px-2">
                      <Row
                        title={venue}
                        subtitle={`${dates.length} date(s)`}
                        leftIcon={MapPin}
                        isOpen={isVenueOpen}
                        onToggle={() => setOpenVenue((s) => ({ ...s, [venue]: !isVenueOpen }))}
                        level={1}
                      >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                          {dates.map((d) => (
                            <div key={d} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs inline-flex items-center gap-2">
                              <Calendar className="h-3 w-3" /> {new Date(d).toLocaleDateString()}
                            </div>
                          ))}
                        </div>
                      </Row>
                    </div>
                  );
                })}
              </Row>
            );
          })}
        </div>
      </div>
    </section>
  );
}
