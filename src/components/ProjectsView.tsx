import React, { useState } from 'react';
import { Play, Search, Disc, Sparkles } from 'lucide-react';
import { SoundProject, ProjectCategory } from '../types';
import { soundEngine } from '../utils/soundEngine';

interface ProjectsViewProps {
  projects: SoundProject[];
  onSelectProject: (project: SoundProject) => void;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({
  projects,
  onSelectProject
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'game-sfx', label: 'GAME SFX' },
    { id: 'bgm', label: 'BGM / COMPOSITION' },
    { id: 'foley', label: 'FOLEY & ENV' },
    { id: 'trailer', label: 'TRAILER MIX' },
    { id: 'ui-sound', label: 'UI SOUND PACK' }
  ];

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.role.some((r) => r.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProject = projects.find((p) => p.isFeatured) || projects[0];

  return (
    <div className="w-full space-y-9 animate-fadeIn text-white font-sans">
      {/* Featured Reel Hero Card */}
      {featuredProject && (
        <div className="relative rounded-3xl overflow-hidden bg-[#0e1018] border border-slate-800 p-7 md:p-10 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 text-xs font-mono font-bold">
                <Sparkles className="w-4 h-4 text-amber-400" />
                FEATURED AUDIO SHOWCASE
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black font-sans text-white leading-tight">
                {featuredProject.title}
              </h2>

              <p className="text-amber-300 font-mono text-sm sm:text-base font-bold">
                {featuredProject.subtitle}
              </p>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap items-center gap-3.5 pt-3">
                <button
                  id={`btn-play-featured-${featuredProject.id}`}
                  onClick={() => {
                    soundEngine.playClick();
                    onSelectProject(featuredProject);
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-mono font-black text-sm flex items-center gap-2.5 shadow-xl hover:brightness-110 hover:scale-105 transition-all cursor-pointer"
                >
                  <Play className="w-4.5 h-4.5 fill-current" />
                  <span>PLAY VIDEO</span>
                </button>

                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-slate-300">
                  <span className="px-3 py-1.5 rounded-lg bg-[#06070b] border border-slate-800 text-slate-200 font-semibold">
                    {featuredProject.genre}
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-[#06070b] border border-slate-800 text-cyan-300 font-black">
                    {featuredProject.releaseYear}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Thumbnail preview */}
            <div className="lg:col-span-5">
              <div
                onClick={() => {
                  soundEngine.playClick();
                  onSelectProject(featuredProject);
                }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 group cursor-pointer shadow-2xl bg-black"
              >
                <img
                  src={featuredProject.thumbnailUrl || 'https://picsum.photos/seed/cyber/800/450'}
                  alt={featuredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all">
                    <Play className="w-8 h-8 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0e1018] p-4 sm:p-5 rounded-2xl border border-slate-800 font-mono">
        {/* Filter categories */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playTabSwitch();
                setSelectedCategory(cat.id);
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-sm'
                  : 'bg-[#06070b] border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4.5 h-4.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#06070b] border border-slate-800 focus:border-cyan-400 rounded-xl pl-10 pr-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-colors"
          />
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            id={`project-card-${proj.id}`}
            onClick={() => {
              soundEngine.playClick();
              onSelectProject(proj);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="group relative bg-[#0e1018] border border-slate-800 hover:border-cyan-500/70 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col cursor-pointer"
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden bg-black">
              <img
                src={proj.thumbnailUrl || 'https://picsum.photos/seed/sound/800/450'}
                alt={proj.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e1018] via-transparent to-transparent" />

              {/* Play Overlay Button */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="w-14 h-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-7 h-7 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-black/85 border border-slate-800 text-cyan-300 text-xs font-mono tracking-wider font-bold shadow-md">
                {proj.genre.toUpperCase()}
              </div>

              {/* Release Year */}
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/85 text-slate-200 text-xs font-mono font-bold shadow-md">
                {proj.releaseYear}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold font-sans text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-amber-300 font-mono mt-1 line-clamp-1 font-bold">
                  {proj.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-slate-300 font-sans mt-2.5 line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Roles & Tools list */}
              <div className="pt-3.5 border-t border-slate-800/80 flex flex-wrap gap-1.5 text-xs font-mono">
                {proj.role.slice(0, 2).map((r, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-[#06070b] border border-cyan-500/40 text-cyan-300 font-bold">
                    {r}
                  </span>
                ))}
                {proj.toolsUsed.slice(0, 2).map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-[#06070b] border border-amber-500/40 text-amber-300 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 bg-[#0e1018] rounded-2xl border border-slate-800 font-mono">
          <Disc className="w-14 h-14 text-slate-500 mx-auto mb-3.5" />
          <p className="text-slate-200 text-base font-bold">해당 카테고리의 프로젝트가 없습니다.</p>
        </div>
      )}
    </div>
  );
};
