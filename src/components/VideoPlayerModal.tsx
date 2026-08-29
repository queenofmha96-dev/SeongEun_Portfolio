import React, { useEffect } from 'react';
import { X, Sparkles, CheckCircle2, Layers, Wrench, UserCheck, ExternalLink, PlaySquare } from 'lucide-react';
import { SoundProject } from '../types';
import { soundEngine } from '../utils/soundEngine';

interface VideoPlayerModalProps {
  project: SoundProject;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  project,
  onClose
}) => {
  // Lock body scroll and listen for ESC key
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  // Helper to resolve video embed link with autoplay
  const getEmbedSource = () => {
    if (project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be')) {
      let videoId = '';
      if (project.videoUrl.includes('embed/')) {
        videoId = project.videoUrl.split('embed/')[1];
      } else if (project.videoUrl.includes('v=')) {
        videoId = project.videoUrl.split('v=')[1];
      } else if (project.videoUrl.includes('youtu.be/')) {
        videoId = project.videoUrl.split('youtu.be/')[1];
      }
      if (videoId) {
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) videoId = videoId.substring(0, ampersandPosition);
        const questionPosition = videoId.indexOf('?');
        if (questionPosition !== -1) videoId = videoId.substring(0, questionPosition);
        return `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1&rel=0`;
      }
    }
    if (project.videoUrl.includes('vimeo.com')) {
      const vimeoId = project.videoUrl.split('vimeo.com/')[1];
      if (vimeoId) return `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
    }
    return project.videoUrl;
  };

  // Helper for watch on YouTube link
  const getWatchUrl = () => {
    if (!project.videoUrl) return 'https://www.youtube.com';
    if (project.videoUrl.includes('embed/')) {
      const videoId = project.videoUrl.split('embed/')[1]?.split('?')[0];
      return videoId ? `https://www.youtube.com/watch?v=${videoId}` : project.videoUrl;
    }
    return project.videoUrl;
  };

  const isDirectVideo =
    project.videoType === 'direct' ||
    project.videoUrl.endsWith('.mp4') ||
    project.videoUrl.endsWith('.webm') ||
    project.videoUrl.startsWith('blob:');

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md overflow-y-auto animate-fadeIn cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl max-h-[92vh] flex flex-col bg-[#090a12] border border-slate-800/90 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] my-auto text-white font-sans cursor-default"
      >
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#05060a] border-b border-slate-800/80 font-mono flex-shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(0,243,255,0.8)]" />
            <span className="text-cyan-300 font-black text-xs sm:text-sm tracking-wider">
              {project.genre.toUpperCase()} <span className="text-slate-600">//</span> OFFICIAL SHOWCASE
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Watch on YouTube External Link Button */}
            <a
              href={getWatchUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundEngine.playClick()}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-3.5 py-2 rounded-xl bg-red-950/60 border border-red-500/50 hover:bg-red-900/60 hover:border-red-400 text-red-300 hover:text-white transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm font-mono font-bold group shadow-sm"
              title="YouTube 원본 영상 새 탭에서 열기"
            >
              <PlaySquare className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
              <span>YouTube에서 직접 보기</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onClose}
              onMouseEnter={() => soundEngine.playHover()}
              className="px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/60 text-slate-200 hover:text-cyan-300 transition-all cursor-pointer flex items-center gap-2 text-xs sm:text-sm font-mono group"
            >
              <X className="w-4.5 h-4.5 group-hover:rotate-90 transition-transform" />
              <span className="font-bold hidden sm:inline">닫기 (ESC)</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-9">
          
          {/* Left Column: Immersive Cinema Video Player + Highlights */}
          <div className="lg:col-span-7 space-y-6">
            {/* Cinema Frame */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-[0_0_30px_rgba(0,0,0,0.5)] group">
              {isDirectVideo ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <iframe
                  src={getEmbedSource()}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Quick Watch on YouTube sub-banner */}
            <div className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#06070c] border border-slate-800/80 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                HD Audio & Video Master Available
              </span>
              <a
                href={getWatchUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1 font-bold"
              >
                <span>원본 영상 바로가기</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Key Sound Design Highlights Card */}
            {project.soundHighlights && project.soundHighlights.length > 0 && (
              <div className="bg-[#0e1018] p-5 rounded-2xl border border-slate-800/80 space-y-3.5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono font-black text-cyan-400 uppercase tracking-wide">
                  <Sparkles className="w-4.5 h-4.5 text-amber-400" />
                  <span>Key Sound Design Highlights</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5 text-xs sm:text-sm text-slate-200">
                  {project.soundHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 bg-[#06070c] px-4 py-3 rounded-xl border border-slate-800/70 hover:border-slate-700 transition-colors"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed font-sans text-slate-200 font-medium break-keep">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Essential Project Specs & Stem Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              {/* Category & Genre Header Badges */}
              <div className="flex items-center gap-2.5">
                <span className="px-3.5 py-1.5 rounded-lg bg-cyan-950/90 border border-cyan-500/50 text-cyan-300 font-mono text-xs sm:text-sm font-bold tracking-wide">
                  {project.client || 'Seongeun Studio'}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs sm:text-sm font-bold">
                  {project.genre}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-black font-sans text-white tracking-tight leading-snug break-keep">
                  {project.title}
                </h2>
                <p className="text-sm sm:text-base text-amber-300 font-mono font-bold mt-1.5 break-keep">
                  {project.subtitle}
                </p>
              </div>

              {/* Description Card */}
              <div className="bg-[#0e1018] p-5 rounded-2xl border border-slate-800/80">
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans break-keep">
                  {project.description}
                </p>
              </div>

              {/* Audio Stems Layer Breakdown (Static composition list) */}
              {project.stems && project.stems.length > 0 && (
                <div className="bg-[#0e1018] p-5 rounded-2xl border border-slate-800/80 space-y-3.5">
                  <div className="flex items-center justify-between font-mono text-xs sm:text-sm text-cyan-300">
                    <span className="flex items-center gap-2 font-black tracking-wide">
                      <Layers className="w-4.5 h-4.5 text-cyan-400" />
                      AUDIO STEMS COMPOSITION
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Layer Specs</span>
                  </div>

                  <div className="space-y-2.5">
                    {project.stems.map((stem) => (
                      <div
                        key={stem.id}
                        className="p-3 rounded-xl bg-[#06070c] border border-slate-800/80 flex items-center justify-between gap-3 text-xs sm:text-sm font-mono"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <span
                            className="w-3 h-3 rounded-full flex-shrink-0 shadow-sm"
                            style={{ backgroundColor: stem.color }}
                          />
                          <span className="text-slate-200 truncate font-semibold">{stem.name}</span>
                        </div>

                        <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono font-bold flex-shrink-0">
                          {stem.type.toUpperCase()}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Well-Structured Roles & Tools Spec Grid */}
            <div className="pt-4 border-t border-slate-800/80 space-y-4 font-mono text-xs sm:text-sm">
              
              {/* Roles */}
              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-cyan-400" />
                  <span>Roles & Responsibilities</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.role.map((r, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 font-bold text-xs sm:text-sm"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & DAWs */}
              <div className="space-y-2 pt-1">
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>Software & DAW Environment</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.toolsUsed.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-amber-950/70 border border-amber-500/40 text-amber-300 font-bold text-xs sm:text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
