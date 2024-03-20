export function sin(t: number, min = 0, max = 255) {
  return ((Math.sin(t * Math.PI * 2) + 1) / 2) * (max - min) + min
}

export function cos(t: number, min = 0, max = 255) {
  return ((Math.cos(t * Math.PI * 2) + 1) / 2) * (max - min) + min
}

export function square(t: number, ...vals: number[]) {
  return vals[Math.floor(t % vals.length)]
}
