// import { DmxFrame } from '@nandenjin/alien-core'
// import { Preset } from '.'
// import { UNIVERSE as U, addrs } from '../consts'

// export const renderNagare = (d: DmxFrame, w: number, p: number, b: number) => {
//   d.set(U, addrs.NGR_W_1L, w)
//   d.set(U, addrs.NGR_W_1R, w)
//   d.set(U, addrs.NGR_W_2L, w)
//   d.set(U, addrs.NGR_W_2R, w)
//   d.set(U, addrs.NGR_P_1L, p)
//   d.set(U, addrs.NGR_P_2L, p)
//   d.set(U, addrs.NGR_B_1R, b)
//   d.set(U, addrs.NGR_B_2R, b)
// }

// export const NAGARE_W = 'nagare.w',
//   NAGARE_PINK = 'nagare.pink',
//   NAGARE_BLUE = 'nagare.blue'

// export const nagare: Preset[] = [
//   {
//     id: NAGARE_W,
//     render(d, _, s = 255) {
//       renderNagare(d, s, 0, 0)
//     },
//   },
//   {
//     id: NAGARE_PINK,
//     render(d, _, s = 255) {
//       renderNagare(d, 0, s, 0)
//     },
//   },
//   {
//     id: NAGARE_BLUE,
//     render(d, _, s = 255) {
//       renderNagare(d, 0, 0, s)
//     },
//   },
// ]
