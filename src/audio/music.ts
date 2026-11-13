/** Warm ukulele chords plus a marimba-like sine lead. Driven by the session AudioContext. */
export function scheduleIslandBeat(audio: {
  ctx: AudioContext | null;
  musicGain: GainNode | null;
  musicOn: boolean;
  muted: boolean;
  nextNote: number;
  step: number;
  pluck: (time: number, freq: number, dur: number, type: OscillatorType) => void;
}) {
  if (!audio.ctx || !audio.musicGain || !audio.musicOn || audio.muted) return;
  const scale = [261.63, 293.66, 329.63, 392, 440, 523.25, 587.33, 659.25];
  const melody = [0, 2, 4, 7, 4, 2, 5, 4, 0, 4, 5, 2, 4, 0, 2, 7];
  const chords = [
    [0, 2, 4],
    [0, 4, 7],
    [5, 7, 2],
    [3, 5, 7],
  ];
  while (audio.nextNote < audio.ctx.currentTime + 0.28) {
    const step = audio.step % melody.length;
    const note = scale[melody[step] % scale.length];
    audio.pluck(audio.nextNote, note, 0.34, "sine");
    audio.pluck(audio.nextNote, note * 2, 0.14, "triangle");
    if (step % 4 === 0) {
      const chord = chords[(audio.step >> 2) % chords.length];
      for (const degree of chord) {
        audio.pluck(audio.nextNote, scale[degree % scale.length] / 2, 0.46, "triangle");
      }
    }
    audio.nextNote += 0.42;
    audio.step++;
  }
}
