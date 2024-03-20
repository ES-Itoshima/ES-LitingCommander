// import { Preset } from '.'
// import { addrs, UNIVERSE as U, vals } from '../consts'
// import { BL } from './bl'

// const BASE = 'base',
//   AUDIENCE = '_audience',
//   REST = '_rest',
//   LAUNCH = '_launch',
//   WORKING = '_working'

// export const base: Preset[] = [
//   // すべての灯体の初期状態（ホームポジション、シャッター解放のための固定値など）を設定するプリセット
//   {
//     id: BASE,
//     render(d) {
//       // d.set(U, addrs.MARTIN_L_LIGHT, vals.MARTIN_SHUTTER_OPEN)
//       d.set(U, addrs.MARTIN_R_LIGHT, vals.MARTIN_SHUTTER_OPEN)
//       d.set(U, addrs.GT15_L_STROBE, vals.GT15_STROBE_STATIC)
//       d.set(U, addrs.GT15_R_STROBE, vals.GT15_STROBE_STATIC)
//       d.set(U, addrs.MARTIN_R_PAN, vals.MARTIN_PAN_CENTER)
//       d.set(U, addrs.GT15_L_PAN, vals.GT15_L_PAN_CENTER)
//       d.set(U, addrs.GT15_R_PAN, vals.GT15_R_PAN_CENTER)
//     },
//   },

//   // ライト点灯が必要な灯体を起動するプリセット
//   {
//     id: LAUNCH,
//     render(d) {
//       d.set(U, addrs.MARTIN_L_LIGHT, vals.MARTIN_LIGHT_ON)
//       d.set(U, addrs.MARTIN_R_LIGHT, vals.MARTIN_LIGHT_ON)
//     },
//   },

//   // ライト点灯が必要な灯体を停止するプリセット
//   {
//     id: REST,
//     render(d) {
//       d.set(U, addrs.MARTIN_L_LIGHT, vals.MARTIN_LIGHT_OFF)
//       d.set(U, addrs.MARTIN_R_LIGHT, vals.MARTIN_LIGHT_OFF)
//     },
//   },

//   // 客電
//   {
//     id: AUDIENCE,
//     render(d) {
//       d.set(U, addrs.AUDIENCE_1, 255)
//       d.set(U, addrs.AUDIENCE_2, 255)
//       d.set(U, addrs.AUDIENCE_3, 255)
//       d.set(U, addrs.AUDIENCE_4, 255)
//     },
//   },

//   // 作業灯（客電+ボーダー）
//   {
//     id: WORKING,
//     extends: [BL, AUDIENCE],
//   },

//   {
//     id: 'lh1',
//     render(d) {
//       d.set(U, 98, 255)
//       d.set(U, addrs.UH_8, 255)
//       d.set(U, 108, 255)
//       d.set(U, addrs.LH_4, 255)
//       d.set(U, addrs.LH_8, 255)
//     },
//   },
// ]
