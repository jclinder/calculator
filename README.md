# Simple Calculator app

This is a simple React calculator loosely based on the freecodecamp calculator project

Here are a few things I learned from this project:
* I learned how to implement unit tests with Jest. The calculatorFunc.js functions had fairly complex branching `if` logic, so testing was extremely helpful for ensuring the logic was operating properly without having to manually test everything. It also increased my confidence that refactoring one branch of the `if` logic wouldn't silently break other branches.
* Since I've accumulated more experience working with React and the front-end in general, I was able to simplify my React component structure. I rendered the entire calculator object in a single react component.
* I learned to use breakpoints. While writing `Calc.handleClick`, I was trying to figure out how to pass the button's identify to the handleClick function. In the past, I would've broken out the buttons as a separate component and passed props. However, I was able to set a breakpoint in the `handleClick` function, analyze the local scope, and figure out that I could access the button's identify in the `event.target.innerHTML` attribute.
* I got to play around with css grid. `Grid-template-areas` was crucial for organizing buttons.
