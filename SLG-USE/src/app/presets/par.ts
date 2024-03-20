// import { Preset } from '.'
// import { addrs, UNIVERSE as U } from '../consts'

// export const PAR = 'par',
//   PAR_PINK = 'par.pink',
//   PAR_GREEN = 'par.green',
//   PAR_WAVE = 'par.wave',
//   PAR_PINK_WAVE = 'par.pink.wave',
//   PAR_GREEN_WAVE = 'par.green.wave'

// export const par: Preset[] = [
//   {
//     id: PAR,
//     extends: [PAR_PINK, PAR_GREEN],
//   },
//   {
//     id: PAR_PINK,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS_PAR_2L, s)
//       d.set(U, addrs.SUS_PAR_2CR, s)
//       d.set(U, addrs.SUS_PAR_1CL, s)
//     },
//   },
//   {
//     id: PAR_GREEN,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS_PAR_2R, s)
//       d.set(U, addrs.SUS_PAR_2CL, s)
//       d.set(U, addrs.SUS_PAR_1CR, s)
//     },
//   },
//   {
//     id: PAR_WAVE,
//     extends: [PAR_PINK_WAVE, PAR_GREEN_WAVE],
//   },
//   {
//     id: PAR_PINK_WAVE,
//     render(d, t, n = 1, s = 255) {
//       const tn = (o: number) => ((t * n + o) % 2 > 1 ? s : 0)
//       d.set(U, addrs.SUS_PAR_2L, tn(0 / 4))
//       d.set(U, addrs.SUS_PAR_2CR, tn(2 / 4))
//       d.set(U, addrs.SUS_PAR_1CL, tn(0 / 4))
//     },
//   },
//   {
//     id: PAR_GREEN_WAVE,
//     render(d, t, n = 1, s = 255) {
//       const tn = (o: number) => ((t * n + o) % 2 > 1 ? s : 0)
//       d.set(U, addrs.SUS_PAR_2R, tn(0 / 4))
//       d.set(U, addrs.SUS_PAR_2CL, tn(2 / 4))
//       d.set(U, addrs.SUS_PAR_1CR, tn(0 / 4))
//     },
//   },
// ]
