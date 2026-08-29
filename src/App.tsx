import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { ParticleCanvas } from './components/ParticleCanvas';
import { ProjectsView } from './components/ProjectsView';
import { VideoPlayerModal } from './components/VideoPlayerModal';
import { ProfileView } from './components/ProfileView';
import { GamingHistoryView } from './components/GamingHistoryView';
import { ContactView } from './components/ContactView';
import { SoundProject, SoundDirectorProfile } from './types';
import { INITIAL_PROJECTS, INITIAL_PROFILE } from './data/portfolioData';

export default function App() {
  // Persistence in localStorage
  const [projects, setProjects] = useState<SoundProject[]>(() => {
    try {
      const saved = localStorage.getItem('seongeun_sound_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length < INITIAL_PROJECTS.length) {
          return INITIAL_PROJECTS;
        }
        if (Array.isArray(parsed) && parsed.some(p => p.videoUrl && p.videoUrl.includes('dQw4w9WgXcQ'))) {
          return INITIAL_PROJECTS;
        }
        return parsed;
      }
    } catch {
      // fallback
    }
    return INITIAL_PROJECTS;
  });

  const [profile, setProfile] = useState<SoundDirectorProfile>(() => {
    try {
      const saved = localStorage.getItem('seongeun_sound_profile') || localStorage.getItem('jiho_sound_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.name && parsed.name.includes('JIHO')) {
          parsed.name = "SEONGEUN (성은)";
          parsed.bio = parsed.bio.replace(/지호/g, '성은');
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
      localStorage.setItem('seongeun_sound_projects', JSON.stringify(projects));
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

        <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-16 max-w-[1640px] w-full mx-auto space-y-24 pt-12 sm:pt-16 md:pt-20 pb-36">
          
          {/* Section 1: Director Resume & Profile */}
          <section id="director-stats" className="scroll-mt-28 space-y-7">
            <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4 font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-sm font-black">
                01
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                디렉터 이력서 & 개발 프로필
              </h2>
            </div>
            <ProfileView profile={profile} />
          </section>

          {/* Section 2: Gaming History & Sound Reference */}
          <section id="gaming-history" className="scroll-mt-28 space-y-7">
            <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4 font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-amber-950/90 border border-amber-500/50 text-amber-300 text-sm font-black">
                02
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                게이밍 경력 & 사운드 레퍼런스
              </h2>
            </div>
            <GamingHistoryView />
          </section>

          {/* Section 3: Portfolio Showcase Reel */}
          <section id="showcase-reel" className="scroll-mt-28 space-y-7">
            <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4 font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-sm font-black">
                03
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
                게임 사운드 포트폴리오
              </h2>
            </div>
            <ProjectsView
              projects={projects}
              onSelectProject={(proj) => setSelectedProjectForModal(proj)}
            />
          </section>

          {/* Section 4: Contact */}
          <section id="direct-contact" className="scroll-mt-28 space-y-7">
            <div className="flex items-center gap-3.5 border-b border-slate-800 pb-4 font-mono">
              <span className="px-3 py-1.5 rounded-lg bg-amber-950/90 border border-amber-500/50 text-amber-300 text-sm font-black">
                04
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white font-sans tracking-tight">
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
        <footer className="border-t border-slate-800/80 bg-[#06070b] py-10 text-center text-sm font-mono text-slate-400">
          <div className="max-w-[1640px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© 2026 SEONGEUN SOUND STUDIO. ALL RIGHTS RESERVED.</p>
            <p className="text-purple-300 font-bold text-sm">FMOD / WWISE INTEGRATION COMPATIBLE</p>
          </div>
        </footer>
      </div>

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
