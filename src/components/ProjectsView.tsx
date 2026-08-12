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
    <div className="max-w-7xl mx-auto space-y-8 animate-fadeIn text-white font-sans">
      {/* Featured Reel Hero Card */}
      {featuredProject && (
        <div className="relative rounded-3xl overflow-hidden bg-[#0e1018] border border-slate-800 p-6 md:p-8 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                FEATURED AUDIO SHOWCASE
              </div>

              <h2 className="text-2xl md:text-3xl font-extrabold font-sans text-white leading-tight">
                {featuredProject.title}
              </h2>

              <p className="text-amber-300 font-mono text-sm font-bold">
                {featuredProject.subtitle}
              </p>

              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id={`btn-play-featured-${featuredProject.id}`}
                  onClick={() => {
                    soundEngine.playClick();
                    onSelectProject(featuredProject);
                  }}
                  onMouseEnter={() => soundEngine.playHover()}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-mono font-extrabold text-xs flex items-center gap-2 shadow-lg hover:brightness-110 transition-all cursor-pointer"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>PLAY VIDEO</span>
                </button>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <span className="px-2.5 py-1 rounded bg-[#06070b] border border-slate-800 text-slate-300">
                    {featuredProject.genre}
                  </span>
                  <span className="px-2.5 py-1 rounded bg-[#06070b] border border-slate-800 text-cyan-300 font-bold">
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
                className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 group cursor-pointer shadow-xl bg-black"
              >
                <img
                  src={featuredProject.thumbnailUrl || 'https://picsum.photos/seed/cyber/800/450'}
                  alt={featuredProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                    <Play className="w-7 h-7 fill-current translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#0e1018] p-4 rounded-2xl border border-slate-800 font-mono">
        {/* Filter categories */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundEngine.playTabSwitch();
                setSelectedCategory(cat.id);
              }}
              onMouseEnter={() => soundEngine.playHover()}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500/20 border border-cyan-400 text-cyan-300'
                  : 'bg-[#06070b] border border-slate-800 text-slate-300 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full md:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#06070b] border border-slate-800 focus:border-cyan-400 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 outline-none"
          />
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            id={`project-card-${proj.id}`}
            onClick={() => {
              soundEngine.playClick();
              onSelectProject(proj);
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="group relative bg-[#0e1018] border border-slate-800 hover:border-cyan-500/70 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col cursor-pointer"
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
                <div className="w-12 h-12 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg scale-90 group-hover:scale-100 transition-transform">
                  <Play className="w-6 h-6 fill-current translate-x-0.5" />
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 border border-slate-800 text-cyan-300 text-[10px] font-mono tracking-wider font-bold">
                {proj.genre.toUpperCase()}
              </div>

              {/* Release Year */}
              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-black/80 text-slate-300 text-[10px] font-mono font-bold">
                {proj.releaseYear}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold font-sans text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-amber-300 font-mono mt-1 line-clamp-1 font-semibold">
                  {proj.subtitle}
                </p>
                <p className="text-xs text-slate-300 font-sans mt-2 line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              {/* Roles & Tools list */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1 text-[10px] font-mono">
                {proj.role.slice(0, 2).map((r, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#06070b] border border-cyan-500/30 text-cyan-300 font-bold">
                    {r}
                  </span>
                ))}
                {proj.toolsUsed.slice(0, 2).map((t, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-[#06070b] border border-amber-500/30 text-amber-300 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-[#0e1018] rounded-2xl border border-slate-800 font-mono">
          <Disc className="w-12 h-12 text-slate-500 mx-auto mb-3" />
          <p className="text-slate-300 text-sm">해당 카테고리의 프로젝트가 없습니다.</p>
        </div>
      )}
    </div>
  );
};
