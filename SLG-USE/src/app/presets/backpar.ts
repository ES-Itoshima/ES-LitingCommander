// import { Preset } from '.'
// import { addrs, UNIVERSE as U } from '../consts'

// export const BACKPAR_W = 'backpar.w',
//   BACKPAR_C_W = 'backpar.c.w',
//   BACKPAR_LR_W = 'backpar.lr.w',
//   BACKPAR_LR_A = 'backpar.lr.a'

// export const backpar: Preset[] = [
//   {
//     id: BACKPAR_W,
//     extends: ['backpar.c.w', 'backpar.lr.w'],
//   },
//   {
//     id: BACKPAR_C_W,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS_PAR_W_3C1, s)
//       d.set(U, addrs.SUS_PAR_W_3C2, s)
//     },
//   },
//   {
//     id: BACKPAR_LR_W,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS_PAR_W_3L, s)
//       d.set(U, addrs.SUS_PAR_W_3R, s)
//     },
//   },
//   {
//     id: BACKPAR_LR_A,
//     render(d, _, s = 255) {
//       d.set(U, addrs.SUS_PAR_A_3L, s)
//       d.set(U, addrs.SUS_PAR_A_3R, s)
//     },
//   },
// ]
