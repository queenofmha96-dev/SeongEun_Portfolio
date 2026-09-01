import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ParticleCanvas } from './components/ParticleCanvas';
import { ProjectsView } from './components/ProjectsView';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ProfileView } from './components/ProfileView';
import { GamingHistoryView } from './components/GamingHistoryView';
import { ContactView } from './components/ContactView';
import { FloatingControls } from './components/FloatingControls';
import { SoundProject, SoundDirectorProfile } from './types';
import { INITIAL_PROJECTS, INITIAL_PROFILE } from './data/portfolioData';

export default function App() {
  // Persistence in localStorage
  const [projects, setProjects] = useState<SoundProject[]>(() => {
    try {
      const saved = localStorage.getItem('seongeun_sound_projects_v3');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_PROJECTS.length) {
          return parsed;
        }
      }
    } catch {
      // fallback
    }
    return INITIAL_PROJECTS;
  });

  const [profile, setProfile] = useState<SoundDirectorProfile>(() => {
    try {
      const saved = localStorage.getItem('seongeun_sound_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.email && parsed.email !== 'queenofmha96@gmail.com') {
          return INITIAL_PROFILE;
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_PROFILE;
  });

  const [selectedProjectForModal, setSelectedProjectForModal] = useState<SoundProject | null>(null);

  // Sync state to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('seongeun_sound_projects_v3', JSON.stringify(projects));
    } catch {
      // ignore
    }
  }, [projects]);

  useEffect(() => {
    try {
      localStorage.setItem('seongeun_sound_profile', JSON.stringify(profile));
    } catch {
      // ignore
    }
  }, [profile]);

  const handleResetDefaults = () => {
    setProjects(INITIAL_PROJECTS);
    setProfile(INITIAL_PROFILE);
    localStorage.removeItem('seongeun_sound_projects');
    localStorage.removeItem('seongeun_sound_profile');
    localStorage.removeItem('jiho_sound_projects');
    localStorage.removeItem('jiho_sound_profile');
  };

  const handleExportData = () => {
    const data = {
      profile,
      projects,
      exportDate: new Date().toISOString()
    };
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', jsonString);
    downloadAnchor.setAttribute('download', 'seongeun_sound_portfolio.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="relative min-h-screen bg-[#07080f] text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      {/* Static Ambient Dark Canvas */}
      <ParticleCanvas isStartScreen={false} />

      {/* Main Application Workspace */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1 px-4 sm:px-6 md:px-8 max-w-[1240px] w-full mx-auto flex flex-col gap-12 sm:gap-20 pt-4 sm:pt-6 md:pt-8 pb-12 sm:pb-20">
          
          {/* Section 1: Sound Designer Profile */}
          <section id="director-stats" className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2.5 sm:gap-3.5 border-b border-slate-800/80 pb-3.5 sm:pb-4 font-mono">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-xs sm:text-sm font-black">
                01
              </span>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                사운드 디자이너 프로필 & 역량
              </h2>
            </div>
            <ProfileView profile={profile} />
          </section>

          {/* Section 2: Gaming History */}
          <section id="gaming-history" className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2.5 sm:gap-3.5 border-b border-slate-800/80 pb-3.5 sm:pb-4 font-mono">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-amber-950/90 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-black">
                02
              </span>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                게이밍 경력
              </h2>
            </div>
            <GamingHistoryView />
          </section>

          {/* Section 3: Portfolio Showcase Reel */}
          <section id="showcase-reel" className="space-y-6 sm:space-y-8">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-3.5 sm:pb-4 font-mono">
              <div className="flex items-center gap-2.5 sm:gap-3.5">
                <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-xs sm:text-sm font-black">
                  03
                </span>
                <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                  게임 사운드 포트폴리오
                </h2>
              </div>

              <a
                href="https://www.youtube.com/playlist?list=PLiDQe1dL5sFu2nkE2KD_ch_H1XRMxvpmK"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-950/70 hover:bg-red-900/80 border border-red-500/50 text-red-200 hover:text-white text-xs font-sans font-semibold transition-all shadow-xs shrink-0"
              >
                <span>YouTube 전체 재생목록</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-red-400" />
              </a>
            </div>
            <ProjectsView
              projects={projects}
              onSelectProject={(proj) => setSelectedProjectForModal(proj)}
            />
          </section>

          {/* Section 4: Contact */}
          <section id="direct-contact" className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2.5 sm:gap-3.5 border-b border-slate-800/80 pb-3.5 sm:pb-4 font-mono">
              <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-amber-950/90 border border-amber-500/50 text-amber-300 text-xs sm:text-sm font-black">
                04
              </span>
              <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                CONTACT
              </h2>
            </div>
            <ContactView
              profile={profile}
              onResetDefaults={handleResetDefaults}
              onExportData={handleExportData}
            />
          </section>
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-800/80 bg-[#06070b] py-6 sm:py-8 text-center font-mono text-slate-500">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-8 flex flex-col items-center justify-center gap-1.5">
            <p className="text-[11px] sm:text-xs tracking-wider text-slate-400">
              © 2026 SEONGEUN YANG. All Rights Reserved.
            </p>
            <p className="text-[10px] sm:text-[11px] text-slate-600">
              Game Sound Designer & Audio Artist Portfolio
            </p>
          </div>
        </footer>
      </div>

      {/* Floating Action Controls (SFX Toggle & Scroll to Top) */}
      <FloatingControls />

      {/* Video Inspector Modal */}
      {selectedProjectForModal && (
        <VideoPlayerModal
          project={selectedProjectForModal}
          onClose={() => setSelectedProjectForModal(null)}
        />
      )}
    </div>
  );
}
