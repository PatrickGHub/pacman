# Code-Challenge-1

## Running the solution

The solution uses TypeScript, Node, Jest, ESLint and GitHub Actions

Code can be run using the below commands:

```
npm i

npm run pacman
```

`npm run pacman` will run `tsc main.ts && tsc pacman.ts && node main.js` to compile the TypeScript into JavaScript, and run the resulting code.

Code was written while using Node v14.8.2.

Test coverage:

<img width="524" alt="Screenshot 2023-04-16 at 20 42 18" src="https://user-images.githubusercontent.com/13580512/232300483-e9e9b44f-d81e-48ec-859c-d8c5eb43f774.png">

## Code problem details:

-----------

Pacman Simulator

Description:

- The application is a simulation of Pacman moving on in a grid, of dimensions 5 units x 5 units.
- There are no other obstructions on the grid.
- Pacman is free to roam around the surface of the grid, but must be prevented from moving off the grid. Any movement that would result in Pacman moving off the grid must  be prevented, however further valid movement commands must still be allowed.
- Create an application that can read in commands of the following form -

```
PLACE X,Y,F

MOVE

LEFT

RIGHT

REPORT
```

- PLACE will put the Pacman on the grid in positon X,Y and facing NORTH,SOUTH, EAST or WEST.
- The origin (0,0) can be considered the SOUTH WEST most corner.
- The first valid command to Pacman is a PLACE command, after that, any sequence of commands may be issued, in any order, including another PLACE command. The application should discard all commands in the sequence until a valid PLACE command has been executed.
- MOVE will move Pacman one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate Pacman 90 degrees in the specified direction without changing the position of Pacman.
- REPORT will announce the X,Y and F of Pacman. This can be in any form, but standard output is sufficient.
- Pacman that is not on the grid can choose the ignore the MOVE, LEFT, RIGHT and REPORT commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

**Constraints:**

- Pacman must not move off the grid during movement. This also includes the initial placement of Pacman.
- Any move that would cause Pacman to fall must be ignored.

Example Input and Output:
```
a)
PLACE 0,0,NORTH

MOVE

REPORT

Output: 0,1,NORTH
```
```
b)

PLACE 0,0,NORTH

LEFT

REPORT

Output: 0,0,WEST
```
```
c)

PLACE 1,2,EAST

MOVE

MOVE

LEFT

MOVE

REPORT

Output: 3,3,NORTH
```

**Deliverables:**
- Spend as little or as much time as you like on the challenge.
- The code you produce can be in any language
- *It is not required to provide any graphical output* showing the movement of Pacman.
- The output of the efforts *must be committed back into a Public Repo in Github* and the URL shared back for review.
- Proving your code works via unit testing is highly encouraged




