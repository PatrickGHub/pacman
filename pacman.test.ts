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
