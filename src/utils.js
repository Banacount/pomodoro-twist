
export const playBeep = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'sine'; // 'sine', 'square', 'sawtooth', 'triangle'
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // 440 Hz (Note A4)

  // Fade out sound smoothly
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 0.5);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.5); // Stop after 0.5 seconds
};

export const beeping = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'sawtooth'; // 'sine', 'square', 'sawtooth', 'triangle'
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // 440 Hz (Note A4)

  // Fade out sound smoothly
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + 5);

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 5); // Stop after 0.5 seconds
};
