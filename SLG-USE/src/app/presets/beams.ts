// import { Preset } from '.'
// import { addrs, UNIVERSE as U } from '../consts'

// export const BEAMS_ON = 'beams.on',
//   BEAMS_BLINK = 'beams.blink',
//   BEAMS_WAVE = 'beams.wave'

// export const beams: Preset[] = [
//   {
//     id: BEAMS_ON,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS_BEAM_1L, s)
//       d.set(U, addrs.SUS_BEAM_1R, s)
//       d.set(U, addrs.SUS_BEAM_2L, s)
//       d.set(U, addrs.SUS_BEAM_2R, s)
//       d.set(U, addrs.SUS_BEAM_3L, s)
//       d.set(U, addrs.SUS_BEAM_3R, s)
//     },
//   },
//   {
//     id: BEAMS_BLINK,
//     render(d, t, n = 1, s = 255) {
//       const ns = (t * n) % 1 > 0.5 ? 1 : 0
//       d.set(U, addrs.SUS_BEAM_1L, s * ns)
//       d.set(U, addrs.SUS_BEAM_1R, s * ns)
//       d.set(U, addrs.SUS_BEAM_2L, s * ns)
//       d.set(U, addrs.SUS_BEAM_2R, s * ns)
//       d.set(U, addrs.SUS_BEAM_3L, s * ns)
//       d.set(U, addrs.SUS_BEAM_3R, s * ns)
//     },
//   },
//   {
//     id: BEAMS_WAVE,
//     render(d, t, n = 1, s = 255) {
//       const ns = (o: number) => ((t * n + o) % 2 > 1 ? 1 : 0)
//       d.set(U, addrs.SUS_BEAM_1L, s * ns(0 / 4))
//       d.set(U, addrs.SUS_BEAM_1R, s * ns(3 / 4))
//       d.set(U, addrs.SUS_BEAM_2L, s * ns(2 / 4))
//       d.set(U, addrs.SUS_BEAM_2R, s * ns(1 / 4))
//       d.set(U, addrs.SUS_BEAM_3L, s * ns(0 / 4))
//       d.set(U, addrs.SUS_BEAM_3R, s * ns(3 / 4))
//     },
//   },
// ]
