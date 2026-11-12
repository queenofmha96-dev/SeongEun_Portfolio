import React from 'react';
import { ArrowLeft, ArrowDown, ArrowUpRight } from 'lucide-react';
import { ParticleCanvas } from './ParticleCanvas';
import { FloatingControls } from './FloatingControls';
import { soundEngine } from '../utils/soundEngine';
import { OMG_VIDEOS, OMG_BLUEPRINTS } from '../data/omgMedia';

const backLink = '#project-experience';
const linkStyle = 'inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-cyan-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300';

const roles = [
  { number: '01', title: '사운드 제작', label: 'SOUND DESIGN', items: ['UI · 메뉴 · 화면 전환', '중력건 등 무기 · 중력·반중력 효과', '플레이어 사망 · 리스폰'] },
  { number: '02', title: '게임 엔진 적용', label: 'ENGINE IMPLEMENTATION', items: ['게임 엔진 내 사운드 적용', '메타사운드 적용', '볼륨 밸런스 조정'] },
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
          <section aria-labelledby="omg-title" className="py-12 sm:py-16">
            <div>
              <p className="text-xs font-mono tracking-[0.18em] text-cyan-400">GAME AUDIO PORTFOLIO / 2026</p>
              <h1 id="omg-title" tabIndex={-1} className="mt-5 text-8xl sm:text-[9rem] leading-none font-black tracking-tighter outline-none">OMG<span className="text-cyan-400">.</span></h1>
              <p className="mt-3 text-xl sm:text-3xl font-bold tracking-tight text-slate-200">Sound Design & Implementation</p>
              <button type="button" className={`${linkStyle} mt-7`} onMouseEnter={() => soundEngine.playHover()} onClick={() => {
                soundEngine.playClick();
                document.getElementById('omg-showcase')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}>
                작업 자료 살펴보기 <ArrowDown className="size-4" aria-hidden="true" />
              </button>
            </div>

          </section>

          <div className="space-y-12 sm:space-y-20">
            <section aria-labelledby="omg-overview">
              <SectionHeading number="01" label="PROJECT OVERVIEW" title="프로젝트 소개" />
              <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                <div>
                  <h3 id="omg-overview" className="text-xl sm:text-2xl font-bold break-keep">게임 ‘OMG’의 사운드 디자인 협업</h3>
                  <p className="mt-4 text-sm sm:text-base leading-8 text-slate-300 break-keep">OMG는 우주를 배경으로 청소를 목표로 하는 게임으로, 여러 명이 사운드 작업을 분담해 진행한 협업 프로젝트입니다.</p>
                  <p className="mt-4 text-sm sm:text-base leading-8 text-slate-400 break-keep">저는 주로 UI 사운드와 중력건을 비롯한 무기 관련 사운드를 담당했습니다. 메뉴를 선택하거나 화면을 전환할 때 들리는 소리, 중력·반중력 효과가 생성되고 유지되거나 사라질 때의 소리, 플레이어가 사망하고 리스폰할 때의 사운드 등을 제작했습니다. 제작한 사운드는 메타사운드를 활용해 게임 엔진에 적용하는 작업까지 함께 진행했습니다.</p>
                </div>
                <dl className="divide-y divide-slate-800/80 text-sm">
                  {[
                    ['PROJECT', 'OMG'],
                    ['ROLE', '사운드 제작 및 게임 엔진 적용'],
                    ['FOCUS', 'UI · 무기 · 화면 전환 · 사망·리스폰'],
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

            <section aria-label="사운드 방향성">
              <SectionHeading number="02" label="SOUND DIRECTION" title="사운드 방향성" />
              <div className="mt-7 max-w-4xl space-y-4 text-sm sm:text-base leading-8 text-slate-300 break-keep">
                <p>게임의 분위기와 플레이 방식, 캐릭터와 UI의 시각적 인상을 바탕으로 사운드의 톤을 잡았습니다. OMG는 심각하거나 무거운 분위기의 게임은 아니지만, 그렇다고 마냥 밝고 경쾌한 느낌도 아니었습니다. 가벼운 코믹함 속에 차분함이 있는 게임이라고 느꼈습니다.</p>
                <p>이러한 분위기에 맞춰 자극적이고 날카로운 소리보다는, 둥글고 부드러운 질감의 사운드를 주로 사용했습니다. 전체적으로 몽글몽글한 느낌을 살리면서, 너무 진지하거나 지나치게 가볍게 들리지 않도록 균형을 잡고자 했습니다.</p>
              </div>
            </section>

            <section aria-label="담당 작업">
              <SectionHeading number="03" label="MY CONTRIBUTION" title="담당 작업" />
              <div className="mt-7 grid gap-7 md:grid-cols-2 md:gap-8">
                {roles.map(role => (
                  <article key={role.number} className="border-l-2 border-cyan-500/40 pl-5">
                    <p className="font-mono text-[10px] tracking-widest text-cyan-400">{role.number} / {role.label}</p>
                    <h3 className="mt-3 text-lg font-bold break-keep">{role.title}</h3>
                    <ul className="mt-3 space-y-2 text-sm text-slate-400 leading-7 break-keep">{role.items.map(item => <li key={item}>{item}</li>)}</ul>
                  </article>
                ))}
              </div>
              <div className="mt-8 space-y-7">
                {[
                  { title: 'UI 사운드 작업표', src: '/omg/omg-ui-sheet.png' },
                  { title: '중력총 사운드 작업표', src: '/omg/omg-gravity-sheet.png' },
                  { title: '플레이어 사운드 작업표', src: '/omg/omg-player-sheet.png' },
                ].map(sheet => (
                  <figure key={sheet.src}>
                    <figcaption className="mb-3 text-sm text-slate-300">{sheet.title}</figcaption>
                    <a href={sheet.src} target="_blank" rel="noopener noreferrer" aria-label={sheet.title + ' 원본 확대 보기 (새 탭)'} className="block min-h-11 overflow-hidden rounded-lg border border-slate-800 hover:border-cyan-500/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                      <img src={sheet.src} alt={sheet.title} loading="lazy" className="w-full h-auto" />
                    </a>
                  </figure>
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
