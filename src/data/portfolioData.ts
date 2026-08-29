import { SoundProject, SoundDirectorProfile, SfxPreset } from '../types';

export const INITIAL_PROFILE: SoundDirectorProfile = {
  name: "양성은 (SEONGEUN)",
  title: "Game Sound Designer & Audio Artist",
  tagline: "게임의 몰입감을 극대화하는 임팩트 있는 SFX 디자인 & 인터랙티브 오디오 연출",
  email: "queenofmha96@gmail.com",
  location: "Seoul, South Korea",
  experienceYears: 1,
  bio: "게임 연출의 핵심인 SFX, BGM, Voice, Foley를 세밀하게 설계하는 게임 사운드 디자이너 양성은입니다. 사이버펑크 SF부터 다크 판타지 액션, 캐주얼 장르까지 게임 세계관과 타격감을 완성하는 시그니처 사운드를 제작합니다. FMOD/Wwise 오디오 미들웨어 인터랙티브 구현과 Foley 스튜디오 레코딩, 디테일한 레이어링 사운드 디자인을 바탕으로 플레이어에게 깊은 몰입감을 전달합니다.",
  philosophy: "사운드는 단순한 효과음이 아닌, 플레이어가 게임 환경 및 캐릭터와 교감하는 '청각적 햅틱 반응'입니다. 화면보다 먼저 인지되는 타격감과 명확한 피드백으로 게임의 만족도를 완성합니다.",
  skills: [
    {
      name: "FMOD / Wwise Integration",
      tag: "주력",
      description: "게임 엔진 연동 인터랙티브 사운드 파라미터 제어 및 오디오 이벤트 설계"
    },
    {
      name: "SFX Design & Creature Voice",
      tag: "주력",
      description: "액션 타격감 SFX, 마법·메카닉 이펙트, 크리처 보이스 멀티 레이어링"
    },
    {
      name: "Foley Recording & Layering",
      tag: "주력",
      description: "스튜디오 폴리 레코딩, 재질별 발소리 및 환경음 커스텀 라이브러리 구축"
    },
    {
      name: "Pro Tools & Reaper DAW",
      tag: "실무",
      description: "믹싱·마스터링, 배치 프로세싱 및 사운드 에디팅 메인 DAW"
    },
    {
      name: "Unreal Engine 5 / Unity Audio",
      tag: "실무",
      description: "엔진 내 3D 공간 음향(Spatial Audio), 감쇄 곡선 및 앰비언스 연동"
    },
    {
      name: "Game BGM Composition & Adaptive Audio",
      tag: "실무",
      description: "테마 BGM 작곡 및 인게임 상황 변화에 따른 적응형 오디오 연출"
    },
  ],
  tools: [
    { name: "FMOD Studio", icon: "Radio", description: "인터랙티브 파라미터 제어 및 적응형 사운드 이벤트 구축" },
    { name: "Audiokinetic Wwise", icon: "Disc", description: "3D Spatial Audio 및 동적 사운드 파이프라인 설계" },
    { name: "Pro Tools Ultimate", icon: "Sliders", description: "시네마틱 오디오 믹싱 마스터링 및 보이스 에디팅" },
    { name: "Reaper", icon: "Activity", description: "대규모 SFX 배치 프로세싱 및 오토메이션" },
    { name: "Kyma / Max MSP", icon: "Cpu", description: "SF 및 메카닉 특수 합성음 디자인" },
    { name: "Ableton Live", icon: "Music", description: "신디사이저 및 하이브리드 게임 테마 BGM 작곡" },
  ],
  experience: [
    {
      period: "2024 - Present",
      role: "Game Sound Designer (Personal & Redesign)",
      company: "Sound Portfolio & Redesign Lab",
      projects: ["Project: CYBER-X", "Overdrive Boss Arena", "Aether Saga SFX"],
      description: "AAA급 게임 트레일러 및 인게임 플레이 전면 사운드 리디자인. SFX 100% 자체 제작, 폴리 레코딩, 3D 사운드 믹싱 마스터링."
    },
    {
      period: "2023 - 2024",
      role: "Technical Audio & Middleware Specialist",
      company: "Interactive Audio Research",
      projects: ["Dark Abyss MMORPG", "Chrono Strike UI Sound"],
      description: "FMOD Studio 및 Wwise 연동 인터랙티브 사운드 시스템 구현. 다크 판타지 마법 SFX 및 UI 사운드 팩 제작."
    },
    {
      period: "2022 - 2023",
      role: "Audio Creator & Foley Artist",
      company: "Indie Project & Sound Creation",
      projects: ["Mobile Action Sound Pack", "Pixel Quest", "Sci-Fi Foley Library"],
      description: "인디 게임 및 미디어 사운드 디자인, Foley 현장/스튜디오 녹음, 테마 BGM 작곡 및 믹싱."
    }
  ],
  hardware: [
    "Genelec 8341A SAM Studio Monitors",
    "Sennheiser MKH 416 Shotgun Mic (Foley)",
    "Universal Audio Apollo x8p Audio Interface",
    "Nord Stage 3 & Moog Subsequent 37 Synth",
    "Beyerdynamic DT 1990 Pro Reference Headphones"
  ],
  gameplayLogs: [
    {
      id: "pubg",
      title: "배틀그라운드 (PUBG)",
      hoursPlayed: 130,
      genre: "Battle Royale / Tactical FPS",
      audioFocus: "총기 발사 SFX 메카닉 & 3D 공간 사운드 플레이(사플) 정밀 분석",
      tag: "TACTICAL SFX",
      badgeColor: "border-amber-500/40 text-amber-300 bg-amber-950/40"
    },
    {
      id: "valorant",
      title: "발로란트 (VALORANT)",
      hoursPlayed: 320,
      genre: "Competitive Tactical FPS",
      audioFocus: "스킬 사운드 시그니처 & 리버브 도킹/거리 감쇄 파이프라인 분석",
      tag: "COMPETITIVE AUDIO",
      badgeColor: "border-rose-500/40 text-rose-300 bg-rose-950/40"
    },
    {
      id: "cyberpunk",
      title: "사이버펑크 2077 (Cyberpunk 2077)",
      hoursPlayed: 210,
      genre: "Open World Sci-Fi RPG",
      audioFocus: "네온 시티 환경 폴리(Foley) & 하이브리드 신디사이저 믹스 연구",
      tag: "SF & BGM STUDY",
      badgeColor: "border-cyan-500/40 text-cyan-300 bg-cyan-950/40"
    },
    {
      id: "eldenring",
      title: "엘든 링 (Elden Ring)",
      hoursPlayed: 180,
      genre: "Dark Fantasy Action RPG",
      audioFocus: "보스 페이즈 트랜지션 BGM & 대형 무기 피격감 타격음 분석",
      tag: "ACTION IMPACT",
      badgeColor: "border-purple-500/40 text-purple-300 bg-purple-950/40"
    },
    {
      id: "overwatch",
      title: "오버워치 2 (Overwatch 2)",
      hoursPlayed: 450,
      genre: "Hero Team Shooter",
      audioFocus: "궁극기 사운드 피치 오버라이드 및 캐릭터 실루엣 음성 분석",
      tag: "DYNAMIC VOICE",
      badgeColor: "border-orange-500/40 text-orange-300 bg-orange-950/40"
    },
    {
      id: "mhw",
      title: "몬스터 헌터: 월드 (MH: World)",
      hoursPlayed: 260,
      genre: "Co-op Monster Action",
      audioFocus: "대형 크리처 포효음 레이어링 & 생태계 사운드스케이프 설계 분석",
      tag: "CREATURE SFX",
      badgeColor: "border-emerald-500/40 text-emerald-300 bg-emerald-950/40"
    }
  ]
};

export const INITIAL_PROJECTS: SoundProject[] = [
  {
    id: "proj-youtube-1",
    title: "스타레일 '비소' 트레일러 — Sound Redesign",
    showcaseLabel: "Official Sound Design Showcase #1",
    subtitle: "게임 사운드 디자인 & 이펙트 타격감 연출",
    category: "game-sfx",
    videoUrl: "https://www.youtube.com/embed/uPEYirPn22U",
    videoType: "embed",
    thumbnailUrl: "https://img.youtube.com/vi/uPEYirPn22U/hqdefault.jpg",
    client: "Seongeun Sound Studio",
    releaseYear: "2024",
    genre: "Game SFX & Sound Design",
    role: ["Sound Director", "SFX Design", "Mix Engineering"],
    toolsUsed: ["FMOD Studio", "Reaper", "Pro Tools", "Kyma"],
    description: "직접 제작 연출한 게임 사운드 디자인 쇼케이스 영상입니다. 장면과 액션 이펙트 타격 호흡에 맞춘 SFX Multi-Layering, 임팩트 서브 베이스 및 3D 공간 오디오 연출이 적용되어 있습니다.",
    soundHighlights: [
      "이펙트 시각효과와 정밀 동기화된 SFX Multi-Layering 연출",
      "임팩트 타격음 서브 베이스 및 고주파 마찰음 정밀 이퀄라이징",
      "FMOD / Wwise 파라미터 제어 연동을 고려한 오디오 라이브러리 구축",
      "유튜브 및 글로벌 표준 마스터링 규격(LUFS -14) 적용"
    ],
    stems: [
      { id: "s1", name: "SFX / Main Impact Layer", type: "sfx", volume: 1.0, isMuted: false, isSoloed: false, color: "#00f3ff" },
      { id: "s2", name: "BGM / Dynamic Score", type: "bgm", volume: 0.85, isMuted: false, isSoloed: false, color: "#ff007f" },
      { id: "s3", name: "Foley / Character Movement", type: "foley", volume: 0.75, isMuted: false, isSoloed: false, color: "#ffe600" }
    ],
    isFeatured: true
  },
  {
    id: "proj-youtube-2",
    title: "젠레스 존 제로 '미야비' 인게임 전투 — Sound Redesign",
    showcaseLabel: "Official Sound Design Showcase #2",
    subtitle: "특수 효과음 & 시네마틱 오디오 스컬프팅",
    category: "game-sfx",
    videoUrl: "https://www.youtube.com/embed/Zvj8r6n-DDM",
    videoType: "embed",
    thumbnailUrl: "https://img.youtube.com/vi/Zvj8r6n-DDM/hqdefault.jpg",
    client: "Seongeun Sound Studio",
    releaseYear: "2024",
    genre: "Cinematic Audio & Skill SFX",
    role: ["Senior Sound Designer", "Foley Artist", "Audio Editor"],
    toolsUsed: ["Wwise", "Pro Tools", "Serum", "Logic Pro"],
    description: "독창적인 스킬 이펙트 및 시네마틱 효과음 포트폴리오 영상입니다. 현장 폴리 레코딩 소스와 신디사이징 음향을 정교하게 조합하여 시각적 몰입감을 청각적으로 완성했습니다.",
    soundHighlights: [
      "레코딩 소스와 신디사이저 믹스를 가공한 특수 스킬 SFX",
      "스킬 캐스팅 -> 발사 -> 타격 단계별 오프셋 타이밍 디자인",
      "3D 리버브 및 거리 감쇄 오토메이션"
    ],
    stems: [
      { id: "s1", name: "SFX / Special Effect Layer", type: "sfx", volume: 1.0, isMuted: false, isSoloed: false, color: "#00f3ff" },
      { id: "s2", name: "BGM / Background Score", type: "bgm", volume: 0.8, isMuted: false, isSoloed: false, color: "#ff007f" }
    ],
    isFeatured: true
  },
  {
    id: "proj-youtube-3",
    title: "젠레스 존 제로 '미야비' 트레일러 — Sound Redesign",
    showcaseLabel: "Official Sound Design Showcase #3",
    subtitle: "게임 트레일러 오디오 믹싱 & 오케스트라 BGM 연출",
    category: "trailer",
    videoUrl: "https://www.youtube.com/embed/HAL_B3SpPsM",
    videoType: "embed",
    thumbnailUrl: "https://img.youtube.com/vi/HAL_B3SpPsM/hqdefault.jpg",
    client: "Seongeun Sound Studio",
    releaseYear: "2023",
    genre: "Trailer Audio & Orchestral BGM",
    role: ["Audio Director", "Composer", "Mastering Engineer"],
    toolsUsed: ["Pro Tools Ultimate", "Cubase", "Ableton Live"],
    description: "세계관과 스토리 라인의 서사를 극대화하는 트레일러 오디오 믹싱 & 음악 연출 작업 영상입니다.",
    soundHighlights: [
      "오케스트라 & 하이브리드 BGM 믹싱 디렉팅",
      "트레일러 피크 지점 라이저 및 임팩트 서브 레이어링",
      "LUFS -14 정밀 노멀라이제이션 마스터링"
    ],
    stems: [
      { id: "s1", name: "BGM / Cinematic Symphony", type: "bgm", volume: 0.9, isMuted: false, isSoloed: false, color: "#00f3ff" },
      { id: "s2", name: "SFX / Risers & Whooshes", type: "sfx", volume: 0.95, isMuted: false, isSoloed: false, color: "#ffe600" }
    ],
    isFeatured: true
  },
  {
    id: "proj-youtube-4",
    title: "고스트 오브 쓰시마 — Sound Redesign",
    showcaseLabel: "Official Sound Design Showcase #4",
    subtitle: "액션 이펙트 & 독창적 UI 효과음 세트",
    category: "ui-sound",
    videoUrl: "https://www.youtube.com/embed/YPSPi7DNk4k",
    videoType: "embed",
    thumbnailUrl: "https://img.youtube.com/vi/YPSPi7DNk4k/hqdefault.jpg",
    client: "Seongeun Sound Studio",
    releaseYear: "2023",
    genre: "Action SFX & UI Audio",
    role: ["UI SFX Designer", "Sound Designer"],
    toolsUsed: ["Ableton Live", "Max MSP", "Reaper"],
    description: "플레이어에게 기분 좋은 청각적 피드백과 명확한 터치감을 전달하는 액션 & UI 사운드 작업 영상입니다.",
    soundHighlights: [
      "피드백 위상 정밀 튜닝 및 명확한 고주파 이퀄라이징",
      "유니크한 신디사이저 파형 기반 클릭 및 피드백 톤 구축"
    ],
    stems: [
      { id: "s1", name: "SFX & UI Feedback Layer", type: "sfx", volume: 1.0, isMuted: false, isSoloed: false, color: "#00f3ff" }
    ],
    isFeatured: false
  },
  {
    id: "proj-youtube-5",
    title: "프로젝트 스펙트럼 트레일러 — Sound Redesign",
    showcaseLabel: "Official Sound Design Showcase #5",
    subtitle: "인터랙티브 테마 BGM & 서사적 작곡",
    category: "bgm",
    videoUrl: "https://www.youtube.com/embed/-Qk1Hn6YuNQ",
    videoType: "embed",
    thumbnailUrl: "https://img.youtube.com/vi/-Qk1Hn6YuNQ/hqdefault.jpg",
    client: "Seongeun Sound Studio",
    releaseYear: "2024",
    genre: "BGM / Interactive Composition",
    role: ["Composer", "Music Director", "Mix Engineer"],
    toolsUsed: ["Cubase", "Logic Pro", "Ableton Live"],
    description: "게임의 분위기와 세계관 서사를 끌어올리는 음악 작곡 및 테마 BGM 포트폴리오 영상입니다.",
    soundHighlights: [
      "게임 상황별 스템(Stem) 오버랩 및 트랜지션 디자인",
      "멜로디 레이어와 메인 하모니 테마 설계"
    ],
    stems: [
      { id: "s1", name: "BGM / Main Theme Melody", type: "bgm", volume: 0.9, isMuted: false, isSoloed: false, color: "#00f3ff" },
      { id: "s2", name: "BGM / Rhythm Section", type: "bgm", volume: 0.85, isMuted: false, isSoloed: false, color: "#ff007f" }
    ],
    isFeatured: false
  },
  {
    id: "proj-youtube-6",
    title: "빈딕투스 트레일러 — Sound Redesign",
    showcaseLabel: "Official Sound Design Showcase #6",
    subtitle: "환경 스케이프 & 크리처 오디오 레코딩",
    category: "foley",
    videoUrl: "https://www.youtube.com/embed/dICQycXCkco",
    videoType: "embed",
    thumbnailUrl: "https://img.youtube.com/vi/dICQycXCkco/hqdefault.jpg",
    client: "Seongeun Sound Studio",
    releaseYear: "2024",
    genre: "Foley & Environment Audio",
    role: ["Foley Artist", "Sound Designer", "Field Recorder"],
    toolsUsed: ["Pro Tools", "Sennheiser MKH416", "Reaper"],
    description: "현장 레코딩 폴리(Foley) 소스 가공 및 크리처 생체음 사운드 디자인 포트폴리오 영상입니다.",
    soundHighlights: [
      "현장 야외/스튜디오 폴리 레코딩 소스 정밀 프로세싱",
      "공간감 표현을 위한 3D 커스텀 임펄스 리스폰스(IR) 적용"
    ],
    stems: [
      { id: "s1", name: "Foley / Environment Ambience", type: "foley", volume: 0.8, isMuted: false, isSoloed: false, color: "#ffe600" },
      { id: "s2", name: "SFX / Creature & Organic Layers", type: "sfx", volume: 1.0, isMuted: false, isSoloed: false, color: "#00f3ff" }
    ],
    isFeatured: false
  },
  {
    id: "proj-youtube-7",
    title: "프래그마타 전투 영상 — Sound Redesign",
    showcaseLabel: "Official Sound Design Showcase #7",
    subtitle: "실시간 게임 오디오 구현 & SFX 파이프라인",
    category: "game-sfx",
    videoUrl: "https://www.youtube.com/embed/Hxm194LwU2Q",
    videoType: "embed",
    thumbnailUrl: "https://img.youtube.com/vi/Hxm194LwU2Q/hqdefault.jpg",
    client: "Seongeun Sound Studio",
    releaseYear: "2024",
    genre: "Game SFX & Interactive Audio",
    role: ["Audio Director", "Sound Designer"],
    toolsUsed: ["FMOD Studio", "Wwise", "Unreal Engine 5"],
    description: "게임 엔진 연동을 타겟으로 한 실시간 사운드 연출 및 파라미터 연동 SFX 작업 영상입니다.",
    soundHighlights: [
      "실시간 속도/상태 변화에 반응하는 동적 피치 모듈레이션",
      "엔진 시그널 피드백 최적화 SFX 파이프라인 구축"
    ],
    stems: [
      { id: "s1", name: "SFX / Interactive Engine Layer", type: "sfx", volume: 1.0, isMuted: false, isSoloed: false, color: "#00f3ff" }
    ],
    isFeatured: false
  }
];

export const INITIAL_SFX_PRESETS: SfxPreset[] = [
  { id: "sfx-laser", name: "Cyber Laser Cannon", category: "combat", iconName: "Zap", description: "사이버펑크 에너제틱 레이저 샷 SFX", pitch: 1.2, decay: 0.18, type: "laser" },
  { id: "sfx-sword", name: "Heavy Sword Blade Slash", category: "combat", iconName: "Flame", description: "묵직한 쇠칼 가르는 소리와 바람음", pitch: 0.9, decay: 0.28, type: "sword" },
  { id: "sfx-spell", name: "Arcane Magic Spark", category: "magic", iconName: "Wand2", description: "영롱한 신비 마법 캐스팅 샹들리에 음", pitch: 1.0, decay: 0.5, type: "spell" },
  { id: "sfx-explosion", name: "Sub Explosion Blast", category: "combat", iconName: "Sparkles", description: "서브 베이스 묵직한 가슴을 울리는 폭발음", pitch: 0.8, decay: 0.75, type: "explosion" },
  { id: "sfx-levelup", name: "Quest Level Up Fanfare", category: "ui", iconName: "Award", description: "승리/레벨업 쾌감 전달 아르페지오 멜로디", pitch: 1.0, decay: 0.45, type: "levelup" },
  { id: "sfx-uiclick", name: "Futuristic HUD Beep", category: "ui", iconName: "Radio", description: "깔끔하고 세련된 네온 HUD 버튼 터치음", pitch: 1.1, decay: 0.08, type: "click" }
];
