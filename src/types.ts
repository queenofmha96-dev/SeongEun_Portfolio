export type ProjectCategory = 'all' | 'game-sfx' | 'bgm' | 'foley' | 'trailer' | 'ui-sound';

export interface AudioStem {
  id: string;
  name: string; // e.g. "BGM / Orchestral", "Foley & Steps", "Weapon SFX", "Voice Lines"
  type: 'bgm' | 'sfx' | 'foley' | 'voice';
  volume: number; // 0 to 1
  isMuted: boolean;
  isSoloed: boolean;
  color: string;
}

export interface SoundProject {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  videoUrl: string; // YouTube, Vimeo, or MP4 URL / Blob URL
  videoType: 'youtube' | 'vimeo' | 'direct' | 'embed';
  thumbnailUrl?: string;
  client?: string; // e.g. "Nexon", "Krafton", "Indie Studio", "Personal Project"
  releaseYear: string;
  genre: string; // e.g. "Cyberpunk Action RPG", "Dark Fantasy MMORPG", "Sci-Fi Shooter"
  role: string[]; // e.g. ["Sound Director", "SFX Designer", "Foley Recording", "FMOD Integration"]
  toolsUsed: string[]; // e.g. ["Pro Tools", "FMOD Studio", "Kyma", "Wwise"]
  description: string;
  soundHighlights: string[]; // Bullet points describing what sound work was done
  stems?: AudioStem[];
  isFeatured?: boolean;
}

export interface SfxPreset {
  id: string;
  name: string;
  category: 'combat' | 'magic' | 'ui' | 'environment' | 'creature';
  iconName: string;
  description: string;
  pitch: number;
  decay: number;
  type: string;
}

export interface GameplayLog {
  id: string;
  title: string;          // e.g. "배틀그라운드 (PUBG)"
  hoursPlayed: number;     // e.g. 130
  genre: string;          // e.g. "Battle Royale / Tactical FPS"
  audioFocus: string;     // e.g. "총기 발사 SFX 메카닉 & 3D 사운드 플레이(사플) 분석"
  tag?: string;           // e.g. "MAIN GAME", "AUDIO STUDY", "FPS"
  badgeColor?: string;
}

export interface SoundDirectorProfile {
  name: string;
  title: string;
  tagline: string;
  notionLink?: string;
  email: string;
  location: string;
  experienceYears: number;
  bio: string;
  philosophy: string;
  skills: {
    name: string;
    level: number; // 0-100
    category: 'DAW & Audio Tools' | 'Middleware & Engine' | 'Sound Design & Mixing' | 'Recording & Foley';
  }[];
  tools: {
    name: string;
    icon: string;
    description: string;
  }[];
  experience: {
    period: string;
    role: string;
    company: string;
    projects: string[];
    description: string;
  }[];
  hardware: string[];
  gameplayLogs?: GameplayLog[];
}

export interface SoundSettings {
  uiSfxEnabled: boolean;
  uiVolume: number; // 0 to 1
  scanlinesEnabled: boolean;
  bgmAmbientEnabled: boolean;
  spatialAudioDemo: boolean;
}
