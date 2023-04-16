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

  public place(command: string) {
    const placeArray = command.replace(' ', ',').split(',')
    const xInput = +placeArray[1]
    const yInput = +placeArray[2]
    const fInput = placeArray[3]

    if (!this.directions.includes(fInput)) {
      throw new Error('Invalid PLACE direction provided (\'NORTH\' | \'EAST\' | \'SOUTH\' | \'WEST\')')
    }

    if (xInput < 0 || yInput < 0 || xInput > 5 || yInput > 5) {
      throw new Error('Invalid coordinate provided. x and y values must be between 0 and 5 inclusive')
    }

    this.xPosition = xInput
    this.yPosition = yInput
    this.facingIndex = this.directions.indexOf(fInput)
  }

  public move() {
    if (this.facingIndex === 0) {
      if (this.yPosition < 5) return this.yPosition += 1
    }
    if (this.facingIndex === 1) {
      if (this.xPosition < 5) return this.xPosition += 1
    }
    if (this.facingIndex === 2) {
      if (this.yPosition) return this.yPosition -= 1
    }
    if (this.facingIndex === 3) {
      if (this.xPosition) return this.xPosition -= 1
    }
  }

  public report() {
    // return console.log({
    //   x: this.xPosition,
    //   y: this.yPosition,
    //   facing: this.directions[this.facingIndex]
    // })
  
    return console.log(`${this.xPosition},${this.yPosition},${this.directions[this.facingIndex]}`)
  }
}