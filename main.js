"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var runPacman = function (inputPath) {
    var input = fs.readFileSync(inputPath, 'utf-8');
    var unfilteredCommands = input.split('\n');
    // Remove instances of '' from the commands array due to input format
    var commands = unfilteredCommands.filter(function (command) { return command; });
    // Discard all commands before the first PLACE command
    var firstPlaceCommand = commands.findIndex(function (command) { return command.startsWith('PLACE'); });
    commands = commands.slice(firstPlaceCommand);
    console.log(JSON.stringify(commands, null, 2));
};
runPacman('input.txt');
