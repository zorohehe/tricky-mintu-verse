let ctx: AudioContext | null = null;
let muted = typeof window !== 'undefined' && localStorage.getItem('xsb-muted') === '1';

const listeners = new Set<(m: boolean) => void>();

export const isMuted = () => muted;

export const subscribeMute = (fn: (m: boolean) => void) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

export const toggleMute = () => {
  muted = !muted;
  localStorage.setItem('xsb-muted', muted ? '1' : '0');
  listeners.forEach((fn) => fn(muted));
};

/** Tiny synthesized blip — no audio files needed. */
export const blip = (freq = 880, duration = 0.07) => {
  if (muted) return;
  try {
    ctx = ctx ?? new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.05, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch {
    /* audio not available */
  }
};
