import { Preset } from '.'
import { UNIVERSE as U, addrs } from '../consts'
import { sin } from '../lib'
export const 
LED_ON = 'led.on',
LED_ON_B = 'led.on.b',
LED_CHASE_M7 = 'led.chase.m7'





export const led: Preset[] = [
  {
    id: LED_ON,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_LF_D, s)
      d.set(U, addrs.LED_RF_D, s)
      d.set(U, addrs.LED_LB_D, s)
      d.set(U, addrs.LED_RB_D, s)
      
    },
  },
  {
    id: LED_ON_B,
    render(d, _, s = 255) {
      d.set(U, addrs.LED_LB_D, s)
      d.set(U, addrs.LED_RB_D, s)
      
    },
  },
  
  {
    id: LED_CHASE_M7,
    render(d, t, n = 1) {
      const nt = (o: number) => (((t * 2 * n) / 2 + o) % 4 < 1 ? 255 : 0)
      d.set(U, addrs.LED_LB_D, nt(0))
      d.set(U, addrs.LED_LF_D, nt(0))
      d.set(U, addrs.LED_RB_D, nt(0))
      d.set(U, addrs.LED_RF_D, nt(0))
    },
  },
  // {
  //   id: LED_SINWAVE,
  //   render(d, t, n = 1, min = 0, max = 255) {
  //     const nt = (o: number) => ((t + o) * n) / 2
  //     d.set(U, addrs.LED_LF_DIM, sin(nt(0 / 4), min, max))
  //     d.set(U, addrs.LED_LR_DIM, sin(nt(0 / 4), min, max))
  //     d.set(U, addrs.LED_RF_DIM, sin(nt(0 / 4), min, max))
  //     d.set(U, addrs.LED_RR_DIM, sin(nt(0 / 4), min, max))
  //   },
  // },
]
