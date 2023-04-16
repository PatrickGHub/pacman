import { Pacman } from './pacman'

describe('PLACE tests', () => {
  const pacman = new Pacman()

  it('Correctly sets pacman\'s coordinates', () => {
    pacman.place('PLACE 1,2,EAST')
    expect(pacman.x).toEqual(1)
    expect(pacman.y).toEqual(2)
  })

  it('Correctly sets pacman\'s direction', () => {
    pacman.place('PLACE 1,2,EAST')
    expect(pacman.f).toEqual(1)
  })

  it('Throws an error when pacman is placed outside of the grid', () => {
    expect(() => pacman.place('PLACE 9,9,NORTH')).toThrow(Error)
  })

  it('Throws an error when given an incorrect direction', () => {
    expect(() => pacman.place('PLACE 1,2,POTATO')).toThrow(Error)
  })
})

describe('MOVE tests', () => {
  const pacman = new Pacman()

  it('Can move pacman north', () => {
    pacman.place('PLACE 0,0,NORTH')
    pacman.move()
    expect(pacman.x).toEqual(0)
    expect(pacman.y).toEqual(1)
  })

  it('Can move pacman east', () => {
    pacman.place('PLACE 0,0,EAST')
    pacman.move()
    expect(pacman.x).toEqual(1)
    expect(pacman.y).toEqual(0)
  })

  it('Can move pacman south', () => {
    pacman.place('PLACE 5,5,SOUTH')
    pacman.move()
    expect(pacman.x).toEqual(5)
    expect(pacman.y).toEqual(4)
  })

  it('Can move pacman west', () => {
    pacman.place('PLACE 5,5,WEST')
    pacman.move()
    expect(pacman.x).toEqual(4)
    expect(pacman.y).toEqual(5)
  })

  it('Won\'t move pacman outside of the grid on the x axis', () => {
    pacman.place('PLACE 5,5,EAST')
    pacman.move()
    expect(pacman.x).toEqual(5)
  })

  it('Won\'t move pacman outside of the grid on the y axis', () => {
    pacman.place('PLACE 0,0,SOUTH')
    pacman.move()
    expect(pacman.y).toEqual(0)
  })
})

describe('TURN tests', () => {
  const pacman = new Pacman()

  it('Can turn pacman left from north to west across the array \'boundary\'', () => {
    pacman.place('PLACE 0,0,NORTH')
    pacman.turn('LEFT')
    expect(pacman.f).toEqual(3)
  })
  it('Can turn pacman right from west to north across the array \'boundary\'', () => {
    pacman.place('PLACE 0,0,WEST')
    pacman.turn('RIGHT')
    expect(pacman.f).toEqual(0)
  })
})