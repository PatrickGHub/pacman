import * as fs from 'fs'
import { Pacman } from './pacman'

const runPacman = (inputPath: string) => {
  const input = fs.readFileSync(inputPath, 'utf-8')
  const unfilteredCommands = input.split('\n')

  // Remove instances of '' from the commands array due to input format
  let commands = unfilteredCommands.filter((command: string) => command)

  // Discard all commands before the first PLACE command
  const firstPlaceCommand = commands.findIndex((command: string) => command.startsWith('PLACE'))
  commands = commands.slice(firstPlaceCommand)

  console.log(JSON.stringify(commands, null, 2), '\n')

  const pacman = new Pacman()

  for (const command of commands) {
    if (command.startsWith('PLACE')) {
      pacman.place(command)
    } else if (command === 'MOVE') {
      pacman.move()
    } else if (command === 'LEFT' || command === 'RIGHT') {
      pacman.turn(command)
    } else if (command === 'REPORT') {
      pacman.report()
    } else {
      console.log(`Invalid input provided: ${command}`)
    }
  }
}

runPacman('input.txt')