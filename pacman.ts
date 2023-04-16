export class Pacman {
  private xPosition: number
  private yPosition: number
  private facingIndex: number
  private directions = [
    'NORTH',
    'EAST',
    'SOUTH',
    'WEST'
  ]

  constructor() {
    this.xPosition = 0
    this.yPosition = 0
    this.facingIndex = 0
  }

  get x(): number {
    return this.xPosition
  }
  set x(value: number) {
    this.xPosition = value
  }

  get y(): number {
    return this.yPosition
  }
  set y(value: number) {
    this.yPosition = value
  }

  get f(): number {
    return this.facingIndex
  }
  set f(value: number) {
    this.facingIndex = value
  }
}