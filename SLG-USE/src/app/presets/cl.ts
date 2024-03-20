import { Preset } from '.'
import { addrs, UNIVERSE as U } from '../consts'

export const SF = 'sf'

export const cl: Preset[] = [
  {
    id: SF,
    render(d, _, s = 255) {
      d.set(U, addrs.SF, s)
    },
  },
]
