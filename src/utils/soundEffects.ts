
export class SoundEffects {
  private audioContext: AudioContext | null = null;

  constructor() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (error) {
      console.warn('Web Audio API not supported');
    }
  }

  playBeep(frequency = 800, duration = 0.2, volume = 0.3) {
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
    gainNode.gain.setValueAtTime(volume, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + duration);
    
    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + duration);
  }

  playSuccess() {
    this.playBeep(600, 0.1, 0.2);
    setTimeout(() => this.playBeep(800, 0.15, 0.2), 100);
  }

  playError() {
    this.playBeep(300, 0.3, 0.3);
  }

  playClick() {
    this.playBeep(1000, 0.05, 0.1);
  }

  playNotification() {
    this.playBeep(800, 0.1, 0.2);
    setTimeout(() => this.playBeep(1000, 0.1, 0.2), 150);
  }
}

export const soundEffects = new SoundEffects();
