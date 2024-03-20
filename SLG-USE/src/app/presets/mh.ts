// import { Preset } from '.'
// import { UNIVERSE as U, addrs, vals } from '../consts'
// import { cos, sin } from '../lib'

// export const MH_ON = 'mh.on',
//   MH_BLINK = 'mh.blink',
//   MH_PAN_CENTER = 'mh.pan.center',
//   MH_PAN_FOCUS = 'mh.pan.focus',
//   MH_TILT_MID = 'mh.tilt.mid',
//   MH_TILT_FL = 'mh.tilt.fl',
//   MH_TILT_TOP = 'mh.tilt.top',
//   MH_TILT_WAVE = 'mh.tilt.wave',
//   MH_POS_BACK = 'mh.pan.back',
//   MH_POS_ROUND = 'mh.pos.round'

// export const mh: Preset[] = [
//   {
//     id: MH_ON,
//     render(d, _, s = 255) {
//       // d.set(U, addrs.MARTIN_L_DIM, s)
//       d.set(U, addrs.MARTIN_R_DIM, s)
//       d.set(U, addrs.GT15_L_DIM, s)
//       d.set(U, addrs.GT15_R_DIM, s)
//     },
//   },
//   {
//     id: MH_BLINK,
//     render(d, t, n = 1, s = 255) {
//       const nt = (o: number) => ((t * n + o) % 2 > 1 ? s : 0)
//       // d.set(U, addrs.MARTIN_L_DIM, nt(0 / 4))
//       d.set(U, addrs.MARTIN_R_DIM, nt(1 / 4))
//       d.set(U, addrs.GT15_L_DIM, nt(2 / 4))
//       d.set(U, addrs.GT15_R_DIM, nt(3 / 4))
//     },
//   },
//   {
//     id: MH_PAN_CENTER,
//     render(d) {
//       d.set(U, addrs.MARTIN_R_PAN, vals.MARTIN_PAN_CENTER)
//       d.set(U, addrs.GT15_L_PAN, vals.GT15_L_PAN_CENTER)
//       d.set(U, addrs.GT15_R_PAN, vals.GT15_R_PAN_CENTER)
//     },
//   },
//   {
//     id: MH_PAN_FOCUS,
//     render(d) {
//       d.set(U, addrs.MARTIN_R_PAN, vals.MARTIN_PAN_CENTER)
//       d.set(U, addrs.GT15_L_PAN, vals.GT15_L_PAN_FOCUS)
//       d.set(U, addrs.GT15_R_PAN, vals.GT15_R_PAN_FOCUS)
//     },
//   },
//   {
//     id: MH_POS_BACK,
//     render(d) {
//       d.set(U, addrs.MARTIN_R_PAN, vals.MARTIN_PAN_CENTER)
//       d.set(U, addrs.GT15_L_PAN, vals.GT15_L_PAN_BACK)
//       d.set(U, addrs.GT15_R_PAN, vals.GT15_R_PAN_BACK)
//       d.set(U, addrs.MARTIN_R_TILT, vals.MARTIN_TILT_MID)
//       d.set(U, addrs.GT15_L_TILT, vals.GT15_L_TILT_HORIZONTAL)
//       d.set(U, addrs.GT15_R_TILT, vals.GT15_R_TILT_HORIZONTAL)
//     },
//   },
//   {
//     id: MH_TILT_MID,
//     render(d) {
//       d.set(U, addrs.MARTIN_R_TILT, vals.MARTIN_TILT_MID)
//       d.set(U, addrs.GT15_L_TILT, vals.GT15_L_TILT_MID)
//       d.set(U, addrs.GT15_R_TILT, vals.GT15_R_TILT_MID)
//     },
//   },
//   {
//     id: MH_TILT_TOP,
//     render(d) {
//       d.set(U, addrs.MARTIN_R_TILT, vals.MARTIN_TILT_TOP)
//       d.set(U, addrs.GT15_L_TILT, vals.GT15_L_TILT_TOP)
//       d.set(U, addrs.GT15_R_TILT, vals.GT15_R_TILT_TOP)
//     },
//   },
//   {
//     id: MH_TILT_FL,
//     render(d) {
//       d.set(U, addrs.MARTIN_R_TILT, vals.MARTIN_TILT_FL)
//       d.set(U, addrs.GT15_L_TILT, vals.GT15_L_TILT_FL)
//       d.set(U, addrs.GT15_R_TILT, vals.GT15_R_TILT_FL)
//     },
//   },
//   {
//     id: MH_TILT_WAVE,
//     render(d, t, n = 1) {
//       const nt = (o: number) => ((t + o) * n) / 2

//       d.set(
//         U,
//         addrs.MARTIN_R_TILT,
//         sin(nt(0 / 3), vals.MARTIN_TILT_MID, vals.MARTIN_TILT_TOP)
//       )
//       d.set(
//         U,
//         addrs.GT15_L_TILT,
//         sin(nt(1 / 3), vals.GT15_L_TILT_MID, vals.GT15_L_TILT_TOP)
//       )
//       d.set(
//         U,
//         addrs.GT15_R_TILT,
//         sin(nt(2 / 3), vals.GT15_R_TILT_MID, vals.GT15_R_TILT_TOP)
//       )
//     },
//   },
//   {
//     id: MH_POS_ROUND,
//     render(d, t, n = 1) {
//       const nt = (o: number) => (n * (t + o)) / 8
//       d.set(
//         U,
//         addrs.MARTIN_R_PAN,
//         cos(nt(0), vals.MARTIN_PAN_L, vals.MARTIN_PAN_R)
//       )
//       d.set(
//         U,
//         addrs.GT15_L_PAN,
//         cos(nt(1 / 3), vals.GT15_L_PAN_L, vals.GT15_L_PAN_R)
//       )
//       d.set(
//         U,
//         addrs.GT15_R_PAN,
//         cos(nt(0 / 3), vals.GT15_R_PAN_L, vals.GT15_R_PAN_R)
//       )
//       d.set(
//         U,
//         addrs.MARTIN_R_TILT,
//         sin(nt(0), vals.MARTIN_TILT_TOP, vals.MARTIN_TILT_FL)
//       )
//       d.set(
//         U,
//         addrs.GT15_L_TILT,
//         sin(nt(1 / 3), vals.GT15_L_TILT_TOP, vals.GT15_L_TILT_FL)
//       )
//       d.set(
//         U,
//         addrs.GT15_R_TILT,
//         sin(nt(0 / 3), vals.GT15_R_TILT_TOP, vals.GT15_R_TILT_FL)
//       )
//     },
//   },
// ]
