// import { Preset } from '.'
// import { addrs, UNIVERSE as U } from '../consts'

// export const SPOT = 'spot',
//   SPOT_C = 'spot.c',
//   SPOT_L = 'spot.l',
//   SPOT_R = 'spot.r'

// export const spot: Preset[] = [
//   {
//     id: SPOT,
//     extends: [SPOT_C, SPOT_L, SPOT_R],
//   },
//   {
//     id: SPOT_C,
//     render(d, _, s = 255) {
//       d.set(U, addrs.CL_ITO_2, s)
//       d.set(U, addrs.SUS_SPOT_1C, s)
//     },
//   },
//   {
//     id: SPOT_L,
//     render(d, _, s = 255) {
//       d.set(U, addrs.CL_ITO_1, s)
//       d.set(U, addrs.SUS_SPOT_1L, s)
//     },
//   },
//   {
//     id: SPOT_R,
//     render(d, _, s = 255) {
//       d.set(U, addrs.CL_ITO_3, s)
//       d.set(U, addrs.SUS_SPOT_1R, s)
//     },
//   },
// ]
