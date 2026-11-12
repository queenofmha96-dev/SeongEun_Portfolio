import React from 'react';
import { ArrowLeft, ArrowDown, ArrowUpRight, AudioLines, Headphones, Layers, Radio, ChevronDown } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { FloatingControls } from './FloatingControls';
import { soundEngine } from '../utils/soundEngine';
import { OMG_VIDEOS, OMG_BLUEPRINTS } from '../data/omgMedia';
import { OMG_SOUND_SCOPE } from '../data/omgSoundScope';

const backLink = '#project-experience';
const linkStyle = 'inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-cyan-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300';

const roles = [
  { number: '01', title: 'UI 사운드 제작', label: 'UI SOUND DESIGN', description: '메인 메뉴, 중력 설정, 핀, 화면 전환, 미션 결과, 조작 가이드 및 에디터 오브젝트 조작에 쓰이는 UI 사운드를 제작했습니다.' },
  { number: '02', title: '중력총 관련 사운드', label: 'GRAVITY / ANTI-GRAVITY', description: '총 습득·버리기, 레이저 발사, 중력장·반중력장의 생성·유지·소멸과 중력장 내 물체가 튕기는 소리를 제작했습니다.' },
  { number: '03', title: '플레이어 사운드', label: 'PLAYER SOUND', description: '플레이어가 사망할 때와 다시 리스폰할 때 사용하는 사운드를 제작했습니다.' },
  { number: '04', title: '게임 엔진 적용', label: 'ENGINE IMPLEMENTATION', description: '담당 사운드의 제작과 함께 메타사운드를 활용한 게임 엔진 적용 작업을 진행했습니다.' },
];

const goals = [
  { icon: AudioLines, label: 'SPACE / CLEANING', title: '우주에서의 청소', description: '우주를 배경으로 청소를 목표로 하는 게임이라는 설정을 사운드 콘셉트의 출발점으로 삼았습니다.' },
  { icon: Headphones, label: 'RESTRAINED COMEDY', title: '마냥 밝지만은 않은 코믹함', description: '기본적인 코믹함은 살리되, 지나치게 천진난만하고 밝은 느낌으로 흐르지 않도록 방향을 잡았습니다.' },
  { icon: Layers, label: 'TONAL BALANCE', title: '심각함과 가벼움 사이', description: '너무 심각하지도, 너무 가볍지도 않게. 게임의 유머와 분위기 사이에서 무게의 균형을 잡는 사운드를 지향했습니다.' },
];

function SectionHeading({ number, label, title }: { number: string; label: string; title: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-3 border-b border-slate-800/80 pb-3.5 sm:pb-4">
      <h2 className="flex items-center gap-3 text-xl sm:text-3xl font-extrabold tracking-tight break-keep">
        <span className="text-cyan-400 text-sm sm:text-base font-mono shrink-0">{number}.</span>
        {title}
      </h2>
      <span className="text-[10px] sm:text-xs text-slate-500 font-mono tracking-widest">{label}</span>
    </div>
  );
}

export function OmgPortfolio() {
  return (
    <div className="relative min-h-screen bg-[#07080f] text-slate-100 selection:bg-cyan-400 selection:text-slate-950 font-sans">
      <ParticleCanvas />
      <div className="relative z-10">
        <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#06070c]/95 backdrop-blur-md">
          <div className="mx-auto max-w-[1240px] flex items-center justify-between gap-3 px-4 sm:px-8 py-3">
            <a href={backLink} className={linkStyle} onMouseEnter={() => soundEngine.playHover()} onClick={() => soundEngine.playClick()}>
              <ArrowLeft className="size-4 shrink-0" aria-hidden="true" /> 프로젝트 이력
            </a>
            <span className="text-[10px] sm:text-xs font-mono tracking-widest text-slate-400 whitespace-nowrap">SEONGEUN / GAME AUDIO</span>
          </div>
        </header>

        <main className="mx-auto max-w-[1240px] px-4 sm:px-6 md:px-8 pb-16 sm:pb-24">
          <section aria-labelledby="omg-title" className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 items-center py-12 sm:py-20 lg:py-24">
            <div>
              <p className="text-xs font-mono tracking-[0.18em] text-cyan-400">GAME AUDIO PORTFOLIO / 2026</p>
              <h1 id="omg-title" tabIndex={-1} className="mt-5 text-8xl sm:text-[9rem] leading-none font-black tracking-tighter outline-none">OMG<span className="text-cyan-400">.</span></h1>
              <p className="mt-3 text-xl sm:text-3xl font-bold tracking-tight text-slate-200">Sound Design & Implementation</p>
              <p className="mt-6 max-w-lg text-base sm:text-lg leading-relaxed text-slate-400 break-keep">우주 청소의 코믹함과 무게감 사이.<br />UI·중력총·플레이어 사운드 제작 및 엔진 적용.</p>
              <div className="mt-7 flex flex-wrap gap-2 text-[11px] sm:text-xs font-mono">
                {['UI SOUND', 'GRAVITY SFX', 'ENGINE IMPLEMENTATION'].map(label => (
                  <span key={label} className="rounded-lg border border-cyan-500/25 bg-cyan-950/30 px-2.5 py-1.5 text-cyan-200 whitespace-nowrap">{label}</span>
                ))}
              </div>
              <button type="button" className={`${linkStyle} mt-7`} onMouseEnter={() => soundEngine.playHover()} onClick={() => {
                soundEngine.playClick();
                document.getElementById('omg-showcase')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                작업 자료 살펴보기 <ArrowDown className="size-4" aria-hidden="true" />
              </button>
            </div>

            {/* Abstract editorial graphic, not a game screenshot or playable media. */}
            <div className="relative aspect-square max-h-[440px] w-full overflow-hidden rounded-2xl border border-cyan-500/20 bg-[radial-gradient(ellipse_at_center,_rgba(6,182,212,0.14),_transparent_65%)]" aria-hidden="true">
              <span className="absolute top-5 left-5 text-[10px] font-mono tracking-[0.2em] text-slate-500">AUDIO / CONCEPT GRAPHIC</span>
              <div className="absolute inset-[13%] rounded-full border border-cyan-500/15" />
              <div className="absolute inset-[24%] rounded-full border border-cyan-400/30" />
              <div className="absolute inset-x-[8%] top-1/2 h-px bg-cyan-500/15" />
              <div className="absolute inset-y-[8%] left-1/2 w-px bg-cyan-500/15" />
              <div className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-2">
                {[18, 30, 46, 25, 62, 83, 48, 100, 68, 38, 58, 29, 43, 23, 15].map((height, index) => (
                  <span key={index} style={{ height: `${height * 1.5}px` }} className="w-1.5 sm:w-2 rounded-full bg-cyan-300/80 shadow-[0_0_18px_rgba(6,182,212,0.3)]" />
                ))}
              </div>
              <span className="absolute bottom-5 left-5 text-[10px] font-mono tracking-[0.2em] text-cyan-400">OMG — SOUND DESIGN</span>
              <Radio className="absolute bottom-5 right-5 size-4 text-cyan-400" />
            </div>
          </section>

          <div className="space-y-12 sm:space-y-20">
            <section aria-labelledby="omg-overview">
              <SectionHeading number="01" label="PROJECT OVERVIEW" title="프로젝트 소개" />
              <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                <div>
                  <h3 id="omg-overview" className="text-xl sm:text-2xl font-bold break-keep">게임 ‘OMG’의 사운드 디자인 협업</h3>
                  <p className="mt-4 text-sm sm:text-base leading-8 text-slate-300 break-keep">‘OMG’는 우주를 배경으로 청소를 목표로 하는 게임입니다. 팀 내에서 사운드 작업을 분담했으며, 저는 주로 UI와 중력총의 중력·반중력 효과를 담당했습니다. 플레이어 사망·리스폰 사운드도 제작했으며, 담당 사운드의 게임 엔진 적용 작업을 함께 진행했습니다.</p>
                  <p className="mt-4 text-sm sm:text-base leading-8 text-slate-400 break-keep">현재 작업을 마무리하며 포트폴리오 자료를 정리하고 있습니다. 아래에서 담당 게임 사운드 영상과 메타사운드 적용 화면을 확인할 수 있습니다.</p>
                </div>
                <dl className="divide-y divide-slate-800/80 text-sm">
                  {[
                    ['PROJECT', 'OMG'],
                    ['ROLE', '사운드 제작 및 게임 엔진 적용'],
                    ['FOCUS', 'UI · 중력총 · 플레이어 사망·리스폰'],
                    ['YEAR', '2026'],
                    ['TEAM', 'OMG 개발팀과 역할 분담 협업'],
                    ['STATUS', '마무리 작업 중 · 자료 정리 중'],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr] gap-4 py-3.5 first:pt-0">
                      <dt className="font-mono text-xs text-slate-500 pt-0.5">{label}</dt>
                      <dd className={`break-keep ${label === 'STATUS' ? 'text-emerald-300' : 'text-slate-200'}`}>{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </section>

            <section aria-label="담당 작업">
              <SectionHeading number="02" label="MY CONTRIBUTION" title="담당 작업" />
              <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-8">
                {roles.map(role => (
                  <article key={role.number} className="border-l-2 border-cyan-500/40 pl-5">
                    <p className="font-mono text-[10px] tracking-widest text-cyan-400">{role.number} / {role.label}</p>
                    <h3 className="mt-3 text-lg font-bold break-keep">{role.title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-7 break-keep">{role.description}</p>
                  </article>
                ))}
              </div>
              <div className="mt-8 sm:mt-10 border-t border-slate-800/80 pt-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-base sm:text-lg font-bold">담당 사운드 목록</h3>
                  <p className="text-xs text-slate-500">작업표 기준 {OMG_SOUND_SCOPE.reduce((total, group) => total + group.items.length, 0)}개 항목</p>
                </div>
                <div className="mt-4 divide-y divide-slate-800/80">
                  {OMG_SOUND_SCOPE.map(group => (
                    <details key={group.label} className="group">
                      <summary className="flex min-h-14 cursor-pointer list-none items-center gap-3 py-4 text-sm font-bold text-slate-200 transition-colors hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden">
                        <span className="flex-1 break-keep">{group.title}</span>
                        <span className="text-xs font-mono text-cyan-400 whitespace-nowrap shrink-0">{group.items.length}항목</span>
                        <ChevronDown className="size-4 shrink-0 text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" />
                      </summary>
                      <dl className="divide-y divide-slate-800/50 pb-5">
                        {group.items.map(item => (
                          <div key={item.asset} className="grid gap-1.5 py-3 sm:grid-cols-2 sm:gap-6">
                            <dt className="text-sm text-slate-300 break-keep">{item.use}</dt>
                            <dd className="text-[11px] sm:text-xs font-mono text-slate-500 break-all">{item.asset}</dd>
                          </div>
                        ))}
                      </dl>
                    </details>
                  ))}
                </div>
              </div>
            </section>

            <section aria-label="사운드 콘셉트">
              <SectionHeading number="03" label="SOUND CONCEPT" title="사운드 콘셉트" />
              <div className="mt-7 grid gap-7 md:grid-cols-3 md:gap-8">
                {goals.map(({ icon: Icon, label, title, description }) => (
                  <article key={label}>
                    <Icon className="size-6 text-cyan-400" aria-hidden="true" />
                    <p className="mt-4 text-[10px] font-mono tracking-widest text-slate-500">{label}</p>
                    <h3 className="mt-2 font-bold text-base sm:text-lg break-keep">{title}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-7 break-keep">{description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="omg-showcase" className="scroll-mt-28" aria-label="작업 자료">
              <SectionHeading number="04" label="SELECTED WORK" title="작업 자료" />
              <div className="mt-7">
                <h3 className="text-lg sm:text-xl font-bold">게임 사운드 영상</h3>
                <div className="mt-5 grid gap-7 lg:grid-cols-3">
                  {OMG_VIDEOS.map(video => (
                    <figure key={video.src} className="min-w-0">
                      <video
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={video.title}
                        data-omg-video
                        className="aspect-video w-full rounded-xl border border-slate-800 bg-black object-contain"
                        onPlay={event => {
                          const activeVideo = event.currentTarget;
                          document.querySelectorAll<HTMLVideoElement>('video[data-omg-video]').forEach(otherVideo => {
                            if (otherVideo !== activeVideo) otherVideo.pause();
                          });
                        }}
                      >
                        <source src={video.src} type="video/mp4" />
                        <a href={video.src}>영상 파일 열기</a>
                      </video>
                      <figcaption className="mt-4">
                        <h4 className="text-base font-bold text-slate-200">{video.title}</h4>
                        {video.description && <p className="mt-3 text-sm leading-7 text-slate-400 break-keep">{video.description}</p>}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
              <div className="mt-10 sm:mt-12 border-t border-slate-800/80 pt-8 sm:pt-10">
                <h3 className="text-lg sm:text-xl font-bold">메타사운드 적용 화면</h3>
                <div className="mt-5 grid gap-7 lg:grid-cols-3">
                  {OMG_BLUEPRINTS.map(blueprint => (
                    <figure key={blueprint.src} className="min-w-0">
                      <a
                        href={blueprint.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${blueprint.title} 메타사운드 화면 원본 확대 보기 (새 탭)`}
                        className="block overflow-hidden rounded-xl border border-slate-800 bg-[#0b0d18] transition-colors hover:border-cyan-500/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
                      >
                        <img src={blueprint.src} alt={`${blueprint.title} 메타사운드 블루프린트`} loading="lazy" decoding="async" className="aspect-video w-full object-contain" />
                      </a>
                      <figcaption className="mt-2">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h4 className="text-base font-bold text-slate-200">{blueprint.title}</h4>
                          <a href={blueprint.src} target="_blank" rel="noopener noreferrer" className={`${linkStyle} text-xs`} aria-label={`${blueprint.title} 원본 보기 (새 탭)`}>
                            원본 보기 <ArrowUpRight className="size-3.5" aria-hidden="true" />
                          </a>
                        </div>
                        {blueprint.description && <p className="mt-3 text-sm leading-7 text-slate-400 break-keep">{blueprint.description}</p>}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <div className="mt-14 sm:mt-20 border-t border-slate-800/80 pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
            <a href={backLink} className={linkStyle} onMouseEnter={() => soundEngine.playHover()} onClick={() => soundEngine.playClick()}>
              <ArrowLeft className="size-4" aria-hidden="true" /> 프로젝트 이력으로 돌아가기
            </a>
            <a href="mailto:queenofmha96@gmail.com" className={`${linkStyle} text-slate-400`}>
              프로젝트 문의 <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </main>
        <footer className="border-t border-slate-800/80 px-4 py-7 text-center text-[10px] sm:text-xs font-mono tracking-wider text-slate-500">© 2026 SEONGEUN YANG · GAME SOUND DESIGN</footer>
      </div>
      <FloatingControls />
    </div>
  );
}
