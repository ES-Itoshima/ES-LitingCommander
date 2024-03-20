import { DmxFrame } from '@nandenjin/alien-core'
import { Preset } from '.'
import { UNIVERSE as U, addrs } from '../consts'
import { renderPreset } from '..'
import { sin } from '../lib'

export const renderGround = (d: DmxFrame, w: number, a: number, b: number) => {
  d.set(U, addrs.SUS_1A, w)
  d.set(U, addrs.SUS_1B, w)
  d.set(U, addrs.SUS_1C, w)
  d.set(U, addrs.SUS_1D, w)
  d.set(U, addrs.SUS_1E, w)
  d.set(U, addrs.SUS_2A, a)
  d.set(U, addrs.SUS_2B, a)
  d.set(U, addrs.SUS_2C, a)
  d.set(U, addrs.SUS_3A, b)
  d.set(U, addrs.SUS_3B, b)
  d.set(U, addrs.SUS_3C, b / 1.5)
}

export const
GROUND_BASE = 'ground.base',
GROUND_1 = 'ground1',
GROUND_2 = 'ground2',
GROUND_3 = 'ground3'


export const ground: Preset[] = [
  {
    id: GROUND_BASE,
    render(d, _, s = 255) {
      renderGround(d, s, s, s)
    },
  },
  {
    id: GROUND_1,
    render(d, _, s = 255) {
      d.set(U, addrs.SUS_1A, s)
      d.set(U, addrs.SUS_1B, s)
      d.set(U, addrs.SUS_1C, s)
      d.set(U, addrs.SUS_1D, s)
      d.set(U, addrs.SUS_1E, s)
    },
  },
  {
    id: GROUND_2,
    render(d, _, s = 255) {
      d.set(U, addrs.SUS_2A, s)
      d.set(U, addrs.SUS_2B, s)
      d.set(U, addrs.SUS_2C, s)
    },
  },
  {
    id: GROUND_3,
    render(d, _, s = 255) {
      d.set(U, addrs.SUS_3A, s)
      d.set(U, addrs.SUS_3B, s)
      d.set(U, addrs.SUS_3C, s / 1.5)
    },
  },
//   {
//     id: GROUND_TASUMAKI_CHASE3,
//     render(d, t, n = 10) {
//       const nt = (o: number) => (((t * n) / 2 + o) % 2 < 1 ? 135 : 0)
//       d.merge(renderPreset(GROUND_BASE, t, nt(0)))
//     },
//   },
  //   id: GROUND_W,
  //   render(d, _, s = 255) {
  //     renderGround(d, s, s * 0.0, s)
  //   },
  // },
  // {
  //   id: GROUND_A,
  //   render(d, _, s = 255) {
  //     renderGround(d, 0, s, 0)
  //   },
  // },
  // {
  //   id: GROUND_B,
  //   render(d, _, s = 255) {
  //     renderGround(d, 0, 0, s)
  //   },
  // },
  // {
  //   id: GROUND_LA,
  //   render(d, _, s = 255) {
  //     renderGround(d, s, s / 2, 0)
  //   },
  // },
  // {
  //   id: GROUND_LB,
  //   render(d, _, s = 255) {
  //     renderGround(d, s / 2, 0, s)
  //   },
  // },
  // {
  //   id: GROUND_WARM,
  //   render(d, _, s = 255) {
  //     renderGround(d, s, s, 200)
  //   },
  // },
  // {
  //   id: GROUND_COOL,
  //   render(d, _, s = 255) {
  //     renderGround(d, s, 200, s)
  //   },
  // },
]
