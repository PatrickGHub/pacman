import * as fs from 'fs'

const runPacman = (inputPath: string) => {
  const input = fs.readFileSync(inputPath, 'utf-8')
  const unfilteredCommands = input.split('\n')

  // Remove instances of '' from the commands array due to input format
  let commands = unfilteredCommands.filter((command: string) => command)

  // Discard all commands before the first PLACE command
  const firstPlaceCommand = commands.findIndex((command: string) => command.startsWith('PLACE'))
  commands = commands.slice(firstPlaceCommand)

  console.log(JSON.stringify(commands, null, 2))

}

runPacman('input.txt')