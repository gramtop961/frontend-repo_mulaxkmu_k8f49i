import React from 'react';
import HeroCover from './components/HeroCover';
import HomeFeed from './components/HomeFeed';
import UploadSection from './components/UploadSection';
import ArchiveExplorer from './components/ArchiveExplorer';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-inter">
      <HeroCover />
      <HomeFeed />
      <UploadSection />
      <ArchiveExplorer />
      <footer className="border-t border-white/10 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-6 py-8 text-xs text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} Concert Cloud — Crafted for cinematic memories
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
