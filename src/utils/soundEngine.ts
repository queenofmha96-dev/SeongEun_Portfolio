// Web Audio API Synthesizer for Game UI Sound Effects and SFX Lab

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = (() => {
    try {
      return localStorage.getItem('seongeun_sound_muted') === 'true';
    } catch {
      return false;
    }
  })();
  private volume: number = 0.25;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private isAmbientPlaying: boolean = false;
  private listeners: Set<(isMuted: boolean) => void> = new Set();

  public subscribe(callback: (isMuted: boolean) => void) {
    this.listeners.add(callback);
    return () => {
      this.listeners.delete(callback);
    };
  }

  private notifyListeners() {
    this.listeners.forEach(cb => {
      try {
        cb(this.isMuted);
      } catch {
        // ignore
      }
    });
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    const nextState = !this.isMuted;
    this.setMuted(nextState);
    if (!nextState) {
      // Play brief activation sound when unmuted
      this.playClick();
    }
    return nextState;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    try {
      localStorage.setItem('seongeun_sound_muted', String(muted));
    } catch {
      // ignore
    }
    if (muted && this.isAmbientPlaying) {
      this.stopAmbient();
    }
    this.notifyListeners();
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.ambientGain && this.ctx) {
      this.ambientGain.gain.setTargetAtTime(this.volume * 0.05, this.ctx.currentTime, 0.1);
    }
  }

  // --- UI SFX SYNTHESIZERS ---

  // Hover SFX: Subtle high-tech beep/chirp
  public playHover() {
    if (this.isMuted || this.volume <= 0) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.ctx.currentTime); // A5
      osc.frequency.exponentialRampToValueAtTime(1320, this.ctx.currentTime + 0.04); // E6

      gain.gain.setValueAtTime(this.volume * 0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch {
      // Ignore audio context errors before user interaction
    }
  }

  // Click SFX: Crisp futuristic UI click
  public playClick() {
    if (this.isMuted || this.volume <= 0) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1200, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(this.volume * 0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch {
      // Audio context error fallback
    }
  }

  // Start Game SFX: Epic AAA Game Boot sound (cyber sweep + chord boom)
  public playStartGame() {
    if (this.isMuted || this.volume <= 0) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Deep Sub Sweep
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sawtooth';
      subOsc.frequency.setValueAtTime(40, now);
      subOsc.frequency.exponentialRampToValueAtTime(160, now + 0.4);
      subOsc.frequency.exponentialRampToValueAtTime(30, now + 1.2);

      subGain.gain.setValueAtTime(this.volume * 0.3, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

      subOsc.connect(subGain);
      subGain.connect(this.ctx.destination);
      subOsc.start(now);
      subOsc.stop(now + 1.2);

      // Cyber Synth Chord
      const freqs = [220, 277.18, 329.63, 440, 659.25]; // C#m / E chord harmony
      freqs.forEach((f, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(f, now + 0.1);
        osc.frequency.exponentialRampToValueAtTime(f * 1.5, now + 0.6);

        gain.gain.setValueAtTime(0, now);
        gain.gain.setValueAtTime(this.volume * (0.08 / (idx + 1)), now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(now + 0.1);
        osc.stop(now + 1.5);
      });
    } catch {
      // ignore
    }
  }

  // Tab Switch SFX: Cyberpunk blip
  public playTabSwitch() {
    if (this.isMuted || this.volume <= 0) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(600, this.ctx.currentTime);
      osc.frequency.setValueAtTime(900, this.ctx.currentTime + 0.03);

      gain.gain.setValueAtTime(this.volume * 0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.07);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.07);
    } catch {
      // ignore
    }
  }

  // --- GAME SFX LAB SYNTHESIZERS ---

  // Laser Shot SFX
  public playLaser(pitch = 1, decay = 0.2) {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(1500 * pitch, now);
    osc.frequency.exponentialRampToValueAtTime(100 * pitch, now + decay);

    gain.gain.setValueAtTime(this.volume * 0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + decay);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + decay);
  }

  // Sword Slash SFX (Filtered noise + pitch bend)
  public playSwordSlash(pitch = 1, decay = 0.25) {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // White noise buffer
    const bufferSize = this.ctx.sampleRate * decay;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(2000 * pitch, now);
    filter.frequency.exponentialRampToValueAtTime(500 * pitch, now + decay);
    filter.Q.value = 3;

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(this.volume * 0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + decay);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    noise.start(now);
    noise.stop(now + decay);
  }

  // Magic Spell Cast SFX (Arpeggiated sine harmonics + shimmer)
  public playMagicSpell(pitch = 1, decay = 0.6) {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const notes = [523.25, 659.25, 783.99, 1046.5, 1318.5]; // C E G C E
    notes.forEach((freq, i) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * pitch, now + i * 0.05);

      gain.gain.setValueAtTime(0, now + i * 0.05);
      gain.gain.setValueAtTime(this.volume * 0.1, now + i * 0.05 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + decay);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(now + i * 0.05);
      osc.stop(now + i * 0.05 + decay);
    });
  }

  // Explosion Boom SFX
  public playExplosion(pitch = 1, decay = 0.8) {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Sub rumble oscillator
    const sub = this.ctx.createOscillator();
    const subGain = this.ctx.createGain();
    sub.type = 'sawtooth';
    sub.frequency.setValueAtTime(120 * pitch, now);
    sub.frequency.exponentialRampToValueAtTime(20 * pitch, now + decay);

    subGain.gain.setValueAtTime(this.volume * 0.35, now);
    subGain.gain.exponentialRampToValueAtTime(0.001, now + decay);

    // Noise blast
    const bufferSize = this.ctx.sampleRate * decay;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1000 * pitch, now);
    filter.frequency.exponentialRampToValueAtTime(80 * pitch, now + decay);

    const noiseGain = this.ctx.createGain();
    noiseGain.gain.setValueAtTime(this.volume * 0.3, now);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, now + decay);

    sub.connect(subGain);
    subGain.connect(this.ctx.destination);
    sub.start(now);
    sub.stop(now + decay);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(this.ctx.destination);
    noise.start(now);
    noise.stop(now + decay);
  }

  // Level Up Quest Complete SFX
  public playLevelUp() {
    this.initContext();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const scale = [440, 554.37, 659.25, 880, 1108.73, 1318.5]; // A major fan fare
    scale.forEach((freq, idx) => {
      const osc = this.ctx!.createOscillator();
      const gain = this.ctx!.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(this.volume * 0.15, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx!.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  }

  // --- AMBIENT DRONE TOGGLE ---
  public toggleAmbient(): boolean {
    if (this.isAmbientPlaying) {
      this.stopAmbient();
      return false;
    } else {
      this.startAmbient();
      return true;
    }
  }

  public startAmbient() {
    if (this.isMuted || this.isAmbientPlaying) return;
    try {
      this.initContext();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;
      this.ambientGain = this.ctx.createGain();
      this.ambientGain.gain.setValueAtTime(0.001, now);
      this.ambientGain.gain.exponentialRampToValueAtTime(this.volume * 0.04, now + 1.5);

      this.ambientOsc1 = this.ctx.createOscillator();
      this.ambientOsc1.type = 'sawtooth';
      this.ambientOsc1.frequency.setValueAtTime(55, now); // A1

      this.ambientOsc2 = this.ctx.createOscillator();
      this.ambientOsc2.type = 'sine';
      this.ambientOsc2.frequency.setValueAtTime(110, now); // A2

      // Lowpass filter for warm dark space texture
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(240, now);

      this.ambientOsc1.connect(filter);
      this.ambientOsc2.connect(filter);
      filter.connect(this.ambientGain);
      this.ambientGain.connect(this.ctx.destination);

      this.ambientOsc1.start(now);
      this.ambientOsc2.start(now);

      this.isAmbientPlaying = true;
    } catch {
      // ignore
    }
  }

  public stopAmbient() {
    if (!this.isAmbientPlaying) return;
    try {
      if (this.ambientGain && this.ctx) {
        const now = this.ctx.currentTime;
        this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);
        setTimeout(() => {
          this.ambientOsc1?.stop();
          this.ambientOsc2?.stop();
          this.isAmbientPlaying = false;
        }, 500);
      } else {
        this.isAmbientPlaying = false;
      }
    } catch {
      this.isAmbientPlaying = false;
    }
  }

  public getIsAmbientPlaying() {
    return this.isAmbientPlaying;
  }
}

export const soundEngine = new SoundEngine();
