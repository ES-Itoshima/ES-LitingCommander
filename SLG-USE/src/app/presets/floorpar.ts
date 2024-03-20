// import { Preset } from '.'
// import { UNIVERSE as U, addrs } from '../consts'
// import { sin } from '../lib'

// export const FLOORPAR = 'floorpar',
//   FLOORPAR_WAVE = 'floorpar.wave',
//   FLOORPAR_RANDOM_BLINK = 'floorpar.random_blink',
//   FLOORPAR_SINWAVE = 'floorpar.sinwave',
//   FLOORPAR_SINWAVE_REVERSE = 'floorpar.sinwave.reverse'

// export const floorpar: Preset[] = [
//   {
//     id: FLOORPAR,
//     render(d, _, s = 255) {
//       d.set(U, addrs.FL_PAR_1, s)
//       d.set(U, addrs.FL_PAR_2, s)
//       d.set(U, addrs.FL_PAR_3, s)
//       d.set(U, addrs.FL_PAR_4, s)
//     },
//   },
//   {
//     id: FLOORPAR_WAVE,
//     render(d, t, n = 1, s = 255) {
//       const nt = (o: number) => ((n * t + o) % 2 > 1 ? s : 0)
//       d.set(U, addrs.FL_PAR_1, nt(0 / 4))
//       d.set(U, addrs.FL_PAR_2, nt(1 / 4))
//       d.set(U, addrs.FL_PAR_3, nt(2 / 4))
//       d.set(U, addrs.FL_PAR_4, nt(3 / 4))
//     },
//   },
//   {
//     id: FLOORPAR_RANDOM_BLINK,
//     render(d, t, n = 1, s = 255) {
//       const nt = (o: number) => ((n * t + o) % 2 > 1 ? s : 0)
//       d.set(U, addrs.FL_PAR_1, nt(0 / 4))
//       d.set(U, addrs.FL_PAR_2, nt(1 / 4))
//       d.set(U, addrs.FL_PAR_3, nt(7 / 4))
//       d.set(U, addrs.FL_PAR_4, nt(2 / 4))
//     },
//   },
//   {
//     id: FLOORPAR_SINWAVE,
//     render(d, t, n = 1, min = 0, max = 255) {
//       const nt = (o: number) => sin((t * n) / 8 + o, min, max)
//       d.set(U, addrs.FL_PAR_1, nt(0 / 4))
//       d.set(U, addrs.FL_PAR_2, nt(1 / 4))
//       d.set(U, addrs.FL_PAR_3, nt(2 / 4))
//       d.set(U, addrs.FL_PAR_4, nt(3 / 4))
//     },
//   },
//   {
//     id: FLOORPAR_SINWAVE_REVERSE,
//     render(d, t, n = 1, min = 0, max = 255) {
//       const nt = (o: number) => sin((-t * n) / 8 + o, min, max)
//       d.set(U, addrs.FL_PAR_1, nt(0 / 4))
//       d.set(U, addrs.FL_PAR_2, nt(1 / 4))
//       d.set(U, addrs.FL_PAR_3, nt(2 / 4))
//       d.set(U, addrs.FL_PAR_4, nt(3 / 4))
//     },
//   },
// ]
