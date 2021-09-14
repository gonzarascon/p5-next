import type p5Type from 'p5'

let x = 50
const y = 50

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(500, 500).parent(canvasParentRef)
}

export const draw = (p5: p5Type): void => {
  p5.background(0)
  p5.ellipse(x, y, 70, 70)
  if (x < 500) {
    x++
  }
}
